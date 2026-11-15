import fs from 'node:fs';
import path from 'path';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { MAIN_PAGES_SEO, SERVICE_PAGES, HOME_FAQS, SITE_CONFIG, PORTFOLIO_CASE_STUDIES, FaqItem } from './seoData';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

interface RouteMetaSpec {
  path: string;
  title: string;
  description: string;
  keywords: string;
  h1: string;
  summary: string;
  faqs?: FaqItem[];
  serviceType?: string;
  priceINR?: string;
}

function seoPrerenderPlugin(): Plugin {
  return {
    name: 'seo-route-prerender',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const templatePath = path.join(distDir, 'index.html');
      if (!fs.existsSync(templatePath)) return;

      const templateHtml = fs.readFileSync(templatePath, 'utf-8');
      const baseUrl = SITE_CONFIG.baseUrl;

      const routes: RouteMetaSpec[] = [
        {
          path: '/work',
          title: MAIN_PAGES_SEO.work.title,
          description: MAIN_PAGES_SEO.work.description,
          keywords: MAIN_PAGES_SEO.work.keywords,
          h1: MAIN_PAGES_SEO.work.h1,
          summary: MAIN_PAGES_SEO.work.description,
        },
        {
          path: '/about',
          title: MAIN_PAGES_SEO.about.title,
          description: MAIN_PAGES_SEO.about.description,
          keywords: MAIN_PAGES_SEO.about.keywords,
          h1: MAIN_PAGES_SEO.about.h1,
          summary: MAIN_PAGES_SEO.about.description,
        },
        {
          path: '/services',
          title: MAIN_PAGES_SEO.services.title,
          description: MAIN_PAGES_SEO.services.description,
          keywords: MAIN_PAGES_SEO.services.keywords,
          h1: MAIN_PAGES_SEO.services.h1,
          summary: MAIN_PAGES_SEO.services.description,
        },
        {
          path: '/packages',
          title: MAIN_PAGES_SEO.packages.title,
          description: MAIN_PAGES_SEO.packages.description,
          keywords: MAIN_PAGES_SEO.packages.keywords,
          h1: MAIN_PAGES_SEO.packages.h1,
          summary: MAIN_PAGES_SEO.packages.description,
          faqs: HOME_FAQS,
        },
        {
          path: '/contact',
          title: MAIN_PAGES_SEO.contact.title,
          description: MAIN_PAGES_SEO.contact.description,
          keywords: MAIN_PAGES_SEO.contact.keywords,
          h1: MAIN_PAGES_SEO.contact.h1,
          summary: MAIN_PAGES_SEO.contact.description,
        },
        ...SERVICE_PAGES.map((svc) => ({
          path: svc.slug,
          title: svc.title,
          description: svc.description,
          keywords: svc.keywords,
          h1: svc.h1,
          summary: svc.aiSummary,
          faqs: svc.faqs,
          serviceType: svc.shortName,
          priceINR: svc.startingPriceINR.split('–')[0],
        })),
      ];

      for (const route of routes) {
        const canonicalUrl = `${baseUrl}${route.path}`;
        const orgId = `${baseUrl}/#organization`;
        const websiteId = `${baseUrl}/#website`;

        const graph: Record<string, unknown>[] = [
          {
            '@type': ['Organization', 'ProfessionalService'],
            '@id': orgId,
            name: SITE_CONFIG.name,
            url: baseUrl,
            email: SITE_CONFIG.email,
            telephone: SITE_CONFIG.phone,
            address: {
              '@type': 'PostalAddress',
              ...SITE_CONFIG.address,
            },
            areaServed: ['India', 'Worldwide'],
            openingHours: SITE_CONFIG.openingHours,
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: SITE_CONFIG.aggregateRating.ratingValue,
              reviewCount: SITE_CONFIG.aggregateRating.reviewCount,
            },
            knowsAbout: [
              'Website Design and Development',
              'Graphic Design',
              'Digital Marketing',
              'Logo Design',
              'Product Packaging Design',
              'Brochure and Visiting Card Design',
              'Book Cover Design',
              'YouTube Thumbnail Design',
            ],
            sameAs: [
              SITE_CONFIG.gmbUrl,
              SITE_CONFIG.instagramUrl,
              SITE_CONFIG.storeUrl,
              SITE_CONFIG.blogUrl,
            ],
          },
          {
            '@type': 'WebSite',
            '@id': websiteId,
            url: baseUrl,
            name: SITE_CONFIG.name,
          },
          {
            '@type': 'WebPage',
            '@id': `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: route.title,
            description: route.description,
            isPartOf: { '@id': websiteId },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
              { '@type': 'ListItem', position: 2, name: route.h1, item: canonicalUrl },
            ],
          },
        ];

        if (route.serviceType) {
          graph.push({
            '@type': 'Service',
            name: route.h1,
            description: route.summary,
            serviceType: route.serviceType,
            provider: { '@id': orgId },
            areaServed: 'Worldwide',
            url: canonicalUrl,
            ...(route.priceINR
              ? {
                  offers: {
                    '@type': 'Offer',
                    price: route.priceINR.replace(/[^\d]/g, '') || '400',
                    priceCurrency: 'INR',
                    availability: 'https://schema.org/InStock',
                  },
                }
              : {}),
          });
        }

        if (route.path === '/work') {
          graph.push({
            '@type': 'CollectionPage',
            name: 'Website Design & Development Case Studies – Abridge Media Services',
            url: canonicalUrl,
            creator: { '@id': orgId },
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: PORTFOLIO_CASE_STUDIES.map((study) => ({
                '@type': 'ListItem',
                position: study.position,
                name: study.schemaName,
                url: study.websiteUrl,
              })),
            },
          });
        }

        if (route.faqs && route.faqs.length > 0) {
          graph.push({
            '@type': 'FAQPage',
            mainEntity: route.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          });
        }

        const faqHtml = route.faqs
          ? route.faqs
              .map(
                (faq) =>
                  `<section><h2>${escapeHtml(faq.question)}</h2><p>${escapeHtml(faq.answer)}</p></section>`
              )
              .join('')
          : '';

        const navLinksHtml = [
          '/',
          '/services',
          '/packages',
          '/work',
          '/about',
          '/contact',
          ...SERVICE_PAGES.map((s) => s.slug),
        ]
          .map((href) => `<a href="${href}">${href === '/' ? 'Home' : href.replace('/', '')}</a>`)
          .join(' | ');

        let html = templateHtml;
        html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`);
        html = html.replace(
          /<meta name="description" content="[^"]*">/,
          `<meta name="description" content="${escapeHtml(route.description)}">`
        );
        html = html.replace(
          /<meta name="keywords" content="[^"]*">/,
          `<meta name="keywords" content="${escapeHtml(route.keywords)}">`
        );
        html = html.replace(
          /<link rel="canonical" href="[^"]*">/,
          `<link rel="canonical" href="${canonicalUrl}">`
        );
        html = html.replace(
          /<meta property="og:title" content="[^"]*">/,
          `<meta property="og:title" content="${escapeHtml(route.title)}">`
        );
        html = html.replace(
          /<meta property="og:description" content="[^"]*">/,
          `<meta property="og:description" content="${escapeHtml(route.description)}">`
        );
        html = html.replace(
          /<meta property="og:url" content="[^"]*">/,
          `<meta property="og:url" content="${canonicalUrl}">`
        );
        html = html.replace(
          /<meta name="twitter:title" content="[^"]*">/,
          `<meta name="twitter:title" content="${escapeHtml(route.title)}">`
        );
        html = html.replace(
          /<meta name="twitter:description" content="[^"]*">/,
          `<meta name="twitter:description" content="${escapeHtml(route.description)}">`
        );
        html = html.replace(
          /<script id="dynamic-seo-schema" type="application\/ld\+json">[\s\S]*?<\/script>/,
          `<script id="dynamic-seo-schema" type="application/ld+json">${JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': graph,
          })}</script>`
        );
        html = html.replace(
          /<noscript>[\s\S]*?<\/noscript>/,
          `<noscript><main style="max-width:900px;margin:40px auto;padding:20px;font-family:sans-serif;"><h1>${escapeHtml(
            route.h1
          )}</h1><p>${escapeHtml(route.summary)}</p>${faqHtml}<p>Contact: ${SITE_CONFIG.phoneDisplay} | ${
            SITE_CONFIG.email
          }</p><nav>${navLinksHtml}</nav></main></noscript>`
        );

        const targetDir = path.join(distDir, route.path.replace(/^\//, ''));
        fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');
      }
    },
  };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), seoPrerenderPlugin()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});

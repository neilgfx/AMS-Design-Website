import React, { useEffect } from 'react';
import { SITE_CONFIG, FaqItem, SERVICE_PAGES } from '../seoData';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface ServiceSchemaInput {
  name: string;
  description: string;
  serviceType: string;
  priceINR?: string;
}

interface CollectionItemInput {
  name: string;
  url: string;
}

interface CollectionSchemaInput {
  name: string;
  items: CollectionItemInput[];
}

interface SeoHeadProps {
  title: string;
  description: string;
  keywords?: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FaqItem[];
  serviceSchema?: ServiceSchemaInput;
  collectionSchema?: CollectionSchemaInput;
  includeCatalog?: boolean;
}

function upsertMetaTag(attributeName: 'name' | 'property', attributeValue: string, content: string) {
  let tag = document.head.querySelector(`meta[${attributeName}="${attributeValue}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attributeName, attributeValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords,
  path,
  ogImage = SITE_CONFIG.ogImage,
  noindex = false,
  breadcrumbs,
  faqs,
  serviceSchema,
  collectionSchema,
  includeCatalog = false,
}) => {
  useEffect(() => {
    const origin =
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : SITE_CONFIG.baseUrl;
    const normalizedPath = path === '/' ? '/' : path.replace(/\/+$/, '');
    const canonicalUrl = `${origin}${normalizedPath}`;

    document.title = title;

    upsertMetaTag('name', 'description', description);
    if (keywords) {
      upsertMetaTag('name', 'keywords', keywords);
    }
    upsertMetaTag(
      'name',
      'robots',
      noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    upsertCanonical(canonicalUrl);

    // OpenGraph
    upsertMetaTag('property', 'og:type', 'website');
    upsertMetaTag('property', 'og:site_name', SITE_CONFIG.name);
    upsertMetaTag('property', 'og:title', title);
    upsertMetaTag('property', 'og:description', description);
    upsertMetaTag('property', 'og:url', canonicalUrl);
    upsertMetaTag('property', 'og:image', ogImage);
    upsertMetaTag('property', 'og:locale', 'en_US');

    // Twitter Cards
    upsertMetaTag('name', 'twitter:card', 'summary_large_image');
    upsertMetaTag('name', 'twitter:title', title);
    upsertMetaTag('name', 'twitter:description', description);
    upsertMetaTag('name', 'twitter:image', ogImage);

    // JSON-LD Structured Data
    const orgId = `${origin}/#organization`;
    const websiteId = `${origin}/#website`;
    const pageId = `${canonicalUrl}#webpage`;

    const graph: Record<string, unknown>[] = [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': orgId,
        name: SITE_CONFIG.name,
        url: origin,
        logo: SITE_CONFIG.logo,
        image: ogImage,
        email: SITE_CONFIG.email,
        telephone: SITE_CONFIG.phone,
        address: {
          '@type': 'PostalAddress',
          ...SITE_CONFIG.address,
        },
        areaServed: ['India', 'Worldwide'],
        openingHours: SITE_CONFIG.openingHours,
        priceRange: '₹400 - ₹45,000',
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
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: SITE_CONFIG.phone,
            email: SITE_CONFIG.email,
            contactType: 'customer service',
            availableLanguage: ['English', 'Hindi'],
          },
        ],
        ...(includeCatalog
          ? {
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Website Design, Graphic Design & Digital Marketing Services',
                itemListElement: SERVICE_PAGES.map((svc) => ({
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: svc.shortName,
                    description: svc.description,
                    url: `${origin}${svc.slug}`,
                  },
                })),
              },
            }
          : {}),
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: origin,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.tagline,
        publisher: { '@id': orgId },
      },
      {
        '@type': 'WebPage',
        '@id': pageId,
        url: canonicalUrl,
        name: title,
        description,
        isPartOf: { '@id': websiteId },
        about: { '@id': orgId },
      },
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: `${origin}${crumb.path}`,
        })),
      });
    }

    if (serviceSchema) {
      graph.push({
        '@type': 'Service',
        name: serviceSchema.name,
        description: serviceSchema.description,
        serviceType: serviceSchema.serviceType,
        provider: { '@id': orgId },
        areaServed: 'Worldwide',
        url: canonicalUrl,
        ...(serviceSchema.priceINR
          ? {
              offers: {
                '@type': 'Offer',
                price: serviceSchema.priceINR.replace(/[^\d]/g, '') || '400',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
                url: canonicalUrl,
              },
            }
          : {}),
      });
    }

    if (faqs && faqs.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    if (collectionSchema && collectionSchema.items.length > 0) {
      graph.push({
        '@type': 'CollectionPage',
        name: collectionSchema.name,
        url: canonicalUrl,
        creator: { '@id': orgId },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: collectionSchema.items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            url: item.url,
          })),
        },
      });
    }

    const ldJson = {
      '@context': 'https://schema.org',
      '@graph': graph,
    };

    let script = document.getElementById('dynamic-seo-schema') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'dynamic-seo-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ldJson);
  }, [title, description, keywords, path, ogImage, noindex, breadcrumbs, faqs, serviceSchema, collectionSchema, includeCatalog]);

  return null;
};

export default SeoHead;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  RefreshCw,
  Sparkles,
  Phone,
  MessageCircle,
  ChevronRight,
  ChevronDown,
  HelpCircle,
} from 'lucide-react';
import SeoHead from '../components/SeoHead';
import { ServicePageData, SERVICE_PAGES, SITE_CONFIG } from '../seoData';

interface ServiceDetailProps {
  service: ServicePageData;
}

const ACCENT_STYLES: Record<
  ServicePageData['accentColor'],
  { badgeBg: string; badgeText: string; badgeBorder: string; accentText: string; dotBg: string }
> = {
  teal: {
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-700',
    badgeBorder: 'border-teal-200',
    accentText: 'text-teal-600',
    dotBg: 'bg-teal-500',
  },
  blue: {
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-700',
    badgeBorder: 'border-blue-200',
    accentText: 'text-blue-600',
    dotBg: 'bg-blue-500',
  },
  rose: {
    badgeBg: 'bg-rose-50',
    badgeText: 'text-rose-700',
    badgeBorder: 'border-rose-200',
    accentText: 'text-rose-600',
    dotBg: 'bg-rose-500',
  },
  violet: {
    badgeBg: 'bg-violet-50',
    badgeText: 'text-violet-700',
    badgeBorder: 'border-violet-200',
    accentText: 'text-violet-600',
    dotBg: 'bg-violet-500',
  },
};

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const accent = ACCENT_STYLES[service.accentColor];
  const relatedServices = service.relatedSlugs
    .map((slug) => SERVICE_PAGES.find((item) => item.slug === slug))
    .filter((item): item is ServicePageData => Boolean(item));

  useEffect(() => {
    setOpenFaqIndex(0);
  }, [service.slug]);

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.shortName, path: service.slug },
  ];

  return (
    <article className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <SeoHead
        title={service.title}
        description={service.description}
        keywords={service.keywords}
        path={service.slug}
        breadcrumbs={breadcrumbs}
        faqs={service.faqs}
        serviceSchema={{
          name: service.h1,
          description: service.aiSummary,
          serviceType: service.shortName,
          priceINR: service.startingPriceINR.split('–')[0],
        }}
      />

      {/* Breadcrumb & Hero */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm font-bold text-slate-400 mb-8">
          <Link to="/" className="hover:text-teal-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/services" className="hover:text-teal-600 transition-colors">
            Services
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-700">{service.shortName}</span>
        </nav>

        <div className="bg-white rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-slate-100 card-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal-50 rounded-full blur-3xl opacity-70 pointer-events-none" />
          <div className="relative z-10 max-w-4xl">
            <div
              className={`inline-flex items-center gap-2 ${accent.badgeBg} border ${accent.badgeBorder} px-4 py-2 rounded-full ${accent.badgeText} text-xs font-black uppercase tracking-widest mb-6`}
            >
              <Sparkles className="w-4 h-4" /> {service.category}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              {service.h1}
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">{service.subtitle}</p>

            {/* Quick Facts Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <p className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1">Starting Investment</p>
                <p className="text-2xl font-black text-slate-900">
                  {service.startingPriceINR}{' '}
                  <span className="text-sm font-bold text-slate-500">({service.startingPriceUSD})</span>
                </p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <p className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Typical Turnaround
                </p>
                <p className="text-xl font-black text-slate-900">{service.turnaround}</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <p className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1">
                  <RefreshCw className="w-3.5 h-3.5" /> Revisions Policy
                </p>
                <p className="text-base font-black text-slate-900">{service.revisions}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-slate-900 text-white font-black rounded-2xl shadow-xl hover:bg-slate-800 transition-all inline-flex items-center gap-3"
              >
                Get a Custom Quote <ArrowUpRight className="w-5 h-5" />
              </Link>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 text-white font-black rounded-2xl shadow-lg hover:bg-green-700 transition-all inline-flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 font-black rounded-2xl hover:border-teal-500 transition-all inline-flex items-center gap-3"
              >
                <Phone className="w-5 h-5 text-teal-600" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Overview Direct Summary & Ideal For */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-100 shadow-sm">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Overview: {service.shortName}</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">{service.aiSummary}</p>
            <p className="text-sm font-bold text-slate-500 bg-slate-50 rounded-xl px-5 py-3 inline-block">
              {service.priceNote} Content and images are provided by the client.
            </p>
          </div>
          <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-black mb-6 text-teal-400">Ideal For</h2>
              <ul className="space-y-4">
                {service.idealFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-semibold text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/packages"
              className="mt-8 inline-flex items-center gap-2 font-black text-white hover:text-teal-400 transition-colors"
            >
              Compare All Packages <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">
            What Is Included in {service.shortName}
          </h2>
          <p className="text-slate-500 font-medium text-lg">
            Every project is built for real-world print clarity, digital speed, and brand consistency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.deliverables.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[2rem] p-8 border border-slate-100 hover:border-teal-300 transition-all shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`w-3 h-3 rounded-full ${accent.dotBg}`} />
                <h3 className="text-xl font-black text-slate-900">{item.title}</h3>
              </div>
              <p className="text-slate-600 font-medium leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="bg-white rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-slate-100 shadow-sm">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-10">
            How Our {service.shortName} Process Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.processSteps.map((step) => (
              <div key={step.step} className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <p className={`text-4xl font-black ${accent.accentText} mb-4`}>{step.step}.</p>
                <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="max-w-4xl mx-auto px-4 mb-20" aria-labelledby="service-faq-heading">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-7 h-7 text-teal-600 shrink-0" />
          <h2 id="service-faq-heading" className="text-3xl lg:text-4xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {service.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl border transition-all overflow-hidden ${
                  isOpen ? 'border-teal-400 shadow-md' : 'border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  className="w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">{faq.question}</h3>
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-teal-600 text-white rotate-180' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  className={isOpen ? 'px-6 sm:px-8 pb-6 pt-1 border-t border-slate-100' : 'hidden'}
                >
                  <p className="text-slate-600 font-medium leading-relaxed text-base">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Related Services Internal Linking */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-main rounded-[3rem] p-10 sm:p-14 text-white mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-black mb-4">
                Ready to Start Your {service.shortName} Project?
              </h2>
              <p className="text-white/90 text-lg font-medium">
                Talk directly with Abridge Media Services for a transparent quote, timeline, and custom bundle options.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-slate-900 font-black rounded-2xl shadow-xl hover:scale-105 transition-transform inline-flex items-center gap-2"
              >
                Request a Quote <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                to="/work"
                className="px-8 py-4 bg-white/15 text-white border border-white/30 font-black rounded-2xl hover:bg-white/25 transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-slate-900 mb-6">Explore Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                to={rel.slug}
                className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-400 transition-all shadow-sm group"
              >
                <p className="text-xs font-black uppercase tracking-wider text-teal-600 mb-2">{rel.category}</p>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-teal-600 transition-colors flex items-center justify-between">
                  {rel.shortName}
                  <ArrowUpRight className="w-4 h-4" />
                </h3>
                <p className="text-sm text-slate-500 font-medium mt-2">From {rel.startingPriceINR}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default ServiceDetail;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Briefcase, CheckCircle2, ExternalLink } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import { MAIN_PAGES_SEO, WORK_SAMPLES_DATA, PORTFOLIO_CASE_STUDIES } from '../seoData';

const Work: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <SeoHead
        title={MAIN_PAGES_SEO.work.title}
        description={MAIN_PAGES_SEO.work.description}
        keywords={MAIN_PAGES_SEO.work.keywords}
        path="/work"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
        ]}
        collectionSchema={{
          name: 'Website Design & Development Case Studies – Abridge Media Services',
          items: PORTFOLIO_CASE_STUDIES.map((study) => ({
            name: study.schemaName,
            url: study.websiteUrl,
          })),
        }}
      />

      <section className="max-w-7xl mx-auto px-4 mb-20 text-center">
        <h1 className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter mb-6 leading-none">
          Our <span className="text-gradient">Portfolio.</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
          A visual showcase of how we bridge the gap between creative concepts and professional execution across logo, poster, brochure, packaging, and web design.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORK_SAMPLES_DATA.map((sample, idx) => (
            <Link
              key={idx}
              to={sample.link}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden card-shadow border border-white hover:border-teal-300 transition-all duration-500 block"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={sample.url}
                  alt={sample.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="text-white">
                  <p className="text-xs font-black uppercase tracking-widest text-teal-400 mb-2">{sample.category}</p>
                  <h3 className="text-2xl font-black leading-tight flex items-center gap-2">
                    {sample.title}
                    <ArrowUpRight className="w-5 h-5" />
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 10 Live Website Design & Development Case Studies (Challenge -> Solution -> Result) */}
      <section id="portfolio-case-studies" className="max-w-7xl mx-auto px-4" aria-labelledby="work-heading">
        <div className="max-w-4xl mb-14">
          <span className="inline-flex items-center gap-2 text-teal-600 font-black text-sm uppercase tracking-[0.2em] mb-3">
            <Briefcase className="w-4 h-4" /> 10 Live Client Websites
          </span>
          <h2 id="work-heading" className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Website Design &amp; Development Case Studies by Abridge Media Services
          </h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Explore how Abridge Media Services designs, develops, and optimizes high-performing websites for businesses across India and globally—spanning healthcare, automotive portals, hospitality, F&amp;B, education, finance, industrial manufacturing, and real estate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PORTFOLIO_CASE_STUDIES.map((study) => (
            <article
              key={study.position}
              className="bg-white rounded-[2.5rem] p-8 sm:p-10 border border-slate-200 shadow-sm hover:border-teal-300 transition-all flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug mb-3">
                  {study.title}
                </h2>
                <p className="text-sm font-medium text-slate-700 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-2.5 mb-6 leading-relaxed">
                  <strong>Website:</strong>{' '}
                  <a
                    href={study.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-black text-teal-700 hover:underline"
                  >
                    {study.websiteLabel}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>{' '}
                  | <strong>Industry:</strong> {study.industry} | <strong>Region:</strong> {study.region}
                </p>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1.5">
                      The Challenge
                    </h3>
                    <p className="text-slate-600 font-medium leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1.5">
                      The Solution
                    </h3>
                    <p className="text-slate-600 font-medium leading-relaxed">{study.solution}</p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-3">
                      The Result
                    </h3>
                    <ul className="space-y-2.5 text-sm text-slate-700 leading-relaxed">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                        <span>
                          <strong>Deliverables:</strong> {study.deliverables}
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                        <span>
                          <strong>Business Impact:</strong> {study.businessImpact}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {study.serviceLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-slate-700 hover:text-teal-600 bg-slate-100 hover:bg-teal-50 px-3.5 py-2 rounded-xl transition-colors"
                    >
                      {link.label} <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
                <a
                  href={study.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-teal-700 hover:text-teal-800"
                >
                  Visit Live Site <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mt-24 text-center">
        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Inspired by our work?</h2>
          <p className="text-slate-500 font-medium mb-8 leading-relaxed">
            We specialize in carving out unique identities. Let's start building yours today.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-10 py-5 bg-slate-900 text-white font-black rounded-2xl shadow-lg hover:bg-slate-800 transition-all transform hover:-translate-y-1"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Work;

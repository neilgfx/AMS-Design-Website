import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import { MAIN_PAGES_SEO, WORK_SAMPLES_DATA } from '../seoData';

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
      />

      <section className="max-w-7xl mx-auto px-4 mb-20 text-center">
        <h1 className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter mb-6 leading-none">
          Our <span className="text-gradient">Portfolio.</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
          A visual showcase of how we bridge the gap between creative concepts and professional execution across logo, poster, brochure, packaging, and web design.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4">
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

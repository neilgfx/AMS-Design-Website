
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Zap, Shield, HelpCircle, ArrowUpRight, Table2 } from 'lucide-react';
import { A_LA_CARTE_ITEMS } from '../constants';
import SeoHead from '../components/SeoHead';
import { MAIN_PAGES_SEO, HOME_FAQS } from '../seoData';

const PACKAGE_COMPARISON_ROWS = [
  {
    serviceCategory: 'Logo & Brand Identity',
    servicePath: '/logo-design',
    starterPackage: '3 Logo Concepts, 2 Revisions, PNG/JPG/PDF Files (Starting at ₹3,000)',
    growthPackage: '5 Logo Concepts, Unlimited Revisions, Full Vector Kit + Visiting Card & Letterhead (Starting at ₹5,000)',
    turnaround: '3 – 5 Working Days',
  },
  {
    serviceCategory: 'Website Design & Development',
    servicePath: '/website-design',
    starterPackage: 'Up to 5 Pages, Mobile Responsive, Contact Form, Basic On-Page SEO (Starting at ₹16,000; Template sites from ₹3,000)',
    growthPackage: 'Up to 12 Pages or E-Commerce Store, Payment Gateway, Speed & AEO Schema Setup (Starting at ₹45,000)',
    turnaround: '7 – 21 Working Days',
  },
  {
    serviceCategory: 'Product Packaging Design',
    servicePath: '/packaging-design',
    starterPackage: 'Single SKU Front & Back Label/Pouch Design, Print-Ready CMYK PDF (Starting at ₹2,000)',
    growthPackage: 'Multi-SKU Variant Series, Dieline Setup, 3D Product Mockups & Source Files (Starting at ₹5,000)',
    turnaround: '5 – 10 Working Days',
  },
  {
    serviceCategory: 'Digital Marketing Retainer',
    servicePath: '/digital-marketing',
    starterPackage: 'Google Ads or Meta Ads Management, Conversion Tracking, Monthly Report (Starting at ₹8,000/mo)',
    growthPackage: 'Multi-Channel Ads (Google + Meta), Local SEO/AEO Optimization & Ad Creatives (Starting at ₹15,000/mo)',
    turnaround: 'Ongoing Monthly',
  },
];

const A_LA_CARTE_ROUTE_MAP: Record<string, string> = {
  'Social Media Poster': '/poster-design',
  'Business Cards': '/visiting-card-design',
  'Letter Head': '/visiting-card-design',
  'Brochure A4': '/brochure-design',
  'Company Profile': '/brochure-design',
  'Magazine': '/book-design',
  'Coupons': '/digital-marketing',
  'Cover Page': '/book-design',
  'Website Banner': '/website-design',
  'Product Packaging': '/packaging-design',
  'Catalogue': '/brochure-design',
  'Menu Card': '/packaging-design',
};

const Packages: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <SeoHead
        title={MAIN_PAGES_SEO.packages.title}
        description={MAIN_PAGES_SEO.packages.description}
        keywords={MAIN_PAGES_SEO.packages.keywords}
        path="/packages"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Packages', path: '/packages' },
        ]}
        faqs={HOME_FAQS}
        includeCatalog
      />

      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-4 text-center mb-20">
        <h1 className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter mb-6">Investment.</h1>
        <p className="text-xl text-slate-500 font-bold uppercase tracking-widest">Growth requires the right visual foundation.</p>
        <div className="flex justify-center gap-4 mt-8">
           <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-sm font-bold text-slate-600">
              <Shield className="w-4 h-4" /> Secure Payments
           </div>
           <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-sm font-bold text-slate-600">
              <Zap className="w-4 h-4" /> Fast Delivery
           </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 space-y-36">
        {/* Clean HTML Comparison Table for Answer Engines & Quick Decisions */}
        <section aria-labelledby="packages-heading">
          <div className="mb-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-teal-600 font-black text-sm uppercase tracking-[0.2em] mb-3">
              <Table2 className="w-4 h-4" /> Side-by-Side Overview
            </span>
            <h2 id="packages-heading" className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Compare Abridge Media Services Packages
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Choose a tailored creative, web, or marketing package built for startups, growing brands, and established businesses across India and globally.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <caption className="sr-only">
                  Comparison of Abridge Media Services Starter and Growth packages for Logo &amp; Brand Identity, Website Design &amp; Development, Product Packaging Design, and Digital Marketing Retainer.
                </caption>
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th scope="col" className="py-5 px-6 text-xs font-black uppercase tracking-widest">Service Category</th>
                    <th scope="col" className="py-5 px-6 text-xs font-black uppercase tracking-widest">Starter Package</th>
                    <th scope="col" className="py-5 px-6 text-xs font-black uppercase tracking-widest">Growth Package</th>
                    <th scope="col" className="py-5 px-6 text-xs font-black uppercase tracking-widest whitespace-nowrap">Typical Turnaround</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {PACKAGE_COMPARISON_ROWS.map((row) => (
                    <tr key={row.serviceCategory} className="hover:bg-slate-50/80 transition-colors">
                      <th scope="row" className="py-6 px-6 align-top min-w-[210px]">
                        <Link
                          to={row.servicePath}
                          className="inline-flex items-center gap-1.5 font-black text-slate-900 hover:text-teal-600 transition-colors text-base group"
                        >
                          <strong>{row.serviceCategory}</strong>
                          <ArrowUpRight className="w-4 h-4 text-teal-600 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      </th>
                      <td className="py-6 px-6 align-top text-sm text-slate-700 font-medium leading-relaxed min-w-[240px]">
                        {row.starterPackage}
                      </td>
                      <td className="py-6 px-6 align-top text-sm text-slate-700 font-medium leading-relaxed min-w-[260px]">
                        {row.growthPackage}
                      </td>
                      <td className="py-6 px-6 align-top text-sm font-black text-slate-900 whitespace-nowrap">
                        {row.turnaround}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Logo Section */}
        <section>
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
             <div className="max-w-xl">
                <span className="text-teal-600 font-black text-sm uppercase tracking-[0.2em] mb-4 block">Identity Kits</span>
                <h2 className="text-5xl font-black text-slate-900">
                  <Link to="/logo-design" className="hover:text-teal-600 transition-colors">Logo Design</Link>
                </h2>
             </div>
             <p className="text-slate-500 font-medium max-w-xs text-right hidden lg:block">Prices reflect the depth of research and refinement in our process.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white border-[6px] border-slate-900 p-10 rounded-[2.5rem] card-shadow hover:translate-x-[-8px] hover:translate-y-[-8px] transition-all group">
              <h3 className="text-3xl font-black text-slate-900 mb-2">Starter</h3>
              <div className="flex items-baseline gap-2 mb-8">
                 <span className="text-5xl font-black text-slate-900">₹3000</span>
                 <span className="text-slate-400 font-bold">($50)</span>
              </div>
              <ul className="space-y-5 mb-12">
                <li className="flex items-center gap-4 text-slate-600 font-bold"><div className="w-2 h-2 rounded-full bg-teal-500" /> 2 Modern Concepts</li>
                <li className="flex items-center gap-4 text-slate-600 font-bold"><div className="w-2 h-2 rounded-full bg-teal-500" /> Print-ready Vectors</li>
                <li className="flex items-center gap-4 text-slate-600 font-bold"><div className="w-2 h-2 rounded-full bg-teal-500" /> 3 Detailed Revisions</li>
              </ul>
              <Link to="/contact" className="block text-center w-full py-5 bg-teal-500 text-white font-black rounded-2xl hover:bg-teal-600 transition-colors shadow-lg">Select Starter</Link>
            </div>
            
            <div className="bg-slate-900 p-10 rounded-[2.5rem] card-shadow border-[6px] border-slate-900 text-white relative overflow-hidden group hover:translate-x-[-8px] hover:translate-y-[-8px] transition-all">
              <div className="absolute top-8 right-8 bg-gradient-main px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">Most Popular</div>
              <h3 className="text-3xl font-black mb-2">Best Buy</h3>
              <div className="flex items-baseline gap-2 mb-8">
                 <span className="text-5xl font-black text-white">₹5000</span>
                 <span className="text-slate-500 font-bold">($75)</span>
              </div>
              <ul className="space-y-5 mb-12">
                <li className="flex items-center gap-4 text-slate-300 font-bold"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" /> 5 Premium Concepts</li>
                <li className="flex items-center gap-4 text-slate-300 font-bold"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" /> Full Identity Style Guide</li>
                <li className="flex items-center gap-4 text-slate-300 font-bold"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" /> Unlimited Refinements</li>
                <li className="flex items-center gap-4 text-slate-300 font-bold"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" /> Full Social Media Pack</li>
              </ul>
              <Link to="/contact" className="block text-center w-full py-5 bg-gradient-main text-white font-black rounded-2xl hover:opacity-90 transition-opacity shadow-xl">Start Pro Identity</Link>
            </div>
          </div>
        </section>

        {/* Web Grid Section */}
        <section>
          <div className="mb-16">
            <span className="text-rose-600 font-black text-sm uppercase tracking-[0.2em] mb-4 block">Web Systems</span>
            <h2 className="text-5xl font-black text-slate-900">
              <Link to="/website-design" className="hover:text-rose-600 transition-colors">Website Design</Link>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/website-design" className="block bg-white border-2 border-slate-100 p-8 rounded-[2rem] hover:border-teal-500 transition-colors">
              <p className="text-teal-600 font-black mb-1">Templated</p>
              <h3 className="text-2xl font-black text-slate-900 mb-6">Template Design</h3>
              <p className="text-4xl font-black text-slate-900 mb-2">₹3,000</p>
              <p className="text-slate-400 font-bold text-sm mb-8">($35)</p>
              <div className="w-full h-[1px] bg-slate-100 mb-8" />
              <p className="text-slate-500 text-sm font-medium">Perfect for quick landing pages or static portfolios.</p>
            </Link>
            
            <Link to="/website-design" className="block bg-white border-4 border-rose-500 p-8 rounded-[2rem] shadow-xl relative md:scale-105">
               <div className="absolute top-0 right-10 -translate-y-1/2 bg-rose-500 text-white px-4 py-1 rounded-lg text-[10px] font-black uppercase">Standard</div>
              <p className="text-rose-600 font-black mb-1">Professional</p>
              <h3 className="text-2xl font-black text-slate-900 mb-6">Standard Website</h3>
              <p className="text-4xl font-black text-slate-900 mb-2">₹16,000-22k</p>
              <p className="text-slate-400 font-bold text-sm mb-8">($182 - $250)</p>
              <div className="w-full h-[1px] bg-slate-100 mb-8" />
              <p className="text-slate-500 text-sm font-medium">Custom multi-page solutions with full SEO and CMS support.</p>
            </Link>

            <Link to="/website-design" className="block bg-white border-2 border-slate-100 p-8 rounded-[2rem] hover:border-violet-500 transition-colors">
              <p className="text-violet-600 font-black mb-1">Enterprise</p>
              <h3 className="text-2xl font-black text-slate-900 mb-6">E-Commerce</h3>
              <p className="text-4xl font-black text-slate-900 mb-2">₹45,000</p>
              <p className="text-slate-400 font-bold text-sm mb-8">($550)</p>
              <div className="w-full h-[1px] bg-slate-100 mb-8" />
              <p className="text-slate-500 text-sm font-medium">Full-scale online stores with inventory and payment integration.</p>
            </Link>
          </div>
        </section>

        {/* Digital Marketing Section */}
        <section>
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-rose-600 font-black text-sm uppercase tracking-[0.2em] mb-4 block">Lead Generation &amp; Ads</span>
              <h2 className="text-5xl font-black text-slate-900">
                <Link to="/digital-marketing" className="hover:text-rose-600 transition-colors">Digital Marketing</Link>
              </h2>
            </div>
            <Link to="/digital-marketing" className="inline-flex items-center gap-2 text-sm font-black text-slate-700 hover:text-rose-600 transition-colors">
              Explore Digital Marketing Services <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white border-2 border-slate-200 p-10 rounded-[2.5rem] shadow-sm hover:border-rose-400 transition-all">
              <p className="text-rose-600 font-black text-xs uppercase tracking-widest mb-2">Creative Assets</p>
              <h3 className="text-3xl font-black text-slate-900 mb-2">Ad &amp; Social Creatives</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-slate-900">From ₹400</span>
                <span className="text-slate-400 font-bold">($5 per creative)</span>
              </div>
              <ul className="space-y-4 mb-10 text-slate-600 font-bold">
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-rose-500" /> Meta &amp; Google Display Ad Creatives</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-rose-500" /> Website Hero Banners &amp; Coupons (₹500)</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-rose-500" /> Multi-Format Export + 3 Revisions</li>
              </ul>
              <Link to="/contact" className="block text-center w-full py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-rose-600 transition-colors">
                Order Campaign Creatives
              </Link>
            </div>

            <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-xl border-2 border-slate-900 flex flex-col justify-between">
              <div>
                <p className="text-teal-400 font-black text-xs uppercase tracking-widest mb-2">Performance + SEO</p>
                <h3 className="text-3xl font-black mb-2">Paid Ads &amp; SEO Growth</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-black text-white">From ₹8,000</span>
                  <span className="text-slate-400 font-bold">(/ month + ad spend)</span>
                </div>
                <ul className="space-y-4 mb-10 text-slate-300 font-bold">
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-teal-400" /> Google Search Ads &amp; Meta Lead Campaigns</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-teal-400" /> On-Page SEO &amp; Answer Engine Optimization</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-teal-400" /> GTM &amp; GA4 Conversion / CPL Tracking</li>
                </ul>
              </div>
              <Link to="/contact" className="block text-center w-full py-4 bg-gradient-main text-white font-black rounded-2xl hover:opacity-90 transition-opacity">
                Request Growth Proposal
              </Link>
            </div>
          </div>
        </section>

        {/* A La Carte - List Style */}
        <section className="bg-white p-12 lg:p-20 rounded-[4rem] shadow-sm border border-slate-100">
           <div className="mb-16 flex justify-between items-center flex-wrap gap-4">
              <h2 className="text-4xl font-black text-slate-900">A La Carte Services</h2>
              <Link to="/contact" className="flex items-center gap-2 text-slate-400 hover:text-teal-600 transition-colors">
                 <HelpCircle className="w-5 h-5" />
                 <span className="text-sm font-bold">Custom quotes available</span>
              </Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4">
              {A_LA_CARTE_ITEMS.map((item, idx) => {
                const targetPath = A_LA_CARTE_ROUTE_MAP[item.item] || '/graphic-design';
                return (
                  <Link
                    key={idx}
                    to={targetPath}
                    className="flex justify-between items-center py-4 border-b border-slate-50 group"
                  >
                     <span className="text-lg font-bold text-slate-700 group-hover:text-teal-600 transition-colors flex items-center gap-2">
                       {item.item}
                       <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                     </span>
                     <div className="flex items-center gap-4">
                        <div className="h-[1px] bg-slate-100 flex-grow w-12 hidden sm:block" />
                        <span className="font-black text-slate-900 min-w-[80px] text-right">₹{item.priceINR}</span>
                     </div>
                  </Link>
                );
              })}
           </div>
        </section>

        {/* Final Disclaimer */}
        <div className="bg-slate-900 text-white/50 p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-12 items-center">
           <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center shrink-0">
              <Shield className="w-10 h-10 text-white" />
           </div>
           <div>
              <h4 className="text-white text-xl font-bold mb-2">Standard Trading Terms</h4>
              <p className="text-sm leading-relaxed max-w-2xl">
                 50% advance to initiate projects. Delivery times vary by complexity. All source files transferred upon final settlement. Revisions are restricted to the scope defined in project kickoff.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;

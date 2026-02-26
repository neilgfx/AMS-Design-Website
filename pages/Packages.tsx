
import React from 'react';
import { Check, Star, Zap, Shield, HelpCircle } from 'lucide-react';
import { A_LA_CARTE_ITEMS } from '../constants';

const Packages: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-4 text-center mb-24">
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

      <div className="max-w-7xl mx-auto px-4 space-y-40">
        {/* Logo Section */}
        <section>
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
             <div className="max-w-xl">
                <span className="text-teal-600 font-black text-sm uppercase tracking-[0.2em] mb-4 block">Identity Kits</span>
                <h2 className="text-5xl font-black text-slate-900">Logo Design</h2>
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
              <button className="w-full py-5 bg-teal-500 text-white font-black rounded-2xl hover:bg-teal-600 transition-colors shadow-lg">Select Starter</button>
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
              <button className="w-full py-5 bg-gradient-main text-white font-black rounded-2xl hover:opacity-90 transition-opacity shadow-xl">Start Pro Identity</button>
            </div>
          </div>
        </section>

        {/* Web Grid Section */}
        <section>
          <div className="mb-16">
            <span className="text-rose-600 font-black text-sm uppercase tracking-[0.2em] mb-4 block">Web Systems</span>
            <h2 className="text-5xl font-black text-slate-900">Website Design</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-slate-100 p-8 rounded-[2rem] hover:border-teal-500 transition-colors">
              <p className="text-teal-600 font-black mb-1">Templated</p>
              <h3 className="text-2xl font-black text-slate-900 mb-6">Template Design</h3>
              <p className="text-4xl font-black text-slate-900 mb-2">₹3,000</p>
              <p className="text-slate-400 font-bold text-sm mb-8">($35)</p>
              <div className="w-full h-[1px] bg-slate-100 mb-8" />
              <p className="text-slate-500 text-sm font-medium">Perfect for quick landing pages or static portfolios.</p>
            </div>
            
            <div className="bg-white border-4 border-rose-500 p-8 rounded-[2rem] shadow-xl relative scale-105">
               <div className="absolute top-0 right-10 -translate-y-1/2 bg-rose-500 text-white px-4 py-1 rounded-lg text-[10px] font-black uppercase">Standard</div>
              <p className="text-rose-600 font-black mb-1">Professional</p>
              <h3 className="text-2xl font-black text-slate-900 mb-6">Standard Website</h3>
              <p className="text-4xl font-black text-slate-900 mb-2">₹16,000-22k</p>
              <p className="text-slate-400 font-bold text-sm mb-8">($182 - $250)</p>
              <div className="w-full h-[1px] bg-slate-100 mb-8" />
              <p className="text-slate-500 text-sm font-medium">Custom multi-page solutions with full SEO and CMS support.</p>
            </div>

            <div className="bg-white border-2 border-slate-100 p-8 rounded-[2rem] hover:border-violet-500 transition-colors">
              <p className="text-violet-600 font-black mb-1">Enterprise</p>
              <h3 className="text-2xl font-black text-slate-900 mb-6">E-Commerce</h3>
              <p className="text-4xl font-black text-slate-900 mb-2">₹45,000</p>
              <p className="text-slate-400 font-bold text-sm mb-8">($550)</p>
              <div className="w-full h-[1px] bg-slate-100 mb-8" />
              <p className="text-slate-500 text-sm font-medium">Full-scale online stores with inventory and payment integration.</p>
            </div>
          </div>
        </section>

        {/* A La Carte - List Style */}
        <section className="bg-white p-12 lg:p-20 rounded-[4rem] shadow-sm border border-slate-100">
           <div className="mb-16 flex justify-between items-center flex-wrap gap-4">
              <h2 className="text-4xl font-black text-slate-900">A La Carte Services</h2>
              <div className="flex gap-2 text-slate-400">
                 <HelpCircle className="w-5 h-5" />
                 <span className="text-sm font-bold">Custom quotes available</span>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4">
              {A_LA_CARTE_ITEMS.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-4 border-b border-slate-50 group">
                   <span className="text-lg font-bold text-slate-700 group-hover:text-teal-600 transition-colors">{item.item}</span>
                   <div className="flex items-center gap-4">
                      <div className="h-[1px] bg-slate-100 flex-grow w-12 hidden sm:block" />
                      <span className="font-black text-slate-900 min-w-[80px] text-right">₹{item.priceINR}</span>
                   </div>
                </div>
              ))}
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

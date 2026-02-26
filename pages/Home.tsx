import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Zap, Target, MousePointer2, Monitor, Share2 } from 'lucide-react';
import { SERVICES_SUMMARY, PHILOSOPHY_ITEMS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Dynamic Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden px-4">
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-teal-100 rounded-full blur-[120px] opacity-60 animate-pulse" />
        <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] bg-rose-100 rounded-full blur-[100px] opacity-60" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 px-4 py-2 rounded-full text-teal-700 text-sm font-bold mb-8">
              <Zap className="w-4 h-4" /> Energizing Vision into Reality
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
              Bridge the <span className="text-gradient">Visual Gap.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-lg">
              Abridge Media Services provides the foundation your business needs to grow. From striking brand identities to high-converting digital platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl shadow-2xl hover:bg-slate-800 transition-all flex items-center gap-3">
                Start Building <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link to="/work" className="px-10 py-5 bg-white border-2 border-slate-100 text-slate-900 font-black rounded-2xl hover:border-teal-500 transition-all">
                Our Work
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
             <div className="w-full aspect-square bg-white rounded-[3rem] shadow-2xl overflow-hidden p-4 relative border border-slate-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-50 to-rose-50 opacity-40" />
                <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full relative z-10">
                  <div className="bg-teal-500 rounded-2xl flex items-center justify-center p-6 text-white overflow-hidden group">
                     <Target className="w-20 h-20 group-hover:scale-125 transition-transform duration-500 opacity-20 absolute -right-4 -bottom-4" />
                     <p className="text-2xl font-black relative">Design</p>
                  </div>
                  <div className="bg-white rounded-2xl flex items-center justify-center border-2 border-slate-100">
                     <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                        <ArrowUpRight className="text-white w-6 h-6" />
                     </div>
                  </div>
                  <div className="bg-rose-100 rounded-2xl p-6 flex flex-col justify-end">
                     <p className="text-rose-600 font-black text-4xl leading-none">01.</p>
                     <p className="text-slate-800 font-bold">Ideate</p>
                  </div>
                  <div className="bg-violet-500 rounded-2xl flex items-center justify-center p-6 text-white overflow-hidden group">
                     <Zap className="w-20 h-20 group-hover:scale-125 transition-transform duration-500 opacity-20 absolute -left-4 -top-4" />
                     <p className="text-2xl font-black relative">Develop</p>
                  </div>
                </div>
             </div>
             {/* Floating Elements */}
             <div className="absolute -top-6 -left-6 w-32 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center animate-bounce">
                <MousePointer2 className="w-12 h-12 text-teal-500" />
             </div>
          </div>
        </div>
      </section>

      {/* Bento Pillar Grid */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Built on 4 Pillars</h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">We don't just do media. We build the architecture of your brand's future.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-[250px]">
            {/* Pillar 1 - Large */}
            <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2.5rem] p-10 flex flex-col justify-between group border border-slate-100 hover:border-teal-300 transition-all card-shadow">
               <div>
                  <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-500 transition-colors">
                     {SERVICES_SUMMARY[0].icon}
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">{SERVICES_SUMMARY[0].title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed mb-4">
                    At Abridge Media Services, our Brand Foundation pillar is dedicated to building strong visual identities from the ground up. We define exactly who you are by providing professional Logo Design and comprehensive Brand Style Guides. Beyond the core logo, we ensure your business is ready for the real world with essential stationery design, including business cards, letterheads, and custom icons, laying the groundwork for a cohesive and professional brand image.
                  </p>
               </div>
               <Link to="/services" className="inline-flex items-center gap-2 font-bold text-teal-600 hover:underline">
                  View Brand Packages <ArrowUpRight className="w-4 h-4" />
               </Link>
            </div>

            {/* Pillar 2 */}
            <div className="bg-rose-500 rounded-[2.5rem] p-8 text-white flex flex-col justify-center items-center text-center group hover:scale-[0.98] transition-transform">
               <div className="mb-4 group-hover:rotate-12 transition-transform">
                  <Monitor className="w-12 h-12" />
               </div>
               <h3 className="text-2xl font-black mb-2">{SERVICES_SUMMARY[1].title}</h3>
               <p className="text-white/80 text-sm">{SERVICES_SUMMARY[1].description}</p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white flex flex-col justify-center items-center text-center group hover:scale-[0.98] transition-transform">
               <div className="mb-4 group-hover:-rotate-12 transition-transform">
                  <Share2 className="w-12 h-12" />
               </div>
               <h3 className="text-2xl font-black mb-2">{SERVICES_SUMMARY[2].title}</h3>
               <p className="text-white/80 text-sm">{SERVICES_SUMMARY[2].description}</p>
            </div>

            {/* Pillar 4 - Wide Bottom */}
            <div className="md:col-span-3 bg-slate-900 rounded-[2.5rem] p-10 flex items-center justify-between group overflow-hidden relative">
               <div className="relative z-10">
                  <h3 className="text-3xl font-black text-white mb-2">{SERVICES_SUMMARY[3].title}</h3>
                  <p className="text-slate-400 max-w-md">{SERVICES_SUMMARY[3].description}</p>
               </div>
               <div className="w-32 h-32 bg-gradient-main rounded-full blur-[40px] opacity-40 absolute right-10 top-1/2 -translate-y-1/2" />
               <Link to="/services" className="relative z-10 px-8 py-4 bg-white text-slate-900 font-black rounded-2xl hover:scale-105 transition-transform">
                  Explore Plus
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-8">Bridging the Gap is an <span className="text-teal-500 italic">Artform.</span></h2>
                 <p className="text-lg text-slate-600 font-medium mb-12 leading-relaxed">
                    We've spent years refining the transition between abstract design and technical deployment. Our process ensures that nothing is lost in translation.
                 </p>
                 <div className="space-y-8">
                    {PHILOSOPHY_ITEMS.map((item, idx) => (
                      <div key={idx} className="flex gap-6 group">
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-teal-500 transition-colors group-hover:text-white">
                           {item.icon}
                        </div>
                        <div>
                           <h4 className="text-xl font-black text-slate-900 mb-2">{item.title}</h4>
                           <p className="text-slate-500 font-medium">{item.description}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-slate-50 rounded-[4rem] p-12 relative">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                       <div className="bg-teal-500 h-64 rounded-3xl" />
                       <div className="bg-white h-40 rounded-3xl shadow-sm border border-slate-100" />
                    </div>
                    <div className="space-y-4 pt-12">
                       <div className="bg-white h-40 rounded-3xl shadow-sm border border-slate-100" />
                       <div className="bg-rose-500 h-64 rounded-3xl" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Interactive CTA */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto bg-gradient-main p-16 lg:p-24 rounded-[4rem] text-center relative overflow-hidden">
           <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
           <h2 className="text-5xl lg:text-7xl font-black text-white mb-10 relative z-10">Energize your vision.</h2>
           <div className="flex justify-center gap-6 relative z-10 flex-wrap">
              <Link to="/contact" className="px-12 py-6 bg-white text-slate-900 font-black rounded-2xl shadow-2xl hover:scale-105 transition-transform text-xl">
                 Let's Start Project
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
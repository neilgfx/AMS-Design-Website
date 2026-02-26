
import React from 'react';
import { Palette, Globe, Megaphone, PlusCircle, ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const sections = [
    {
      title: "Brand Foundation",
      icon: <Palette className="w-10 h-10" />,
      description: "At Abridge Media Services, our Brand Foundation pillar is dedicated to building strong visual identities from the ground up. We define exactly who you are by providing professional Logo Design and comprehensive Brand Style Guides. Beyond the core logo, we ensure your business is ready for the real world with essential stationery design, including business cards, letterheads, and custom icons, laying the groundwork for a cohesive and professional brand image.",
      items: ["Logo design", "Brand identity & style guides", "Business cards", "Stationery", "Icon design"],
      colorClass: "bg-teal-500",
      textClass: "text-teal-600",
      bgSoft: "bg-teal-50"
    },
    {
      title: "Digital Experience",
      icon: <Globe className="w-10 h-10" />,
      description: "We bridge the gap between code and creativity to deliver high-performance digital platforms that convert visitors into loyal customers.",
      items: ["Website & UI/UX design", "Web banners", "Thumbnails", "Online graphic creation"],
      colorClass: "bg-blue-500",
      textClass: "text-blue-600",
      bgSoft: "bg-blue-50"
    },
    {
      title: "Marketing & Print",
      icon: <Megaphone className="w-10 h-10" />,
      description: "Impactful marketing collateral that ensures your message resonates across both digital and physical landscapes.",
      items: ["Brochures/Flyers", "Ad creatives", "Social media assets", "Presentations", "Posters", "Menus", "Signage"],
      colorClass: "bg-rose-500",
      textClass: "text-rose-600",
      bgSoft: "bg-rose-50"
    },
    {
      title: "The Plus",
      icon: <PlusCircle className="w-10 h-10" />,
      description: "Extra layers of branding through high-quality merchandise and packaging that completes your unique story.",
      items: ["Packaging & merchandise", "Cap/T-shirt designing", "Book covers", "Labels"],
      colorClass: "bg-violet-500",
      textClass: "text-violet-600",
      bgSoft: "bg-violet-50"
    }
  ];

  return (
    <div className="pt-32">
      {/* Title Hero */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
           <div>
              <h1 className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.85]">
                Our <span className="text-gradient">Capabilities.</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium max-w-md">
                We've organized our expertise into 4 specialized pillars to ensure your business foundation is unbreakable.
              </p>
           </div>
           <div className="flex gap-4 lg:justify-end">
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
                 <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center font-black">15+</div>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global<br/>Services</p>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
                 <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center font-black">24/7</div>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Creative<br/>Support</p>
              </div>
           </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {sections.map((section, idx) => (
             <div key={idx} className={`${section.bgSoft} rounded-[3rem] p-10 lg:p-14 flex flex-col justify-between group overflow-hidden relative border border-white/50`}>
                <div className="relative z-10">
                   <div className={`${section.colorClass} text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-10 group-hover:rotate-6 transition-transform shadow-lg`}>
                      {section.icon}
                   </div>
                   <h2 className="text-4xl font-black text-slate-900 mb-6">{section.title}</h2>
                   <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8 max-w-2xl">
                     {section.description}
                   </p>
                   <div className="space-y-4">
                      {section.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-lg font-bold text-slate-800">
                           <div className={`w-2.5 h-2.5 rounded-full ${section.colorClass}`} />
                           {item}
                        </div>
                      ))}
                   </div>
                </div>
                <div className="mt-16 flex items-center gap-4 group/btn">
                   <button className="px-8 py-4 bg-white text-slate-900 font-black rounded-2xl shadow-sm group-hover/btn:bg-slate-900 group-hover/btn:text-white transition-all flex items-center gap-2">
                      View Work <ArrowUpRight className="w-5 h-5" />
                   </button>
                </div>
                {/* Decorative Elements */}
                <div className={`absolute top-0 right-0 w-80 h-80 ${section.colorClass} opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/2`} />
             </div>
           ))}
        </div>
      </section>

      {/* Integration CTA */}
      <section className="bg-slate-900 py-24">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-black text-white mb-8">Need a Custom Integrated Package?</h2>
            <p className="text-slate-400 text-lg mb-12">Combine services from different pillars and get a custom bundled quote tailored to your startup's specific lifecycle stage.</p>
            <button className="px-10 py-5 bg-teal-500 text-white font-black rounded-2xl hover:scale-105 transition-transform shadow-2xl">
               Request Custom Bundle
            </button>
         </div>
      </section>
    </div>
  );
};

export default Services;

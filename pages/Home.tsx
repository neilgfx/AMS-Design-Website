import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Zap, Target, MousePointer2, Monitor, Share2, CheckCircle2, ShoppingCart, BookOpen, Phone, Mail, PenTool, Gift } from 'lucide-react';
import { SERVICES_SUMMARY, PHILOSOPHY_ITEMS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden px-4">
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-teal-100 rounded-full blur-[120px] opacity-60 animate-pulse" />
        <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] bg-rose-100 rounded-full blur-[100px] opacity-60" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 px-4 py-2 rounded-full text-teal-700 text-sm font-bold mb-8">
              <Zap className="w-4 h-4" /> Energizing Vision into Reality
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-8">
              Expert <span className="text-gradient">Website Design,</span> Branding & Digital Marketing Solutions
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-lg">
              Abridge Media Services is a full-service creative agency dedicated to bridging the gap between imagination and execution. From powerful branding to cutting-edge Website Design & Development, we are your one-stop solution.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl shadow-2xl hover:bg-slate-800 transition-all flex items-center gap-3">
                View Our Services <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="px-10 py-5 bg-white border-2 border-slate-100 text-slate-900 font-black rounded-2xl hover:border-teal-500 transition-all">
                Get a Quote
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
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-8">Your Partner in <span className="text-teal-500 italic">Design – Develop – Deliver</span></h2>
                 <p className="text-lg text-slate-600 font-medium mb-8 leading-relaxed">
                    In today’s fast-paced digital world, you need a partner who can handle every aspect of your visual identity. At Abridge Media Services, our philosophy is simple: Design - Develop. We understand that a strong business requires more than just a logo; it needs a cohesive digital presence and impactful marketing materials.
                 </p>
                 <p className="text-lg text-slate-600 font-medium mb-12 leading-relaxed">
                    Whether you are a startup looking for a fresh identity or an established firm seeking to revitalize your digital presence, we are here to energize your vision. Let us be the creative spark that drives your business forward through expert Graphic Designing and strategic Digital Marketing.
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

      {/* Our Core Services Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Our Core Services</h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              We structure our expertise into four core pillars to ensure your brand shines across every platform. We offer comprehensive Website Design & Development, Graphic Designing, and Digital Marketing services tailored to your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white rounded-[2.5rem] p-10 flex flex-col group border border-slate-100 hover:border-teal-300 transition-all card-shadow">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-500 transition-colors">
                <PenTool className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">1. Brand Foundation (Graphic Designing)</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-6">We build strong identities from the ground up. Our Graphic Designing team ensures that who you are is clearly defined visually.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {['Logo Design', 'Brand Identity & Style Guides', 'Business Card Design', 'Stationery Design', 'Icon Design'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600 font-medium">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/services" className="mt-auto inline-flex items-center gap-2 font-bold text-teal-600 hover:underline">
                Learn More <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-[2.5rem] p-10 flex flex-col group border border-slate-100 hover:border-blue-300 transition-all card-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500 transition-colors">
                <Monitor className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">2. Digital Experience</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-6">We take your brand online with state-of-the-art Website Design & Development. We create digital experiences that engage visitors and convert them into customers.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {['Website and UI/UX Design', 'Web Banner Design', 'Thumbnails', 'Online Graphic Creation', 'HTML Conversion', 'Digital Marketing'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600 font-medium">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/services" className="mt-auto inline-flex items-center gap-2 font-bold text-blue-600 hover:underline">
                Learn More <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-[2.5rem] p-10 flex flex-col group border border-slate-100 hover:border-rose-300 transition-all card-shadow">
              <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rose-500 transition-colors">
                <Share2 className="w-8 h-8 text-rose-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">3. Marketing & Print (Digital Marketing)</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-6">From brochures to social media assets, we craft tangible and digital materials that leave a lasting impression. Our Digital Marketing services help you reach the right audience.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {['Brochure and Flyer Design', 'Advertisement Creative Design', 'Social Media Graphics', 'Presentation Design', 'Posters, Menus, Signage & Banners'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600 font-medium">
                    <div className="w-1.5 h-1.5 bg-rose-500 rounded-full" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/services" className="mt-auto inline-flex items-center gap-2 font-bold text-rose-600 hover:underline">
                Learn More <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white rounded-[2.5rem] p-10 flex flex-col group border border-slate-100 hover:border-indigo-300 transition-all card-shadow">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-500 transition-colors">
                <Gift className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">4. The Plus (Specialized Services)</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-6">We go beyond the basics with specialized design services that make your products pop.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {['Packaging and Merchandise Design', 'Cap & T-Shirt Designing and Printing', 'Book Cover Design', 'Label Design'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600 font-medium">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/services" className="mt-auto inline-flex items-center gap-2 font-bold text-indigo-600 hover:underline">
                Learn More <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black mb-12">Why Choose Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-teal-400">Affordable & Transparent Packages</h3>
                  <p className="text-slate-300 text-lg mb-8">
                    We believe in transparency. Whether you need a simple Logo Design or a full E-commerce Website, our pricing is competitive and clear.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0 mt-1" />
                      <span>Graphic Design: Starting from ₹400 ($5) for Social Media Posters to ₹5000 ($75) for Premium Logo Design.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0 mt-1" />
                      <span>Website Development: Professional 5-7 page websites starting from ₹16,000 ($182).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0 mt-1" />
                      <span>E-commerce Solutions: Complete online stores with payment gateway integration starting at ₹45,000 ($550).</span>
                    </li>
                  </ul>
                  <p className="mt-8 text-sm text-slate-400 italic">
                    Maximum 3 design revisions included. Content and images provided by the client.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-sm aspect-square bg-gradient-main rounded-3xl flex items-center justify-center p-12 text-center">
                    <div>
                      <Zap className="w-16 h-16 mx-auto mb-6" />
                      <p className="text-2xl font-black">Bridge the gap between imagination and execution today.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creativelyink Store Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 px-4 py-2 rounded-full text-rose-700 text-sm font-bold mb-8">
            <ShoppingCart className="w-4 h-4" /> Creativelyink Store
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8">Need Instant Solutions?</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium">
            Visit our store, Creativelyink, for ready-made creative assets. Perfect for startups and DIY enthusiasts, we offer high-quality templates you can download instantly.
          </p>
          <div className="bg-white rounded-[3rem] p-12 border border-slate-100 shadow-xl mb-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">What We Sell:</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Logo Templates', 'T-shirt Designs', 'E-books', 'Posters', 'And more...'].map((item, i) => (
                <span key={i} className="px-6 py-3 bg-slate-50 rounded-xl font-bold text-slate-700">{item}</span>
              ))}
            </div>
          </div>
          <a href="https://payhip.com/Creativelyink" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-gradient-main text-white font-black rounded-2xl shadow-2xl hover:scale-105 transition-transform text-xl inline-flex items-center gap-3">
            Shop Templates at Creativelyink <ArrowUpRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-teal-500 rounded-[4rem] p-12 lg:p-20 text-white">
            <div className="max-w-xl">
              <h2 className="text-4xl lg:text-5xl font-black mb-6">Stay Updated</h2>
              <h3 className="text-2xl font-bold mb-4 opacity-90">The Creative Blog</h3>
              <p className="text-lg opacity-80 mb-8">
                Insights, tips, and trends on Website Design, Digital Marketing, and Graphic Designing.
              </p>
              <a href="https://creativelyink.blogspot.com/" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white text-teal-600 font-black rounded-2xl shadow-xl hover:bg-slate-50 transition-all inline-flex items-center gap-3">
                Read Our Blog <BookOpen className="w-5 h-5" />
              </a>
            </div>
            <div className="w-full lg:w-1/3 aspect-video bg-white/20 rounded-3xl backdrop-blur-md flex items-center justify-center">
              <BookOpen className="w-24 h-24 opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-32 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto bg-white p-12 lg:p-24 rounded-[4rem] shadow-2xl border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8">Contact Us</h2>
              <p className="text-xl text-slate-600 mb-12 font-medium">
                Ready to start your project? Whether you need a custom quote or want to discuss our packages, we are here to help.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Mobile / WhatsApp</p>
                    <a href="tel:+919881103444" className="text-xl font-black text-slate-900 hover:text-teal-600 transition-colors">+91 9881103444</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email</p>
                    <a href="mailto:004neil@gmail.com" className="text-xl font-black text-slate-900 hover:text-rose-600 transition-colors">004neil@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Location</p>
                    <p className="text-xl font-black text-slate-900">Serving Clients Globally</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <Link to="/contact" className="w-full py-8 bg-gradient-main text-white font-black text-2xl rounded-[2rem] shadow-2xl hover:scale-[1.02] transition-transform text-center flex items-center justify-center gap-4">
                Request a Quote for Custom Services <ArrowUpRight className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
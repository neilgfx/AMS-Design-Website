
import React from 'react';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  const whyUs = [
    "Expert Designers & Developers under one roof",
    "Tailored approach to every brand identity",
    "Focus on high-conversion digital experiences",
    "Vibrant, modern aesthetic that stands out",
    "Transparent pricing with global currency support",
    "Dedicated support and direct communication"
  ];

  return (
    <div className="animate-in slide-in-from-bottom duration-700">
      <section className="bg-gradient-soft py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black text-gradient mb-6">Who We Are</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Bridging the gap between creative concepts and powerful execution since inception.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">More Than Just a Media Agency</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  At <strong>Abridge Media Services</strong>, we believe every business deserves a visual foundation that reflects its ambition. Our name is our mission: we abridge the distance between your imagination and a market-ready product.
                </p>
                <p>
                  Whether you're a startup looking for your first logo or an established business needing a digital overhaul, our energetic team combines high-level design theory with modern technical development to deliver results that pop.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full lg:w-auto h-80 lg:h-[500px] relative">
              <div className="absolute inset-0 bg-gradient-main rounded-3xl rotate-3 scale-95 opacity-20" />
              <img 
                src="https://picsum.photos/800/800?grayscale=0&random=1" 
                alt="Creative Workspace" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl -rotate-2 transform hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-500">We don't just design; we define your business character.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whyUs.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl flex items-center gap-4 shadow-sm border border-white hover:border-blue-200 transition-colors">
                <div className="bg-blue-500 p-2 rounded-full shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

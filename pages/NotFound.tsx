import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import { SERVICE_PAGES } from '../seoData';

const NotFound: React.FC = () => {
  return (
    <div className="pt-36 pb-24 min-h-[75vh] bg-slate-50 px-4">
      <SeoHead
        title="Page Not Found | Abridge Media Services"
        description="The page you requested could not be found. Explore Abridge Media Services for Website Design, Graphic Design, and Digital Marketing."
        path="/404"
        noindex
      />
      <div className="max-w-3xl mx-auto text-center bg-white rounded-[3rem] p-12 border border-slate-100 card-shadow">
        <p className="text-sm font-black uppercase tracking-widest text-teal-600 mb-4">404 Error</p>
        <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Page Not Found</h1>
        <p className="text-lg text-slate-600 font-medium mb-10">
          The page you are looking for may have moved. Explore our core pages or jump directly to a service below.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link
            to="/"
            className="px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
          >
            Back to Home <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 font-black rounded-2xl hover:border-teal-500 transition-colors"
          >
            All Services
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {SERVICE_PAGES.map((svc) => (
            <Link
              key={svc.slug}
              to={svc.slug}
              className="px-4 py-2 bg-slate-50 hover:bg-teal-50 text-slate-700 hover:text-teal-700 rounded-xl text-sm font-bold transition-colors"
            >
              {svc.shortName}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;

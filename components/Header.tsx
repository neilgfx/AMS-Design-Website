
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, ChevronDown } from 'lucide-react';
import { SERVICE_PAGES } from '../seoData';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setServicesDropdownOpen(false);
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Blog', href: 'https://creativelyink.blogspot.com/' },
    { name: 'Store', href: 'https://payhip.com/Creativelyink' },
  ];

  const isServiceRoute = SERVICE_PAGES.some((s) => s.slug === location.pathname);
  const isActive = (path: string) =>
    path === '/services'
      ? location.pathname === '/services' || isServiceRoute
      : location.pathname === path;

  const LOGO_URL = "https://scontent-bom5-2.xx.fbcdn.net/v/t39.30808-6/626778663_122102633553247608_6348987989825248532_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nEkDCMHhGfMQ7kNvwFRnWeq&_nc_oc=AdlbetXYtWnY3XMqnyPFuLO6nCJ2LK1JfHIJEML9VkD8FuGwYuhH-1TSaIGyzq3fPxI&_nc_zt=23&_nc_ht=scontent-bom5-2.xx&_nc_gid=ffd4-Rt2poYsEMVgYtv74Q&oh=00_AfsbfeFxd0dLleA_Q3wbFWn8d1HYLbfUKs2Urz8-pQsqUw&oe=698E1B91";

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
      <header className={`max-w-6xl mx-auto px-6 h-16 transition-all duration-500 rounded-2xl flex items-center justify-between ${scrolled ? 'floating-nav shadow-lg border border-white/50 w-[90%]' : 'bg-transparent w-full'}`}>
        <Link to="/" className="flex items-center">
          <img 
            src={LOGO_URL} 
            alt="Abridge Media Services Logo" 
            className="h-10 w-auto object-contain transition-transform hover:scale-105 rounded-lg"
            onError={(e) => {
              // Fallback if the link expires or fails
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent && !parent.querySelector('.fallback-text')) {
                const span = document.createElement('span');
                span.className = 'text-xl font-extrabold tracking-tighter text-slate-800 fallback-text';
                span.innerText = 'ABRIDGE';
                parent.appendChild(span);
              }
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center bg-white/40 p-1 rounded-xl gap-1">
          {navLinks.map((link) => {
            if (link.name === 'Services' && link.path) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`px-4 py-2 text-sm font-bold rounded-lg transition-all inline-flex items-center gap-1 ${
                      isActive(link.path)
                        ? 'bg-teal-500 text-white shadow-md'
                        : 'text-slate-600 hover:text-teal-500 hover:bg-white/60'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  {servicesDropdownOpen && (
                    <div className="absolute left-0 top-full pt-2 w-72 z-50">
                      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 grid grid-cols-1 gap-1">
                        <Link
                          to="/services"
                          className="px-3 py-2 rounded-xl text-xs font-black uppercase tracking-wider text-teal-600 hover:bg-teal-50 transition-colors border-b border-slate-100 mb-1"
                        >
                          All Services Overview →
                        </Link>
                        {SERVICE_PAGES.map((service) => (
                          <Link
                            key={service.slug}
                            to={service.slug}
                            className={`px-3 py-2 rounded-xl text-sm font-bold transition-colors flex items-center justify-between ${
                              location.pathname === service.slug
                                ? 'bg-teal-50 text-teal-700'
                                : 'text-slate-700 hover:bg-slate-50 hover:text-teal-600'
                            }`}
                          >
                            <span>{service.shortName}</span>
                            <span className="text-[11px] font-bold text-slate-400">{service.startingPriceINR.split('–')[0]}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return link.path ? (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${
                  isActive(link.path) 
                    ? 'bg-teal-500 text-white shadow-md' 
                    : 'text-slate-600 hover:text-teal-500 hover:bg-white/60'
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 text-sm font-bold rounded-lg transition-all flex items-center gap-2 ${
                  link.name === 'Store' 
                    ? 'bg-rose-500 text-white shadow-md hover:bg-rose-600 scale-105 mx-1' 
                    : 'text-slate-600 hover:text-teal-500'
                }`}
              >
                {link.name === 'Store' && <ShoppingBag className="w-4 h-4" />}
                {link.name}
              </a>
            );
          })}
          <Link
            to="/contact"
            className="ml-4 bg-slate-900 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-md"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden p-2 text-slate-700 hover:text-teal-600"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-[60] overflow-y-auto py-20 px-6 flex flex-col items-center justify-start space-y-6 animate-in fade-in zoom-in duration-300">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="fixed top-8 right-8 p-2 text-slate-900"
          >
            <X className="w-8 h-8" />
          </button>
          {navLinks.map((link) => {
            if (link.name === 'Services' && link.path) {
              return (
                <div key={link.name} className="flex flex-col items-center space-y-3 w-full max-w-xs">
                  <div className="flex items-center gap-3">
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl font-black ${isActive(link.path) ? 'text-teal-500' : 'text-slate-400'}`}
                    >
                      {link.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      aria-expanded={mobileServicesOpen}
                      aria-label="Toggle service pages list"
                      className="p-2 rounded-xl bg-slate-100 text-slate-700"
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <div className="w-full bg-slate-50 rounded-2xl p-3 grid grid-cols-1 gap-1.5 border border-slate-100">
                      {SERVICE_PAGES.map((service) => (
                        <Link
                          key={service.slug}
                          to={service.slug}
                          onClick={() => setIsOpen(false)}
                          className={`px-3 py-2 rounded-xl text-sm font-bold text-center ${
                            location.pathname === service.slug ? 'bg-teal-500 text-white' : 'text-slate-700 hover:bg-white'
                          }`}
                        >
                          {service.shortName}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return link.path ? (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-black ${isActive(link.path) ? 'text-teal-500' : 'text-slate-400'}`}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-black flex items-center gap-4 ${link.name === 'Store' ? 'text-rose-500 scale-110' : 'text-slate-400'}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name === 'Store' && <ShoppingBag className="w-8 h-8" />}
                {link.name}
              </a>
            );
          })}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="px-10 py-4 bg-gradient-main text-white rounded-2xl font-black text-xl shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;

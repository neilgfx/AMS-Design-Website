
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Blog', href: 'https://creativelyink.blogspot.com/' },
    { name: 'Store', href: 'https://payhip.com/Creativelyink' },
  ];

  const isActive = (path: string) => location.pathname === path;

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
          {navLinks.map((link) => (
            link.path ? (
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
            )
          ))}
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
          className="md:hidden p-2 text-slate-700 hover:text-teal-600"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in duration-300">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 p-2 text-slate-900">
            <X className="w-8 h-8" />
          </button>
          {navLinks.map((link) => (
            link.path ? (
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
            )
          ))}
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

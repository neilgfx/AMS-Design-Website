import React from 'react';
import { Mail, Phone, ShoppingBag, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  const LOGO_URL = "https://scontent-bom5-2.xx.fbcdn.net/v/t39.30808-6/626778663_122102633553247608_6348987989825248532_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nEkDCMHhGfMQ7kNvwFRnWeq&_nc_oc=AdlbetXYtWnY3XMqnyPFuLO6nCJ2LK1JfHIJEML9VkD8FuGwYuhH-1TSaIGyzq3fPxI&_nc_zt=23&_nc_ht=scontent-bom5-2.xx&_nc_gid=ffd4-Rt2poYsEMVgYtv74Q&oh=00_AfsbfeFxd0dLleA_Q3wbFWn8d1HYLbfUKs2Urz8-pQsqUw&oe=698E1B91";

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img 
              src={LOGO_URL} 
              alt="Abridge Media Services Logo" 
              className="h-14 w-auto mb-6 object-contain rounded-lg"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent && !parent.querySelector('.fallback-h3')) {
                  const h3 = document.createElement('h3');
                  h3.className = 'text-xl font-extrabold text-gradient mb-4 fallback-h3';
                  h3.innerText = 'Abridge Media Services';
                  parent.insertBefore(h3, parent.firstChild);
                }
              }}
            />
            <p className="text-gray-500 leading-relaxed">
              Bridging the gap between imagination and execution. We build the visual foundation for businesses that dream big.
            </p>
          </div>
          <div>
            <h4 className="text-gray-800 font-bold mb-4 uppercase tracking-wider text-sm">Quick Connect</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-teal-500" />
                <span>+91 9881103444</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-rose-500" />
                <span>004neil@gmail.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-800 font-bold mb-4 uppercase tracking-wider text-sm">Follow the creativity</h4>
            <div className="flex gap-4">
              <a href="https://payhip.com/Creativelyink" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors">
                <ShoppingBag className="w-6 h-6" />
              </a>
              <a href="https://creativelyink.blogspot.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-teal-50 text-teal-600 hover:bg-teal-100 transition-colors">
                <BookOpen className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Abridge Media Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-gray-400">
            <span className="text-gray-300">|</span>
            <span>Design - Develop</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
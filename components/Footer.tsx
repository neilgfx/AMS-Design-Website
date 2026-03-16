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
                <a href="tel:+919881103444" className="hover:text-teal-500 transition-colors">+91 9881103444</a>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-rose-500" />
                <a href="mailto:004neil@gmail.com" className="hover:text-rose-500 transition-colors">004neil@gmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-800 font-bold mb-4 uppercase tracking-wider text-sm">Follow the creativity</h4>
            <div className="flex gap-4">
              <a href="https://wa.me/919881103444" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors" title="Chat on WhatsApp">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
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

import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions: React.FC = () => {
  const phoneNumber = '+919881103444';
  const whatsappNumber = '919881103444';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
        aria-label="Chat on WhatsApp"
        id="whatsapp-fab"
      >
        <MessageCircle size={24} />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
        aria-label="Call us"
        id="call-fab"
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
};

export default FloatingActions;

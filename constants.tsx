
import React from 'react';
import { 
  Shapes, 
  Cpu, 
  Rocket, 
  Sparkles, 
  Monitor, 
  PenTool, 
  Share2, 
  Gift 
} from 'lucide-react';

export const COLORS = {
  primary: '#0d9488', // Teal
  secondary: '#f43f5e', // Coral
  accent: '#10b981', // Mint
  violet: '#8b5cf6', // Lavender
};

export const SERVICES_SUMMARY = [
  {
    title: 'Brand Foundation',
    description: 'We carve out a unique identity that resonates with your core audience.',
    icon: <PenTool className="w-8 h-8 text-teal-600" />,
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200'
  },
  {
    title: 'Digital Experience',
    description: 'High-performance websites designed for modern, fast-paced users.',
    icon: <Monitor className="w-8 h-8 text-blue-600" />,
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    title: 'Marketing & Print',
    description: 'Impactful physical and digital assets that turn heads and clicks.',
    icon: <Share2 className="w-8 h-8 text-rose-600" />,
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200'
  },
  {
    title: 'The Plus',
    description: 'Custom packaging and merchandise that completes the brand story.',
    icon: <Gift className="w-8 h-8 text-indigo-600" />,
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200'
  },
];

export const PHILOSOPHY_ITEMS = [
  {
    title: "The Creative Gap",
    description: "Design is the bridge. We identify the missing links in your visual communication.",
    icon: <Shapes className="w-10 h-10 text-teal-500" />
  },
  {
    title: "The Tech Bridge",
    description: "Development is the vessel. We build robust systems that carry your vision to the user.",
    icon: <Cpu className="w-10 h-10 text-violet-500" />
  }
];

export const A_LA_CARTE_ITEMS = [
  { item: 'Social Media Poster', priceINR: 400 },
  { item: 'Business Cards', priceINR: 400 },
  { item: 'Letter Head', priceINR: 400 },
  { item: 'Brochure A4', priceINR: 1000 },
  { item: 'Company Profile', priceINR: 750 },
  { item: 'Magazine', priceINR: 750 },
  { item: 'Coupons', priceINR: 500 },
  { item: 'Cover Page', priceINR: 400 },
  { item: 'Website Banner', priceINR: 500 },
  { item: 'Product Packaging', priceINR: 2000 },
  { item: 'Catalogue', priceINR: 750 },
  { item: 'Menu Card', priceINR: 3000 },
];

export const WORK_GALLERY = [
  "https://lh3.googleusercontent.com/d/1X6lY_p4EaxqowVueH6KwVuWGzI5Flbel",
  "https://lh3.googleusercontent.com/d/1T0YsWyZS-6FIrEBEMNYOSO0Jqpm83yUx",
  "https://lh3.googleusercontent.com/d/1IkXqz6tt12PBxt81VIC0qK16_Fe5fmBV",
  "https://lh3.googleusercontent.com/d/1Ni5D3PWUFUExgVTLqFJVxtkVI501mvHT",
  "https://lh3.googleusercontent.com/d/1nAHG5FpSum3whfmZrwttTahXnuRIPvVw",
  "https://lh3.googleusercontent.com/d/18B6H4KHKiOiFVAPw2I5Ci6yGmKb8ZR48",
  "https://lh3.googleusercontent.com/d/1Fr2GAcnOuYvecsFGIlZbDJD0H0YkgUYC",
  "https://lh3.googleusercontent.com/d/1R0X2vSQ3ldGNx12Ari3Oa3epoA0_IH1g"
];

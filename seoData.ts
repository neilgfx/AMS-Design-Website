export interface FaqItem {
  question: string;
  answer: string;
}

export interface DeliverableItem {
  title: string;
  detail: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  detail: string;
}

export interface ServicePageData {
  slug: string;
  shortName: string;
  title: string;
  description: string;
  keywords: string;
  category: 'Brand Foundation' | 'Digital Experience' | 'Marketing & Print' | 'The Plus';
  h1: string;
  subtitle: string;
  aiSummary: string;
  startingPriceINR: string;
  startingPriceUSD: string;
  priceNote: string;
  turnaround: string;
  revisions: string;
  deliverables: DeliverableItem[];
  idealFor: string[];
  processSteps: ProcessStep[];
  faqs: FaqItem[];
  relatedSlugs: string[];
  accentColor: 'teal' | 'blue' | 'rose' | 'violet';
}

export const SITE_CONFIG = {
  name: 'Abridge Media Services',
  tagline: 'Design - Develop - Deliver',
  baseUrl: 'https://amsdesign.in',
  phone: '+919881103444',
  phoneDisplay: '+91 9881103444',
  whatsappUrl: 'https://wa.me/919881103444',
  email: 'hello@amsdesign.in',
  location: 'Nagpur, Maharashtra, India (Serving Clients Globally)',
  address: {
    streetAddress: 'Plot no. C, 2, Laxminagar',
    addressLocality: 'Nagpur',
    addressRegion: 'Maharashtra',
    postalCode: '440022',
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Su 09:00-20:00',
  aggregateRating: {
    ratingValue: '4.8',
    reviewCount: '11',
  },
  logo: 'https://scontent-bom5-2.xx.fbcdn.net/v/t39.30808-6/626778663_122102633553247608_6348987989825248532_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nEkDCMHhGfMQ7kNvwFRnWeq&_nc_oc=AdlbetXYtWnY3XMqnyPFuLO6nCJ2LK1JfHIJEML9VkD8FuGwYuhH-1TSaIGyzq3fPxI&_nc_zt=23&_nc_ht=scontent-bom5-2.xx&_nc_gid=ffd4-Rt2poYsEMVgYtv74Q&oh=00_AfsbfeFxd0dLleA_Q3wbFWn8d1HYLbfUKs2Urz8-pQsqUw&oe=698E1B91',
  ogImage: 'https://lh3.googleusercontent.com/d/1X6lY_p4EaxqowVueH6KwVuWGzI5Flbel',
  gmbUrl: 'https://google.com',
  instagramUrl: 'https://www.instagram.com/abridgemsdesign/',
  storeUrl: 'https://payhip.com/Creativelyink',
  blogUrl: 'https://creativelyink.blogspot.com/',
};

export const HOME_FAQS: FaqItem[] = [
  {
    question: 'What services does Abridge Media Services offer?',
    answer:
      'Abridge Media Services is a full-service creative and digital agency offering Website Design & Development, Graphic Designing, Digital Marketing, Logo Design, Thumbnail Design, Poster & Flyer Design, Book Cover & Magazine Design, Brochure & Catalogue Design, Visiting Card Design, and Product Packaging Design.',
  },
  {
    question: 'How much does a website or graphic design project cost?',
    answer:
      'Graphic design services start at ₹400 ($5) for social media posters, visiting cards, and letterheads. Logo design packages start at ₹3,000 ($50), template websites start at ₹3,000 ($35), custom 5–7 page business websites start from ₹16,000 ($182), and e-commerce stores start at ₹45,000 ($550).',
  },
  {
    question: 'How many design revisions are included and what files do I receive?',
    answer:
      'Standard projects include up to 3 design revisions (with unlimited refinements in the Best Buy Logo pack). Final deliverables include print-ready vector/PDF files (AI, EPS, PDF) and web-optimized PNG, JPG, SVG, or full website source code upon completion.',
  },
  {
    question: 'Does Abridge Media Services work with international clients?',
    answer:
      'Yes. While based in India, Abridge Media Services serves startups, creators, and established businesses globally with transparent INR and USD pricing and direct communication via phone, WhatsApp (+91 9881103444), and email.',
  },
];

export const MAIN_PAGES_SEO = {
  home: {
    path: '/',
    title: 'Abridge Media Services | Website Design, Digital Marketing & Graphic Design',
    description:
      'Full-service agency for Website Design, Graphic Design, Digital Marketing, Logo, Thumbnail, Poster, Book, Brochure & Visiting Card Design. Get a quote today.',
    keywords:
      'Abridge Media Services, website design, graphic design, digital marketing, logo design, thumbnail design, poster design, book design, brochure design, visiting card design, packaging design',
    h1: 'Expert Website Design, Branding & Digital Marketing Solutions',
  },
  work: {
    path: '/work',
    title: 'Website Design & Development Case Studies & Portfolio | Abridge Media Services',
    description:
      'Explore 10 live website design & development case studies by Abridge Media Services across healthcare, automotive, hospitality, F&B, manufacturing, education, finance, and real estate.',
    keywords:
      'website design case studies, web development portfolio India, graphic design portfolio, healthcare website design, ecommerce web portal, Abridge Media Services work',
    h1: 'Our Portfolio.',
  },
  about: {
    path: '/about',
    title: 'About Us | Abridge Media Services – Design, Develop, Deliver',
    description:
      'Learn about Abridge Media Services, a global creative agency bridging imagination and execution across web development, graphic design, and digital marketing.',
    keywords:
      'about Abridge Media Services, creative agency India, web design agency, branding studio, graphic design company',
    h1: 'Who We Are',
  },
  services: {
    path: '/services',
    title: 'Services: Web Design, Graphic Design & Digital Marketing | Abridge Media',
    description:
      'Discover our 4 service pillars: Brand Foundation, Digital Experience, Marketing & Print, and Specialized Packaging, Book Cover, Thumbnail & Visiting Card Design.',
    keywords:
      'website design services, graphic design services, digital marketing services, logo design, thumbnail design, poster design, brochure design, visiting card design, book design',
    h1: 'Our Capabilities.',
  },
  packages: {
    path: '/packages',
    title: 'Pricing & Packages: Logo, Website & Graphic Design | Abridge Media',
    description:
      'Transparent INR & USD pricing for Logo Design (₹3,000+), Business Websites (₹16,000+), E-commerce (₹45,000), Posters, Brochures, Visiting Cards & Packaging.',
    keywords:
      'website design price India, logo design packages, graphic design pricing, brochure design cost, visiting card design price, ecommerce website cost',
    h1: 'Investment.',
  },
  contact: {
    path: '/contact',
    title: 'Contact Us & Request a Quote | Abridge Media Services',
    description:
      'Start your website, branding, graphic design, or digital marketing project with Abridge Media Services. Call or WhatsApp +91 9881103444 or email hello@amsdesign.in.',
    keywords:
      'contact Abridge Media Services, hire website designer, hire graphic designer, request design quote, +91 9881103444',
    h1: 'Get In Touch',
  },
};

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: '/website-design',
    shortName: 'Website Design',
    title: 'Custom Website Design & Development Services in India | Abridge Media Services',
    description:
      'Abridge Media Services builds fast, mobile-responsive, and conversion-focused websites for startups, small businesses, and established brands across India and globally.',
    keywords:
      'website design, website development, custom website design India, UI UX design, business website design, ecommerce website development, mobile-first website, SEO friendly website',
    category: 'Digital Experience',
    h1: 'Custom Website Design & Development Services in India',
    subtitle: 'Abridge Media Services builds fast, mobile-responsive, and conversion-focused websites for startups, small businesses, and established brands across India and globally. From clean business portfolios to full-featured e-commerce stores, every site is engineered for speed, user experience, and search engine visibility.',
    aiSummary:
      'Abridge Media Services builds fast, mobile-responsive, and conversion-focused websites for startups, small businesses, and established brands across India and globally. From clean business portfolios to full-featured e-commerce stores, every site is engineered for speed, user experience, and search engine visibility. Packages include Template Websites from ₹3,000 ($35), Standard 5–7 page Business Websites from ₹16,000 ($182), and complete E-Commerce stores from ₹45,000 ($550).',
    startingPriceINR: '₹3,000 – ₹45,000',
    startingPriceUSD: '$35 – $550',
    priceNote: 'Template landing pages from ₹3,000; 5–7 page business sites from ₹16,000; E-commerce from ₹45,000.',
    turnaround: '7–14 Working Days',
    revisions: 'Up to 3 design revisions included',
    deliverables: [
      { title: 'Website & UI/UX Design', detail: 'User-centric, mobile-first layouts tailored to your brand identity and customer journey.' },
      { title: 'Standard 5–7 Page Business Sites', detail: 'Complete company websites with SEO metadata, contact forms, and CMS/content integration.' },
      { title: 'E-Commerce Store Development', detail: 'Full online storefront with product catalog, cart, inventory, and payment gateway integration.' },
      { title: 'HTML Conversion & Web Banners', detail: 'Pixel-accurate Figma/PSD to responsive HTML/CSS conversion plus custom hero web banners.' },
    ],
    idealFor: ['Startups launching online', 'Local & global service businesses', 'D2C brands needing e-commerce', 'Agencies needing HTML conversion'],
    processSteps: [
      { step: '01', title: 'Discovery & Wireframing', detail: 'We map your pages, target keywords, user flow, and visual layout goals.' },
      { step: '02', title: 'UI/UX Design & Development', detail: 'We craft responsive pages, integrate forms, WhatsApp/call actions, and technical SEO.' },
      { step: '03', title: 'Testing & Launch', detail: 'Cross-device QA, speed optimization, and smooth deployment with full handover.' },
    ],
    faqs: [
      {
        question: 'What does a professional website design package include?',
        answer:
          'A professional website design package from Abridge Media Services includes custom UI/UX layout design, mobile and tablet responsiveness, on-page SEO setup, contact form integration, SSL security configuration, and speed optimization. Every website is built to load quickly and convert visitors into leads across all devices.',
      },
      {
        question: 'How long does it take to design and launch a business website?',
        answer:
          'A standard 5-to-10-page business website typically takes 7 to 14 working days from initial wireframe approval to final launch. Larger custom websites or full e-commerce platforms with payment gateway integration usually take 3 to 5 weeks, depending on content readiness and feature requirements.',
      },
      {
        question: 'Why is mobile-first website design important for Indian businesses?',
        answer:
          'Over 80% of internet users in India browse and shop primarily on smartphones. A mobile-first website ensures fast loading on mobile networks, easy thumb-friendly navigation, and higher rankings on Google, which uses mobile-first indexing to evaluate and rank all websites.',
      },
    ],
    relatedSlugs: ['/graphic-design', '/digital-marketing', '/logo-design', '/thumbnail-design'],
    accentColor: 'blue',
  },
  {
    slug: '/graphic-design',
    shortName: 'Graphic Design',
    title: 'Graphic Design Services | Branding, Print & Digital – Abridge Media',
    description:
      'Professional Graphic Design starting at ₹400 ($5) for posters, logos, brochures, visiting cards, book covers, packaging & social media graphics.',
    keywords:
      'graphic design, graphic designing services, creative graphic designer, brand design, print design, digital graphics, custom icons, visual identity',
    category: 'Brand Foundation',
    h1: 'Graphic Design Services',
    subtitle: 'Cohesive visual communication across print, branding, social media, and digital platforms.',
    aiSummary:
      'Abridge Media Services provides end-to-end graphic design services starting from ₹400 ($5) per asset for startups, creators, and enterprises. Services cover logo design, brand style guides, visiting cards, letterheads, brochures, social media posters, YouTube thumbnails, book covers, menus, signage, and product packaging with up to 3 revisions included.',
    startingPriceINR: '₹400',
    startingPriceUSD: '$5',
    priceNote: 'Individual graphics from ₹400; full brand identity kits from ₹3,000–₹5,000.',
    turnaround: '1–4 Business Days',
    revisions: 'Up to 3 design revisions included',
    deliverables: [
      { title: 'Brand & Corporate Graphics', detail: 'Logos, brand style guides, custom app/web icons, letterheads, and corporate stationery.' },
      { title: 'Print & Editorial Collateral', detail: 'Brochures, flyers, company profiles, catalogues, magazines, menus, and signage.' },
      { title: 'Digital & Social Visuals', detail: 'Social media posters, ad creatives, website banners, thumbnails, and pitch decks.' },
      { title: 'Print-Ready & Digital Formats', detail: 'Delivered in high-resolution CMYK PDF for printing and crisp RGB PNG/JPG/SVG for web.' },
    ],
    idealFor: ['Businesses building a consistent look', 'Marketing teams needing rapid creatives', 'Authors, restaurants, and retailers', 'Startups launching new products'],
    processSteps: [
      { step: '01', title: 'Creative Brief', detail: 'Share your brand message, dimensions, text copy, and visual references.' },
      { step: '02', title: 'Concept Creation', detail: 'Our designers build custom layouts aligned with your brand typography and colors.' },
      { step: '03', title: 'Refinement & Export', detail: 'Up to 3 revision rounds followed by print-ready and web-ready file delivery.' },
    ],
    faqs: [
      {
        question: 'What is included in your graphic design services?',
        answer: 'We design logos, social media posters, visiting cards, letterheads, A4 brochures, company profiles, magazines, catalogues, YouTube thumbnails, book covers, menus, and product packaging.',
      },
      {
        question: 'What is the starting price for graphic design?',
        answer: 'Single graphic items like social media posters, business cards, cover pages, and letterheads start at ₹400 ($5).',
      },
      {
        question: 'Do I receive editable source files?',
        answer: 'Yes. High-resolution print and web exports are provided, and editable vector/source files are transferred upon final project settlement.',
      },
    ],
    relatedSlugs: ['/logo-design', '/poster-design', '/brochure-design', '/visiting-card-design'],
    accentColor: 'teal',
  },
  {
    slug: '/digital-marketing',
    shortName: 'Digital Marketing',
    title: 'Result-Driven Digital Marketing & Performance Ad Services | Abridge Media Services',
    description:
      'Abridge Media Services helps businesses grow online visibility, generate qualified leads, and maximize return on ad spend via Google Ads, Meta Ads, and SEO.',
    keywords:
      'digital marketing, performance ad services, Google Ads India, Meta Ads, social media marketing, SEO, AEO, lead generation, ad creative design',
    category: 'Marketing & Print',
    h1: 'Result-Driven Digital Marketing & Performance Ad Services',
    subtitle: 'Abridge Media Services helps businesses grow online visibility, generate qualified leads, and maximize return on ad spend. We manage targeted Google Ads, social media campaigns, and search engine optimization tailored to your target audience across India and international markets.',
    aiSummary:
      'Abridge Media Services helps businesses grow online visibility, generate qualified leads, and maximize return on ad spend. We manage targeted Google Ads, social media campaigns, and search engine optimization tailored to your target audience across India and international markets—paired with conversion-focused creatives starting at ₹400 ($5).',
    startingPriceINR: '₹400',
    startingPriceUSD: '$5',
    priceNote: 'Social media & ad creatives from ₹400; full monthly Google/Meta Ads & SEO retainers available.',
    turnaround: '1–3 Business Days',
    revisions: 'Up to 3 design revisions included',
    deliverables: [
      { title: 'Google Search & Display Ads', detail: 'Targeted search and remarketing campaigns structured for lower Cost Per Lead (CPL).' },
      { title: 'Meta (Facebook & Instagram) Campaigns', detail: 'Scroll-stopping static and carousel ad creatives built for mobile feeds and direct leads.' },
      { title: 'On-Page SEO & Answer Engine Optimization', detail: 'Technical metadata, schema markup, and search optimization for long-term organic traffic.' },
      { title: 'Conversion & Analytics Tracking', detail: 'Google Tag Manager and Google Analytics setup tracking calls, forms, and ROAS.' },
    ],
    idealFor: ['Brands running Meta & Google Ads', 'Businesses growing social channels', 'Coaches, creators & SaaS teams', 'E-commerce seasonal campaigns'],
    processSteps: [
      { step: '01', title: 'Audience & Offer Alignment', detail: 'We clarify your campaign goal, target audience, and primary call-to-action.' },
      { step: '02', title: 'Campaign & Creative Execution', detail: 'Targeted ad setup paired with bold visual hierarchy for maximum click-through.' },
      { step: '03', title: 'Tracking & Optimization', detail: 'Measure CPL, ROAS, phone inquiries, and form submissions to scale winning channels.' },
    ],
    faqs: [
      {
        question: 'Which digital marketing channels generate the fastest leads for businesses?',
        answer:
          'Google Search Ads and Meta (Facebook and Instagram) Ads generate the fastest leads because they target buyers actively searching for your services or matching your ideal customer profile. Combining paid ads with ongoing SEO and AEO builds steady, long-term organic traffic alongside immediate lead flow.',
      },
      {
        question: 'How do you measure the success of a digital marketing campaign?',
        answer:
          'Campaign success is tracked using conversion metrics rather than vanity clicks, including Cost Per Lead (CPL), Return on Ad Spend (ROAS), phone inquiries, and form submissions. We set up Google Tag Manager and Google Analytics conversion tracking so every rupee spent is accountable.',
      },
      {
        question: 'Should a small business invest in SEO or paid ads first?',
        answer:
          'Small businesses needing immediate inquiries should start with targeted Google or Meta Ads to generate leads within days while simultaneously building SEO foundations for sustainable organic growth. Over 6 to 12 months, strong SEO and AEO reduce your overall customer acquisition cost.',
      },
    ],
    relatedSlugs: ['/poster-design', '/thumbnail-design', '/website-design', '/brochure-design'],
    accentColor: 'rose',
  },
  {
    slug: '/logo-design',
    shortName: 'Logo Design',
    title: 'Custom Logo Design & Brand Identity Services | Abridge Media Services',
    description:
      'Abridge Media Services crafts memorable, scalable, and original logos tailored to your brand personality and target market. Packages from ₹3,000 ($50).',
    keywords:
      'logo design, custom logo design, brand identity services, brand style guide, vector logo, startup logo package, business logo design India',
    category: 'Brand Foundation',
    h1: 'Custom Logo Design & Brand Identity Services',
    subtitle: 'Abridge Media Services crafts memorable, scalable, and original logos tailored to your brand personality and target market. We design versatile brand marks that look sharp across websites, social media profiles, packaging, and large-format signage.',
    aiSummary:
      'Abridge Media Services crafts memorable, scalable, and original logos tailored to your brand personality and target market. We design versatile brand marks that look sharp across websites, social media profiles, packaging, and large-format signage. Choose the Starter Logo Package at ₹3,000 ($50) or the Best Buy Identity Kit at ₹5,000 ($75).',
    startingPriceINR: '₹3,000',
    startingPriceUSD: '$50',
    priceNote: 'Starter Logo Package: ₹3,000 ($50) | Best Buy Pro Identity: ₹5,000 ($75).',
    turnaround: '3–5 Working Days',
    revisions: 'Structured revisions (Starter) / Unlimited refinements (Best Buy)',
    deliverables: [
      { title: 'Custom Vector Logo Concepts', detail: '3 to 5 original logo concepts designed from scratch—never generic clip-art.' },
      { title: 'Brand Identity & Style Guide', detail: 'Color palettes (HEX/RGB/CMYK), typography rules, and clear logo usage guidelines.' },
      { title: 'Print & Web File Formats', detail: 'Scalable vector files (AI, EPS, SVG, PDF) plus transparent PNG, JPEG, and monochrome variants.' },
      { title: 'Social Media Branding Kit', detail: 'Profile pictures and cover banners sized for major platforms in our Best Buy package.' },
    ],
    idealFor: ['New startups & founders', 'Businesses undergoing a rebrand', 'E-commerce & D2C labels', 'Creators launching personal brands'],
    processSteps: [
      { step: '01', title: 'Brand Questionnaire', detail: 'We learn your industry, audience, values, and style preferences.' },
      { step: '02', title: 'Concept Exploration', detail: 'We craft 3 to 5 distinct logo directions with real-world mockups.' },
      { step: '03', title: 'Refinement & Vector Handover', detail: 'We polish your chosen mark and transfer full copyright with all source files.' },
    ],
    faqs: [
      {
        question: 'How many logo concepts and revisions do I get?',
        answer:
          'Every logo design project at Abridge Media Services includes 3 to 5 distinct initial concepts based on your brand brief, followed by structured revision rounds until you are completely satisfied. You receive full copyright ownership once the final design is approved.',
      },
      {
        question: 'What formats are included in final logo delivery?',
        answer:
          'You receive scalable vector source files (AI, EPS, SVG, and PDF) for limitless resizing without quality loss, alongside transparent PNG, high-resolution JPEG, and monochrome variations for dark and light backgrounds.',
      },
      {
        question: 'Can you also design matching visiting cards and letterheads?',
        answer: 'Yes, we offer matching Business Card and Letterhead design starting at ₹400 each so your stationery matches your new logo seamlessly.',
      },
    ],
    relatedSlugs: ['/visiting-card-design', '/graphic-design', '/packaging-design', '/website-design'],
    accentColor: 'teal',
  },
  {
    slug: '/thumbnail-design',
    shortName: 'Thumbnail Design',
    title: 'High-CTR YouTube Thumbnail Design Services | Abridge Media Services',
    description:
      'Abridge Media Services designs scroll-stopping YouTube thumbnails engineered to boost your Click-Through Rate (CTR) and video views. 24–48 hour delivery.',
    keywords:
      'thumbnail design, high-CTR YouTube thumbnail design, YouTube thumbnail designer, video thumbnail design, custom YouTube graphics, CTR optimization',
    category: 'Digital Experience',
    h1: 'High-CTR YouTube Thumbnail Design Services',
    subtitle: 'Abridge Media Services designs scroll-stopping YouTube thumbnails engineered to boost your Click-Through Rate (CTR) and video views. We combine expressive focal subjects, bold mobile-readable typography, and high-contrast color psychology tailored to your niche.',
    aiSummary:
      'Abridge Media Services designs scroll-stopping YouTube thumbnails engineered to boost your Click-Through Rate (CTR) and video views. We combine expressive focal subjects, bold mobile-readable typography, and high-contrast color psychology tailored to your niche—delivered in 1280×720 HD starting from ₹400 ($5).',
    startingPriceINR: '₹400',
    startingPriceUSD: '$5',
    priceNote: 'Single custom thumbnail from ₹400 ($5); volume creator retainers available.',
    turnaround: '24–48 Hours',
    revisions: 'Up to 3 design revisions included',
    deliverables: [
      { title: '1280×720 High-Res Thumbnails', detail: 'YouTube-recommended 16:9 full-HD exports under 2MB optimized for mobile and desktop screens.' },
      { title: 'Click-Worthy Composition', detail: 'Strategic focal points, clean cutouts, facial expression enhancement, and depth.' },
      { title: 'Bold Title Typography', detail: 'Short, punchy 3-to-5-word visual hooks designed to complement your video title.' },
      { title: 'Channel Consistency', detail: 'Cohesive color schemes and visual styles that make your uploads instantly recognizable.' },
    ],
    idealFor: ['YouTubers & vloggers', 'Podcasts & interview channels', 'Online educators & coaches', 'Tech, gaming & business channels'],
    processSteps: [
      { step: '01', title: 'Title & Hook Review', detail: 'Share your video topic, title, and raw photos or screenshots.' },
      { step: '02', title: 'CTR-Focused Layout', detail: 'We compose an eye-catching visual hook tested for small mobile screens.' },
      { step: '03', title: 'Fast Delivery', detail: 'Receive ready-to-upload JPG/PNG files within 24–48 hours.' },
    ],
    faqs: [
      {
        question: 'Why do custom YouTube thumbnails improve video performance?',
        answer:
          'Over 70% of YouTube watch time happens on mobile screens where thumbnails appear very small. Custom, high-contrast thumbnails with clear focal points and 3-to-5-word hooks stand out in crowded feeds, increasing CTR and signaling the YouTube algorithm to recommend your video wider.',
      },
      {
        question: 'What is the turnaround time for YouTube thumbnail designs?',
        answer:
          'Standard YouTube thumbnails are delivered within 24 to 48 hours in YouTube-recommended 1280×720 pixels (16:9) full-HD format under 2MB, with editable source files available on request for ongoing channel retainers.',
      },
      {
        question: 'Do you also design YouTube channel banners and web graphics?',
        answer: 'Yes, we design matching channel banners, website banners (₹500), and social media teaser posters.',
      },
    ],
    relatedSlugs: ['/poster-design', '/digital-marketing', '/graphic-design', '/website-design'],
    accentColor: 'blue',
  },
  {
    slug: '/poster-design',
    shortName: 'Poster Design',
    title: 'Poster & Social Media Flyer Design (From ₹400) | Abridge Media',
    description:
      'Eye-catching Poster Design, Social Media Posters, Event Flyers & Promotional Signage starting at just ₹400 ($5). Print and digital ready.',
    keywords:
      'poster design, social media poster design, flyer design, event poster designer, promotional poster, digital poster design, signage design',
    category: 'Marketing & Print',
    h1: 'Poster & Social Media Flyer Design',
    subtitle: 'Vibrant promotional posters and event flyers built to capture attention online and in print.',
    aiSummary:
      'Abridge Media Services creates custom Social Media Posters, event flyers, promotional banners, and large-format print posters starting at ₹400 ($5). Delivered in print-ready CMYK PDF and crisp social media dimensions with up to 3 design revisions, our posters help brands promote offers, events, and launches effectively.',
    startingPriceINR: '₹400',
    startingPriceUSD: '$5',
    priceNote: 'Social media posters start at ₹400 ($5); multi-size event/print kits available.',
    turnaround: '1–2 Business Days',
    revisions: 'Up to 3 design revisions included',
    deliverables: [
      { title: 'Social Media Posters', detail: 'Instagram, WhatsApp, Facebook, and LinkedIn promotional graphics sized cleanly.' },
      { title: 'Event & Launch Flyers', detail: 'High-impact print flyers and posters for workshops, concerts, sales, and store openings.' },
      { title: 'Large Format Banners & Signage', detail: 'High-DPI scalable artwork prepared for standees, hoardings, and shop signage.' },
      { title: 'Restaurant & Offer Posters', detail: 'Mouth-watering food promos, discount announcements, and seasonal festival creatives.' },
    ],
    idealFor: ['Retail stores & restaurants', 'Events, concerts & workshops', 'Coaches, institutes & clinics', 'Social media product launches'],
    processSteps: [
      { step: '01', title: 'Share Offer & Size', detail: 'Send us your text details, logo, images, and where the poster will be used.' },
      { step: '02', title: 'Vibrant Visual Design', detail: 'We arrange typography, graphics, and colors for maximum instant readability.' },
      { step: '03', title: 'Print & Social Export', detail: 'Get ready-to-share digital images and press-ready PDF files.' },
    ],
    faqs: [
      {
        question: 'How much does a social media poster design cost?',
        answer: 'Social media poster design starts at ₹400 ($5) per poster, including up to 3 revisions.',
      },
      {
        question: 'Can I get the same poster formatted for both WhatsApp/Instagram and print?',
        answer: 'Yes! Let us know the target sizes when ordering and we can prepare both digital social ratios and print-ready CMYK PDFs.',
      },
      {
        question: 'Do you design promotional coupons and menu cards as well?',
        answer: 'Yes. Promotional coupons start at ₹500 and full restaurant menu card designs start at ₹3,000.',
      },
    ],
    relatedSlugs: ['/digital-marketing', '/brochure-design', '/thumbnail-design', '/graphic-design'],
    accentColor: 'rose',
  },
  {
    slug: '/book-design',
    shortName: 'Book Design',
    title: 'Professional Book Cover & E-Book Cover Design Services | Abridge Media Services',
    description:
      'Abridge Media Services creates genre-aligned book covers for independent authors, educators, and publishing houses. Print wrap, KDP, Notion Press & e-book ready.',
    keywords:
      'book design, book cover design, e-book cover design, Amazon KDP cover, Notion Press, Pothi, spine width, magazine design, cover page design',
    category: 'The Plus',
    h1: 'Professional Book Cover & E-Book Cover Design Services',
    subtitle: 'Abridge Media Services creates genre-aligned book covers for independent authors, educators, and publishing houses. We deliver complete front, spine, and back cover layouts formatted for both digital e-book platforms and commercial print-on-demand distribution.',
    aiSummary:
      'Abridge Media Services creates genre-aligned book covers for independent authors, educators, and publishing houses. We deliver complete front, spine, and back cover layouts formatted for both digital e-book platforms and commercial print-on-demand distribution. Cover Page designs start at ₹400 ($5) and Magazine layouts start at ₹750 ($10).',
    startingPriceINR: '₹400 – ₹750',
    startingPriceUSD: '$5 – $10',
    priceNote: 'Cover Page Design from ₹400 ($5); Magazine & editorial layouts from ₹750 ($10).',
    turnaround: '2–5 Business Days',
    revisions: 'Up to 3 design revisions included',
    deliverables: [
      { title: 'Print & E-Book Cover Design', detail: 'Front cover, exact spine width calculation, and back cover wrap for KDP, Notion Press, Pothi & print.' },
      { title: 'Magazine & Editorial Layouts', detail: 'Clean multi-column typography, image grids, and structured page spreads.' },
      { title: '3D Promotional Mockups', detail: 'Realistic book and magazine mockups to help you market your launch online.' },
      { title: 'Press-Ready & Digital Files', detail: 'High-resolution 300 DPI CMYK PDF with bleed plus RGB JPEG/PNG for e-books.' },
    ],
    idealFor: ['Self-published & KDP authors', 'Corporate & lifestyle magazines', 'E-book creators & educators', 'Academic & annual reports'],
    processSteps: [
      { step: '01', title: 'Manuscript & Genre Brief', detail: 'Share your book title, subtitle, author, blurb, genre, page count, and trim size.' },
      { step: '02', title: 'Cover & Spread Crafting', detail: 'We design standout cover art and clean editorial typography.' },
      { step: '03', title: 'Print-Ready Wrap Delivery', detail: 'Final 300 DPI CMYK PDFs delivered with exact bleed, margins, and spine sizing.' },
    ],
    faqs: [
      {
        question: 'Do you design covers for both e-books and print books?',
        answer:
          'Yes, Abridge Media Services designs covers for Amazon Kindle (KDP), Notion Press, Pothi, and offset print editions. Print covers include exact spine width calculations based on your final page count and paper type, along with 300 DPI CMYK print-ready PDFs.',
      },
      {
        question: 'What information is needed to start a book cover design?',
        answer:
          'To begin your book cover design, share your book title, subtitle, author name, genre, target audience, back-cover blurb, and final page count with trim size if you need a full print wrap.',
      },
      {
        question: 'Can you create 3D book mockups for social media promotion?',
        answer: 'Yes, we can include 3D mockup visuals and launch posters so you can promote your book immediately.',
      },
    ],
    relatedSlugs: ['/brochure-design', '/graphic-design', '/poster-design', '/packaging-design'],
    accentColor: 'violet',
  },
  {
    slug: '/brochure-design',
    shortName: 'Brochure Design',
    title: 'Brochure, Catalogue & Company Profile Design | Abridge Media',
    description:
      'High-impact A4 Brochure Design (₹1,000), Company Profiles (₹750), Product Catalogues (₹750) & Flyer Design. Print-ready & digital PDF.',
    keywords:
      'brochure design, A4 brochure design, company profile design, catalogue design, flyer design, tri-fold brochure, corporate brochure designer',
    category: 'Marketing & Print',
    h1: 'Brochure, Catalogue & Profile Design',
    subtitle: 'Structured, persuasive print and digital brochures that showcase your products and services.',
    aiSummary:
      'Abridge Media Services designs professional A4 Brochures (starting at ₹1,000), Company Profiles (₹750), Product Catalogues (₹750), and Flyers for businesses worldwide. Delivered as both high-resolution 300 DPI print-ready PDFs and lightweight shareable digital PDFs for WhatsApp and email with up to 3 revisions.',
    startingPriceINR: '₹750 – ₹1,000',
    startingPriceUSD: '$10 – $15',
    priceNote: 'Company Profile & Catalogue from ₹750; A4 Brochure Design from ₹1,000.',
    turnaround: '2–5 Business Days',
    revisions: 'Up to 3 design revisions included',
    deliverables: [
      { title: 'Bi-Fold, Tri-Fold & A4 Brochures', detail: 'Clean layout hierarchy that guides readers effortlessly through your offerings.' },
      { title: 'Company Profiles & Pitch Decks', detail: 'Executive corporate profiles designed for B2B clients, tenders, and investors.' },
      { title: 'Product Catalogues', detail: 'Organized product grids with specs, SKUs, and pricing tables for sales teams.' },
      { title: 'Dual Print & WhatsApp PDFs', detail: '300 DPI CMYK print PDF plus compressed web PDF for instant WhatsApp/email sharing.' },
    ],
    idealFor: ['Manufacturing & B2B companies', 'Real estate, healthcare & education', 'Exporters & trade show exhibitors', 'Service agencies pitching clients'],
    processSteps: [
      { step: '01', title: 'Content & Page Structuring', detail: 'We organize your text, product photos, and contact details across clear spreads.' },
      { step: '02', title: 'Editorial Layout Design', detail: 'Custom grids, icons, infographics, and brand-aligned typography.' },
      { step: '03', title: 'Print & Digital Export', detail: 'Press-ready PDFs with crop/bleed marks plus a web-optimized PDF.' },
    ],
    faqs: [
      {
        question: 'How much does a brochure or company profile design cost?',
        answer: 'Company Profiles and Catalogues start at ₹750, and A4 Brochures start at ₹1,000, with final quotes based on total page count.',
      },
      {
        question: 'Will the brochure work for both printing and sharing on WhatsApp?',
        answer: 'Yes! We provide a high-resolution CMYK PDF for commercial printing and a lightweight RGB PDF for fast sharing on WhatsApp and email.',
      },
      {
        question: 'Who provides the text and product images for the brochure?',
        answer: 'Content and product images are provided by the client, and our team handles layout, visual hierarchy, icons, and finishing.',
      },
    ],
    relatedSlugs: ['/visiting-card-design', '/poster-design', '/book-design', '/graphic-design'],
    accentColor: 'rose',
  },
  {
    slug: '/visiting-card-design',
    shortName: 'Visiting Card Design',
    title: 'Visiting Card & Business Stationery Design (₹400) | Abridge Media',
    description:
      'Professional Visiting Card Design, Business Cards & Letterhead Design starting at ₹400 ($5). Clean, memorable print-ready layouts.',
    keywords:
      'visiting card design, business card design, letterhead design, corporate stationery design, visiting card maker, double sided business card',
    category: 'Brand Foundation',
    h1: 'Visiting Card & Stationery Design',
    subtitle: 'Make a lasting first impression with sharp visiting cards, letterheads, and corporate stationery.',
    aiSummary:
      'Abridge Media Services designs custom Visiting Cards (Business Cards) and Letterheads starting at ₹400 ($5). Every single- or double-sided visiting card includes modern typography, QR code integration if needed, exact print bleeds, and 300 DPI CMYK print-ready files with up to 3 design revisions.',
    startingPriceINR: '₹400',
    startingPriceUSD: '$5',
    priceNote: 'Business / Visiting Cards from ₹400 ($5) | Letterhead Design from ₹400 ($5).',
    turnaround: '1–2 Business Days',
    revisions: 'Up to 3 design revisions included',
    deliverables: [
      { title: 'Single & Double-Sided Visiting Cards', detail: 'Clean standard 3.5"×2" layouts tailored to your brand logo and colors.' },
      { title: 'QR Code & Clickable Digital Cards', detail: 'Optional scannable QR codes linking directly to your website, WhatsApp, or location.' },
      { title: 'Corporate Letterheads & Envelopes', detail: 'Matching A4 letterhead templates in print-ready PDF and editable formats.' },
      { title: 'Press-Ready CMYK Files', detail: 'Exact bleed and trim margins ready for any local or online print vendor.' },
    ],
    idealFor: ['Founders, doctors & consultants', 'Sales teams & field executives', 'Retailers, salons & local businesses', 'New companies launching branding'],
    processSteps: [
      { step: '01', title: 'Details & Logo Intake', detail: 'Share your logo, name, title, phone, email, website, and preferred style.' },
      { step: '02', title: 'Card & Stationery Layout', detail: 'We craft clean front-and-back designs with balanced spacing and readability.' },
      { step: '03', title: 'Print-Ready Delivery', detail: 'Receive CMYK PDF and high-res PNG files ready for immediate printing.' },
    ],
    faqs: [
      {
        question: 'How much does visiting card design cost?',
        answer: 'Custom Visiting Card (Business Card) design starts at ₹400 ($5), and matching Letterhead design also starts at ₹400 ($5).',
      },
      {
        question: 'Can you add a QR code for WhatsApp or our website on the visiting card?',
        answer: 'Yes, we can generate and integrate a clean scannable QR code on the card at no extra hassle.',
      },
      {
        question: 'What file format will my printer need?',
        answer: 'We deliver 300 DPI CMYK print-ready PDF files with proper bleed margins that work with all commercial printers.',
      },
    ],
    relatedSlugs: ['/logo-design', '/brochure-design', '/graphic-design', '/packaging-design'],
    accentColor: 'teal',
  },
  {
    slug: '/packaging-design',
    shortName: 'Packaging Design',
    title: 'Product Packaging & Brand Identity Design Services | Abridge Media',
    description:
      'Abridge Media Services creates print-ready product packaging, labels, logos, and brand collateral that stand out on retail shelves and e-commerce marketplaces.',
    keywords:
      'packaging design, product packaging designer, brand identity design, stand-up pouches, food spice packaging, rigid boxes, bottle labels, cosmetic cartons, dielines',
    category: 'The Plus',
    h1: 'Product Packaging & Brand Identity Design Services',
    subtitle: 'Abridge Media Services creates print-ready product packaging, labels, logos, and brand collateral that stand out on retail shelves and e-commerce marketplaces. We combine market research with high-impact visual design to turn first-time viewers into loyal customers.',
    aiSummary:
      'Abridge Media Services creates print-ready product packaging, labels, logos, and brand collateral that stand out on retail shelves and e-commerce marketplaces. We combine market research with high-impact visual design to turn first-time viewers into loyal customers. Product packaging starts from ₹2,000 ($25) and includes print-ready CMYK vector dielines.',
    startingPriceINR: '₹2,000',
    startingPriceUSD: '$25',
    priceNote: 'Product Packaging from ₹2,000; Menu Cards from ₹3,000; custom quotes for labels & merch.',
    turnaround: '3–7 Business Days',
    revisions: 'Up to 3 design revisions included',
    deliverables: [
      { title: 'Product Box & Die-Line Artwork', detail: 'Accurate packaging wraps aligned to your manufacturer die-line measurements with bleed margins.' },
      { title: 'Stand-Up Pouches, Bottle & Jar Labels', detail: 'Food, spice, cosmetic, and D2C labels with compliant nutritional and barcode panels.' },
      { title: 'Cap & T-Shirt Merch Design', detail: 'Custom apparel graphics and wearable brand identity prepared for screen or DTF print.' },
      { title: 'Menu Cards & Retail Signage', detail: 'Appetizing restaurant menus and in-store display graphics.' },
    ],
    idealFor: ['D2C food, cosmetic & FMCG brands', 'Restaurants, cafes & cloud kitchens', 'Events & corporate merchandise teams', 'Amazon & Flipkart private-label sellers'],
    processSteps: [
      { step: '01', title: 'Dimensions & Die-Line Setup', detail: 'Share your box/label dimensions, mandatory product copy, and brand assets.' },
      { step: '02', title: 'Packaging & Label Design', detail: 'We craft shelf-stopping visuals and clear typography for physical surfaces.' },
      { step: '03', title: 'Production Files & 3D Mockups', detail: 'Exported in press-ready CMYK AI/EPS/PDF vector files plus digital mockups.' },
    ],
    faqs: [
      {
        question: 'What types of product packaging design do you offer?',
        answer:
          'Abridge Media Services designs custom stand-up pouches, food and spice packaging, rigid boxes, bottle labels, cosmetic cartons, and e-commerce shipping sleeves. We deliver complete print-ready vector files with accurate dielines, bleed margins, and CMYK color profiles ready for commercial printing.',
      },
      {
        question: 'What files do I receive after my logo and packaging design is complete?',
        answer:
          'You receive full commercial ownership along with print-ready AI, EPS, PDF, and SVG vector source files, plus high-resolution PNG and JPEG files for digital and e-commerce use. All packaging files include accurate dieline templates and color specifications for your printing vendor.',
      },
      {
        question: 'How does professional packaging design increase product sales?',
        answer:
          'Shoppers take less than 7 seconds to judge a product on a retail shelf or online listing. Clear typography, compliant nutritional or product labeling, and distinctive brand colors build immediate trust, justify premium pricing, and drive higher click-through and repeat purchase rates.',
      },
    ],
    relatedSlugs: ['/logo-design', '/book-design', '/graphic-design', '/poster-design'],
    accentColor: 'violet',
  },
];

export const WORK_SAMPLES_DATA = [
  {
    url: 'https://lh3.googleusercontent.com/d/1X6lY_p4EaxqowVueH6KwVuWGzI5Flbel',
    title: 'Brand Identity & Graphic Design',
    category: 'Logo & Brand Foundation',
    alt: 'Custom brand identity and graphic design showcase by Abridge Media Services',
    link: '/logo-design',
  },
  {
    url: 'https://lh3.googleusercontent.com/d/1T0YsWyZS-6FIrEBEMNYOSO0Jqpm83yUx',
    title: 'Digital Marketing Poster Creative',
    category: 'Poster & Social Media Design',
    alt: 'Promotional social media poster design for digital marketing campaign',
    link: '/poster-design',
  },
  {
    url: 'https://lh3.googleusercontent.com/d/1IkXqz6tt12PBxt81VIC0qK16_Fe5fmBV',
    title: 'Print & Brochure Layout Design',
    category: 'Brochure & Print Media',
    alt: 'Corporate brochure and print marketing layout designed by Abridge Media Services',
    link: '/brochure-design',
  },
  {
    url: 'https://lh3.googleusercontent.com/d/1Ni5D3PWUFUExgVTLqFJVxtkVI501mvHT',
    title: 'Visual Campaign & Ad Creative',
    category: 'Digital Marketing',
    alt: 'High-impact digital advertisement graphic and marketing creative',
    link: '/digital-marketing',
  },
  {
    url: 'https://lh3.googleusercontent.com/d/1nAHG5FpSum3whfmZrwttTahXnuRIPvVw',
    title: 'Product & Packaging Visuals',
    category: 'Packaging & Label Design',
    alt: 'Custom product packaging and brand merchandise visual design',
    link: '/packaging-design',
  },
  {
    url: 'https://lh3.googleusercontent.com/d/18B6H4KHKiOiFVAPw2I5Ci6yGmKb8ZR48',
    title: 'Editorial & Book Cover Showcase',
    category: 'Book & Magazine Design',
    alt: 'Editorial cover page and book design sample by Abridge Media Services',
    link: '/book-design',
  },
  {
    url: 'https://lh3.googleusercontent.com/d/1Fr2GAcnOuYvecsFGIlZbDJD0H0YkgUYC',
    title: 'Stationery & Visiting Card Design',
    category: 'Visiting Card & Identity',
    alt: 'Business visiting card and corporate stationery graphic design',
    link: '/visiting-card-design',
  },
  {
    url: 'https://lh3.googleusercontent.com/d/1R0X2vSQ3ldGNx12Ari3Oa3epoA0_IH1g',
    title: 'Website Banner & Thumbnail Art',
    category: 'Website & Thumbnail Design',
    alt: 'High-CTR YouTube thumbnail and website visual design showcase',
    link: '/thumbnail-design',
  },
];

export interface PortfolioCaseStudy {
  position: number;
  schemaName: string;
  title: string;
  websiteLabel: string;
  websiteUrl: string;
  industry: string;
  region: string;
  challenge: string;
  solution: string;
  deliverables: string;
  businessImpact: string;
  serviceLinks: { label: string; to: string }[];
}

export const PORTFOLIO_CASE_STUDIES: PortfolioCaseStudy[] = [
  {
    position: 1,
    schemaName: 'Mind Park Foundation (Manodyan)',
    title: '1. Manodyan | Mind Park Foundation – Mental Wellness & Active Aging Website',
    websiteLabel: 'mindparkfoundation.com',
    websiteUrl: 'https://mindparkfoundation.com',
    industry: 'Healthcare & Mental Wellness',
    region: 'India',
    challenge:
      'Mind Park Foundation needed a warm, accessible, and trustworthy digital presence to introduce Manodyan, its urban sanctuary dedicated to mental wellness and active aging. The site required a calm user experience that clearly communicated programs to seniors, caregivers, and families.',
    solution:
      'Abridge Media Services designed a serene, mobile-responsive website with clear program navigation, wellness resource sections, and simplified inquiry workflows tailored for visitors of all age groups.',
    deliverables:
      'Custom UI/UX design, responsive web development, database integration, and on-page SEO setup.',
    businessImpact:
      'Established an authoritative online platform that builds immediate trust with families and streamlines community program inquiries.',
    serviceLinks: [
      { label: 'Website Design', to: '/website-design' },
      { label: 'Graphic Design', to: '/graphic-design' },
    ],
  },
  {
    position: 2,
    schemaName: 'Dr. Amit Deshpande – Urologist Nagpur',
    title: '2. Dr. Amit Deshpande – Healthcare & Urology Practice Website',
    websiteLabel: 'urologistnagpur.com',
    websiteUrl: 'https://urologistnagpur.com',
    industry: 'Medical & Healthcare',
    region: 'Nagpur, India',
    challenge:
      'Consultant Urologist, Urosurgeon, and Andrologist Dr. Amit Deshpande required a comprehensive medical portal to educate patients on complex urological procedures while making clinic appointments and urgent contact effortless.',
    solution:
      'Abridge Media Services built an informative, patient-friendly healthcare website featuring dedicated patient education guides (PCNL, URS, TURP, Cystoscopy, Uroflowmetry), procedure explanations, verified patient testimonials, and one-click WhatsApp and phone appointment actions.',
    deliverables:
      'Multi-page medical portal, patient education resource architecture, click-to-call/WhatsApp integration, and local medical SEO.',
    businessImpact:
      'Improved patient awareness prior to consultations and increased direct appointment inquiries from local and regional patients.',
    serviceLinks: [
      { label: 'Website Design', to: '/website-design' },
      { label: 'Digital Marketing', to: '/digital-marketing' },
    ],
  },
  {
    position: 3,
    schemaName: 'Cars31.in Used Car Portal',
    title: '3. Cars31.in – Used Car Buy & Sell Web Portal',
    websiteLabel: 'cars31.in',
    websiteUrl: 'https://cars31.in',
    industry: 'Automotive & Classifieds',
    region: 'India',
    challenge:
      'Cars31 needed a fast, easy-to-manage automotive marketplace where buyers could browse pre-owned vehicles effortlessly and sellers could submit car details without technical friction.',
    solution:
      'Abridge Media Services engineered a responsive used-car listing portal equipped with structured vehicle inventory displays, buyer/seller lead capture forms, and a custom admin control panel for instant stock updates.',
    deliverables:
      'Full-stack web portal, custom inventory admin dashboard, mobile-first browsing UI, and lead routing forms.',
    businessImpact:
      'Enabled rapid inventory publishing by the dealership team and streamlined direct buyer-seller inquiries.',
    serviceLinks: [
      { label: 'Website Design', to: '/website-design' },
      { label: 'Digital Marketing', to: '/digital-marketing' },
    ],
  },
  {
    position: 4,
    schemaName: 'Reva Residency Boutique Serviced Apartments',
    title: '4. Reva Residency – Boutique Serviced Apartment Website',
    websiteLabel: 'revastays.in',
    websiteUrl: 'https://revastays.in',
    industry: 'Hospitality & Serviced Stays',
    region: 'Nagpur, India',
    challenge:
      'Reva Residency wanted to reduce dependence on third-party hotel aggregators by showcasing its boutique serviced apartments in Ambazari, Nagpur, and capturing direct room bookings online.',
    solution:
      'Abridge Media Services created a visually inviting hospitality website highlighting room amenities, location advantages, high-resolution property galleries, and friction-free direct booking inquiry channels.',
    deliverables:
      'Hospitality website design, mobile-first gallery layout, direct inquiry integration, and local search optimization.',
    businessImpact:
      'Boosted direct guest inquiries for short-term and corporate stays while strengthening local search visibility.',
    serviceLinks: [
      { label: 'Website Design', to: '/website-design' },
      { label: 'Brochure Design', to: '/brochure-design' },
    ],
  },
  {
    position: 5,
    schemaName: 'Zest and Zayka',
    title: '5. Zest and Zayka – Cafe, Mocktails & Street Food Brand Website',
    websiteLabel: 'zestandzayka.in',
    websiteUrl: 'https://zestandzayka.in',
    industry: 'Food & Beverage / Quick-Service Cafe',
    region: 'India',
    challenge:
      'Zest and Zayka needed a vibrant digital menu and brand showcase to highlight its wide variety of mocktails, fresh juices, chaat, snacks, fruit kulfi, and fruit shots to local diners and event customers.',
    solution:
      'Abridge Media Services designed an appetizing, mobile-optimized F&B website with categorized digital menu sections, bold visual presentation, and fast loading speeds for customers browsing on smartphones.',
    deliverables:
      'Custom F&B brand website, interactive digital menu showcase, mobile UX optimization, and local SEO setup.',
    businessImpact:
      'Enhanced brand appeal for walk-in and catering customers with a modern, shareable online menu.',
    serviceLinks: [
      { label: 'Website Design', to: '/website-design' },
      { label: 'Packaging Design', to: '/packaging-design' },
    ],
  },
  {
    position: 6,
    schemaName: 'Malhar Industries',
    title: '6. Malhar Industries – Industrial Manufacturing & B2B Lead Generation Website',
    websiteLabel: 'malharindustries.com',
    websiteUrl: 'https://malharindustries.com',
    industry: 'Industrial Manufacturing & Engineering',
    region: 'India',
    challenge:
      'Malhar Industries required a professional B2B corporate website capable of presenting its industrial capabilities clearly and converting search traffic from Google Ads into qualified commercial leads.',
    solution:
      'Abridge Media Services built a structured B2B website backed by cloud database architecture, clear product and capability pages, and conversion-tracked inquiry forms paired with targeted Google Ads campaigns.',
    deliverables:
      'Corporate B2B website, backend database setup, Google Tag Manager conversion tracking, and Google Ads integration.',
    businessImpact:
      'Created a reliable digital lead-generation funnel connecting industrial buyers directly with the sales team.',
    serviceLinks: [
      { label: 'Website Design', to: '/website-design' },
      { label: 'Digital Marketing', to: '/digital-marketing' },
    ],
  },
  {
    position: 7,
    schemaName: 'S.A.M. Tutorials Nagpur',
    title: '7. S.A.M. Tutorials – Academic & Competitive Exam Coaching Website',
    websiteLabel: 'samtutorials.in',
    websiteUrl: 'https://samtutorials.in',
    industry: 'Education & Test Preparation',
    region: 'Nagpur, India',
    challenge:
      'S.A.M. Tutorials needed an authoritative educational website to attract students and parents searching for C.B.S.E., I.C.S.E., and JEE/NEET coaching programs.',
    solution:
      'Abridge Media Services developed an organized academic portal detailing course tracks, batch highlights, faculty strengths, and streamlined admission inquiry forms optimized for mobile parents and students.',
    deliverables:
      'Education portal design, course architecture, admission lead forms, and local academic SEO.',
    businessImpact:
      'Positioned the institute prominently in local search results and simplified student enrollment inquiries.',
    serviceLinks: [
      { label: 'Website Design', to: '/website-design' },
      { label: 'Poster Design', to: '/poster-design' },
    ],
  },
  {
    position: 8,
    schemaName: 'The Risk – Amit Kavishwar Score Trading System',
    title: '8. The Risk (Amit Kavishwar) – Financial Education & Index Trading Website',
    websiteLabel: 'therisk.in',
    websiteUrl: 'https://therisk.in',
    industry: 'FinTech & Stock Market Education',
    region: 'India',
    challenge:
      'Financial educator Amit Kavishwar needed a high-converting landing experience to present the Score Trading System and enroll learners in a structured 2-month index trading mastery program.',
    solution:
      'Abridge Media Services crafted a high-trust conversion-focused website breaking down the curriculum, mentor credentials, program outcomes, and direct enrollment inquiry flows.',
    deliverables:
      'Conversion-oriented landing architecture, mobile-first course showcase, WhatsApp/inquiry integration, and SEO metadata.',
    businessImpact:
      'Increased course clarity for prospective traders and streamlined direct cohort registration inquiries.',
    serviceLinks: [
      { label: 'Website Design', to: '/website-design' },
      { label: 'Thumbnail Design', to: '/thumbnail-design' },
    ],
  },
  {
    position: 9,
    schemaName: "Oliveir's Premium Kulfi & Ice Cream Australia",
    title: "9. Oliveir's – Gourmet Kulfi & Ice Cream Brand Website",
    websiteLabel: 'oliveirs.com.au',
    websiteUrl: 'https://oliveirs.com.au',
    industry: 'International Food & Beverage',
    region: 'Australia',
    challenge:
      "Australian gourmet dessert brand Oliveir's needed an international-grade website to showcase its authentic kulfi and ice cream flavors while capturing retail, wholesale, and catering inquiries across Australia.",
    solution:
      'Abridge Media Services designed a visually rich, responsive F&B brand website highlighting flavor collections, brand storytelling, retail availability, and streamlined wholesale contact channels.',
    deliverables:
      'Custom international brand website, mobile-first flavor showcase, high-speed image optimization, and on-page SEO.',
    businessImpact:
      'Strengthened brand positioning in the Australian market and provided a polished storefront for retail and stockist inquiries.',
    serviceLinks: [
      { label: 'Website Design', to: '/website-design' },
      { label: 'Packaging Design', to: '/packaging-design' },
    ],
  },
  {
    position: 10,
    schemaName: 'Varma Real Estate',
    title: '10. Varma Real Estate – Property Listing & Advisory Website',
    websiteLabel: 'varmarealestate.co',
    websiteUrl: 'https://varmarealestate.co',
    industry: 'Real Estate & Property Advisory',
    region: 'India',
    challenge:
      'Varma Real Estate required a modern property advisory website where residential and commercial buyers could explore featured listings and connect directly with property consultants on mobile devices.',
    solution:
      'Abridge Media Services engineered a clean, structured real estate portal featuring categorized property showcases, neighborhood highlights, and instant WhatsApp and contact-form lead capture.',
    deliverables:
      'Real estate web platform, mobile-responsive property presentation, click-to-call/WhatsApp workflows, and SEO schema setup.',
    businessImpact:
      'Improved credibility with property buyers and investors while capturing direct site-visit and consultation requests.',
    serviceLinks: [
      { label: 'Website Design', to: '/website-design' },
      { label: 'Brochure Design', to: '/brochure-design' },
    ],
  },
];

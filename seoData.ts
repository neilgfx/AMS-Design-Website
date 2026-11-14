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
  baseUrl: 'https://ais-pre-omnwiceavgotm7jvxe2fav-394046517034.asia-southeast1.run.app',
  phone: '+919881103444',
  phoneDisplay: '+91 9881103444',
  whatsappUrl: 'https://wa.me/919881103444',
  email: '004neil@gmail.com',
  location: 'Serving Clients Globally',
  logo: 'https://scontent-bom5-2.xx.fbcdn.net/v/t39.30808-6/626778663_122102633553247608_6348987989825248532_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nEkDCMHhGfMQ7kNvwFRnWeq&_nc_oc=AdlbetXYtWnY3XMqnyPFuLO6nCJ2LK1JfHIJEML9VkD8FuGwYuhH-1TSaIGyzq3fPxI&_nc_zt=23&_nc_ht=scontent-bom5-2.xx&_nc_gid=ffd4-Rt2poYsEMVgYtv74Q&oh=00_AfsbfeFxd0dLleA_Q3wbFWn8d1HYLbfUKs2Urz8-pQsqUw&oe=698E1B91',
  ogImage: 'https://lh3.googleusercontent.com/d/1X6lY_p4EaxqowVueH6KwVuWGzI5Flbel',
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
    title: 'Portfolio & Design Work Samples | Abridge Media Services',
    description:
      'Explore Abridge Media Services portfolio featuring custom logo design, poster design, brochure layouts, website UI/UX, book covers, and brand identity work.',
    keywords:
      'graphic design portfolio, logo design samples, poster design showcase, brochure design portfolio, website design work, Abridge Media Services work',
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
      'Start your website, branding, graphic design, or digital marketing project with Abridge Media Services. Call or WhatsApp +91 9881103444 or email 004neil@gmail.com.',
    keywords:
      'contact Abridge Media Services, hire website designer, hire graphic designer, request design quote, +91 9881103444',
    h1: 'Get In Touch',
  },
};

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: '/website-design',
    shortName: 'Website Design',
    title: 'Website Design & Development Services | Abridge Media Services',
    description:
      'Custom responsive Website Design, UI/UX, Business Websites (₹16,000+), E-commerce Stores (₹45,000) & HTML Conversion built for speed and Google SEO.',
    keywords:
      'website design, website development, UI UX design, business website design, ecommerce website development, HTML conversion, web banner design, SEO friendly website',
    category: 'Digital Experience',
    h1: 'Website Design & Development Services',
    subtitle: 'Fast, responsive, SEO-ready websites engineered to convert visitors into customers.',
    aiSummary:
      'Abridge Media Services designs and develops custom, mobile-responsive, SEO-friendly websites for startups and growing businesses worldwide. Offerings include Template Websites starting at ₹3,000 ($35), 5–7 page Standard Business Websites from ₹16,000 ($182), full E-Commerce Stores with payment gateways from ₹45,000 ($550), UI/UX layouts, and clean HTML conversion.',
    startingPriceINR: '₹3,000 – ₹45,000',
    startingPriceUSD: '$35 – $550',
    priceNote: 'Template landing pages from ₹3,000; 5–7 page business sites from ₹16,000; E-commerce from ₹45,000.',
    turnaround: '5–14 Business Days',
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
        question: 'How much does website design cost at Abridge Media Services?',
        answer: 'Template websites start at ₹3,000 ($35), custom 5–7 page Standard Websites range from ₹16,000 to ₹22,000 ($182–$250), and complete E-commerce websites start at ₹45,000 ($550).',
      },
      {
        question: 'Are your websites mobile-friendly and Google SEO ready?',
        answer: 'Yes. Every website is built mobile-first with clean semantic HTML, fast loading performance, proper heading structure, meta tags, and Schema markup for search engines.',
      },
      {
        question: 'How long does it take to build a business website?',
        answer: 'Template landing pages typically take 3–5 business days, while custom 5–7 page business websites and e-commerce builds take 7–14 business days once content and images are provided.',
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
    title: 'Digital Marketing & Ad Creative Services | Abridge Media Services',
    description:
      'Strategic Digital Marketing creatives, social media graphics, high-converting ad designs, presentations, and online campaign visuals to grow your brand.',
    keywords:
      'digital marketing, social media marketing graphics, ad creative design, online graphic creation, social media poster design, campaign creatives, presentation design',
    category: 'Marketing & Print',
    h1: 'Digital Marketing & Creative Campaigns',
    subtitle: 'Scroll-stopping ad creatives, social media visuals, and campaign assets built for engagement.',
    aiSummary:
      'Abridge Media Services helps businesses grow online with strategic digital marketing design and campaign creatives starting at ₹400 ($5). We craft high-converting social media posts, performance ad creatives, website banners, high-CTR video thumbnails, coupons, and investor/sales presentation decks tailored to maximize audience reach and clicks.',
    startingPriceINR: '₹400',
    startingPriceUSD: '$5',
    priceNote: 'Social media posters from ₹400; website banners & promotional coupons from ₹500.',
    turnaround: '1–3 Business Days',
    revisions: 'Up to 3 design revisions included',
    deliverables: [
      { title: 'Social Media Graphics', detail: 'Platform-sized posts, carousels, and stories for Instagram, LinkedIn, Facebook, and X.' },
      { title: 'Advertisement Creative Design', detail: 'Conversion-focused static ad creatives crafted for Meta Ads, Google Display, and campaigns.' },
      { title: 'Promotional Banners & Coupons', detail: 'Website hero banners, seasonal sale creatives, and trackable digital discount coupons.' },
      { title: 'Presentation Decks', detail: 'Persuasive sales decks and company profiles that communicate your value clearly.' },
    ],
    idealFor: ['Brands running Meta & Google Ads', 'Businesses growing social channels', 'Coaches, creators & SaaS teams', 'E-commerce seasonal campaigns'],
    processSteps: [
      { step: '01', title: 'Audience & Offer Alignment', detail: 'We clarify your campaign goal, target audience, and primary call-to-action.' },
      { step: '02', title: 'High-Impact Visual Design', detail: 'Bold typography, visual hierarchy, and brand consistency built for mobile feeds.' },
      { step: '03', title: 'Multi-Format Delivery', detail: 'Exported in crisp square, vertical, and landscape sizes ready for immediate publishing.' },
    ],
    faqs: [
      {
        question: 'How do your digital marketing creatives improve campaign results?',
        answer: 'We design with clear visual hierarchy, strong contrast, and focused calls-to-action so your ads and social posts capture attention quickly and improve click-through rates.',
      },
      {
        question: 'Can I order a monthly bundle of social media posters and ad creatives?',
        answer: 'Yes. You can order individual creatives starting at ₹400 or request a custom monthly package via our Contact page.',
      },
      {
        question: 'Do you also design website banners and thumbnails for campaigns?',
        answer: 'Yes, we design coordinated website banners (₹500) and video thumbnails so your entire funnel shares one cohesive look.',
      },
    ],
    relatedSlugs: ['/poster-design', '/thumbnail-design', '/website-design', '/brochure-design'],
    accentColor: 'rose',
  },
  {
    slug: '/logo-design',
    shortName: 'Logo Design',
    title: 'Logo Design & Brand Identity Packages | Abridge Media Services',
    description:
      'Memorable Logo Design & Brand Style Guides. Starter kit ₹3,000 ($50) with 2 concepts, or Best Buy ₹5,000 ($75) with 5 concepts, style guide & social kit.',
    keywords:
      'logo design, custom logo designer, brand identity design, brand style guide, startup logo package, business logo design India, vector logo',
    category: 'Brand Foundation',
    h1: 'Logo Design & Brand Identity',
    subtitle: 'Distinctive, timeless marks and complete brand style guides that make your business unforgettable.',
    aiSummary:
      'Abridge Media Services creates custom vector logos and full brand identity kits. Choose the Starter Logo Package at ₹3,000 ($50) with 2 concepts, print-ready vectors, and 3 revisions, or the Best Buy Package at ₹5,000 ($75) featuring 5 premium concepts, a complete Brand Style Guide, unlimited refinements, and a Social Media Pack.',
    startingPriceINR: '₹3,000',
    startingPriceUSD: '$50',
    priceNote: 'Starter Logo Package: ₹3,000 ($50) | Best Buy Pro Identity: ₹5,000 ($75).',
    turnaround: '3–6 Business Days',
    revisions: '3 revisions (Starter) / Unlimited refinements (Best Buy)',
    deliverables: [
      { title: 'Custom Vector Logo Concepts', detail: 'Original logo marks designed from scratch—never generic clip-art.' },
      { title: 'Brand Identity & Style Guide', detail: 'Color palettes (HEX/RGB/CMYK), typography rules, and clear logo usage guidelines.' },
      { title: 'Print & Web File Formats', detail: 'Scalable vector files (AI, EPS, SVG, PDF) plus transparent PNGs for digital use.' },
      { title: 'Social Media Branding Kit', detail: 'Profile pictures and cover banners sized for major platforms in our Best Buy package.' },
    ],
    idealFor: ['New startups & founders', 'Businesses undergoing a rebrand', 'E-commerce & D2C labels', 'Creators launching personal brands'],
    processSteps: [
      { step: '01', title: 'Brand Questionnaire', detail: 'We learn your industry, audience, values, and style preferences.' },
      { step: '02', title: 'Concept Exploration', detail: 'We craft 2 to 5 distinct logo directions with real-world mockups.' },
      { step: '03', title: 'Refinement & Vector Handover', detail: 'We polish your chosen mark and deliver all print, web, and source files.' },
    ],
    faqs: [
      {
        question: 'What is the difference between the Starter and Best Buy logo packages?',
        answer: 'The Starter package (₹3,000 / $50) includes 2 modern concepts, print-ready vectors, and 3 revisions. The Best Buy package (₹5,000 / $75) includes 5 concepts, a full Brand Identity Style Guide, unlimited refinements, and a Social Media Pack.',
      },
      {
        question: 'Will my logo scale cleanly for both websites and large banners?',
        answer: 'Yes. All logos are created as 100% scalable vector artwork so they stay sharp from favicons and visiting cards up to outdoor signage.',
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
    title: 'YouTube & Video Thumbnail Design Services | Abridge Media Services',
    description:
      'High-CTR YouTube Thumbnail Design and online video graphics built to boost clicks, watch time, and channel growth. Fast delivery by Abridge Media Services.',
    keywords:
      'thumbnail design, YouTube thumbnail designer, high CTR thumbnails, video thumbnail design, custom YouTube graphics, online graphic creation',
    category: 'Digital Experience',
    h1: 'YouTube & Video Thumbnail Design',
    subtitle: 'High-CTR thumbnails engineered with bold contrast, visual storytelling, and instant readability.',
    aiSummary:
      'Abridge Media Services designs high-click-through-rate (CTR) thumbnails for YouTube creators, podcasts, educators, and brand video channels. Each custom 1280x720 thumbnail combines crisp subject cutouts, expressive typography, and color psychology—starting from ₹400 ($5) with rapid turnaround so your videos stand out in search and suggested feeds.',
    startingPriceINR: '₹400',
    startingPriceUSD: '$5',
    priceNote: 'Single custom thumbnail from ₹400 ($5); volume creator retainers available.',
    turnaround: '24–48 Hours',
    revisions: 'Up to 3 design revisions included',
    deliverables: [
      { title: '1280×720 High-Res Thumbnails', detail: 'Crisp YouTube-compliant HD exports optimized for both mobile and desktop screens.' },
      { title: 'Click-Worthy Composition', detail: 'Strategic focal points, clean cutouts, facial expression enhancement, and depth.' },
      { title: 'Bold Title Typography', detail: 'Short, punchy, readable text overlays designed to complement your video title.' },
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
        question: 'Why does custom thumbnail design matter for YouTube?',
        answer: 'Your thumbnail is the biggest driver of Click-Through Rate (CTR). A clear, high-contrast visual hook gets more viewers to click when your video appears in search or home feeds.',
      },
      {
        question: 'How fast can you deliver a YouTube thumbnail?',
        answer: 'Most custom thumbnails are delivered within 24 to 48 hours, with up to 3 revisions included.',
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
    title: 'Book Cover, E-Book & Magazine Design | Abridge Media Services',
    description:
      'Professional Book Cover Design (₹400+), Magazine Layout (₹750+) & E-Book Design for authors and publishers. Print spine, Kindle & digital ready.',
    keywords:
      'book design, book cover design, ebook cover design, magazine design, publication layout, cover page design, Kindle cover designer',
    category: 'The Plus',
    h1: 'Book Cover & Magazine Design',
    subtitle: 'Compelling covers and editorial magazine layouts that give your publication shelf and screen appeal.',
    aiSummary:
      'Abridge Media Services crafts compelling Book Cover Designs, Cover Pages starting at ₹400 ($5), and multi-page Magazine layouts starting at ₹750 ($10) for independent authors, publishers, and brands. Every cover is tailored to your genre and formatted accurately for print (front, spine, back wrap) as well as Kindle and e-book stores.',
    startingPriceINR: '₹400 – ₹750',
    startingPriceUSD: '$5 – $10',
    priceNote: 'Cover Page Design from ₹400 ($5); Magazine & editorial layouts from ₹750 ($10).',
    turnaround: '2–5 Business Days',
    revisions: 'Up to 3 design revisions included',
    deliverables: [
      { title: 'Print & E-Book Cover Design', detail: 'Front cover, spine calculation, and back cover blurb layout ready for Amazon KDP and print.' },
      { title: 'Magazine & Editorial Layouts', detail: 'Clean multi-column typography, image grids, and structured page spreads.' },
      { title: '3D Promotional Mockups', detail: 'Realistic book and magazine mockups to help you market your launch online.' },
      { title: 'Press-Ready & Digital Files', detail: 'High-resolution 300 DPI CMYK PDF with bleed plus RGB JPEG/PNG for e-books.' },
    ],
    idealFor: ['Self-published & KDP authors', 'Corporate & lifestyle magazines', 'E-book creators & educators', 'Academic & annual reports'],
    processSteps: [
      { step: '01', title: 'Manuscript & Genre Brief', detail: 'Share your book title, blurb, page count/trim size, and tone references.' },
      { step: '02', title: 'Cover & Spread Crafting', detail: 'We design standout cover art and clean editorial typography.' },
      { step: '03', title: 'Print-Ready Wrap Delivery', detail: 'Final files delivered with exact bleed, margins, and spine sizing.' },
    ],
    faqs: [
      {
        question: 'Do you design both print book covers and Kindle/e-book covers?',
        answer: 'Yes. We provide e-book front covers as well as full print-ready wraps (front, spine, and back cover) formatted for Amazon KDP and offset printers.',
      },
      {
        question: 'What is the starting price for book cover and magazine design?',
        answer: 'Cover Page designs start at ₹400 ($5) and Magazine layouts start at ₹750 ($10), depending on page count and complexity.',
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
    title: 'Product Packaging, Label & Merchandise Design | Abridge Media',
    description:
      'Standout Product Packaging (₹2,000+), Label Design, Menu Cards (₹3,000) & Cap/T-Shirt Design. Shelf-ready die-line artwork by Abridge Media Services.',
    keywords:
      'packaging design, product packaging designer, label design, merchandise design, t-shirt design, cap printing design, menu card design',
    category: 'The Plus',
    h1: 'Product Packaging, Label & Merchandise Design',
    subtitle: 'Shelf-ready boxes, product labels, restaurant menus, and wearable brand merchandise.',
    aiSummary:
      'Abridge Media Services provides specialized Product Packaging Design starting at ₹2,000, Label Design, Menu Card Design starting at ₹3,000, and Cap & T-Shirt Designing and Printing. We deliver accurate die-line artwork, nutrition/ingredient label layouts, and 3D product mockups ready for manufacturing and e-commerce.',
    startingPriceINR: '₹2,000',
    startingPriceUSD: '$25',
    priceNote: 'Product Packaging from ₹2,000; Menu Cards from ₹3,000; custom quotes for labels & merch.',
    turnaround: '3–7 Business Days',
    revisions: 'Up to 3 design revisions included',
    deliverables: [
      { title: 'Product Box & Die-Line Artwork', detail: 'Accurate packaging wraps aligned to your manufacturer die-line measurements.' },
      { title: 'Bottle, Jar & Pouch Labels', detail: 'Clear, compliant front and back labels with barcode and ingredient panels.' },
      { title: 'Cap & T-Shirt Merch Design', detail: 'Custom apparel graphics and wearable brand identity prepared for screen or DTF print.' },
      { title: 'Menu Cards & Retail Signage', detail: 'Appetizing restaurant menus and in-store display graphics.' },
    ],
    idealFor: ['D2C food, cosmetic & FMCG brands', 'Restaurants, cafes & cloud kitchens', 'Events & corporate merchandise teams', 'Amazon & Flipkart private-label sellers'],
    processSteps: [
      { step: '01', title: 'Dimensions & Die-Line Setup', detail: 'Share your box/label dimensions, mandatory product copy, and brand assets.' },
      { step: '02', title: 'Packaging & Label Design', detail: 'We craft shelf-stopping visuals and clear typography for physical surfaces.' },
      { step: '03', title: 'Production Files & 3D Mockups', detail: 'Exported in press-ready vector PDF along with e-commerce preview mockups.' },
    ],
    faqs: [
      {
        question: 'How much does product packaging design cost?',
        answer: 'Product Packaging design starts at ₹2,000, and Menu Card design starts at ₹3,000, with up to 3 revisions included.',
      },
      {
        question: 'Do you work with custom box die-lines from our printer?',
        answer: 'Yes. Simply share the die-line template from your packaging manufacturer and we align all artwork, bleeds, and folds accurately.',
      },
      {
        question: 'Do you also design T-shirts and caps for company branding?',
        answer: 'Yes, under The Plus pillar we provide Cap & T-Shirt Designing and Printing artwork for events, staff uniforms, and brand merchandise.',
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

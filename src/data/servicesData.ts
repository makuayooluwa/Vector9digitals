import { ServiceArea, ApproachStep } from '../types';

export const SERVICES: ServiceArea[] = [
  {
    number: '01',
    title: 'Shopify & E-commerce',
    description: 'Shopify storefronts, redesigns, product experiences, collection architecture and e-commerce optimization.',
    deliverables: [
      'Custom Shopify 2.0 theme architecture',
      'Store redesigns & visual modernization',
      'High-converting product detail pages',
      'Collection structure & faceted filtering',
      'Checkout & cart optimization',
      'Shopify app integration & performance hygiene'
    ],
    tools: ['Shopify Liquid', 'Online Store 2.0', 'Metafields', 'Shop Pay', 'Klaviyo']
  },
  {
    number: '02',
    title: 'SEO',
    description: 'Product SEO, collection SEO, metadata, keyword optimization, content structure and technical SEO fundamentals.',
    deliverables: [
      'Product & collection metadata optimization',
      'Search-intent content creation & articles',
      'Google Merchant Center catalog syncing',
      'JSON-LD schema & structured data',
      'Sitemap, indexing & canonical setup',
      'Core Web Vitals & mobile crawlability'
    ],
    tools: ['Google Merchant Center', 'Smart SEO', 'Google Search Console', 'Ahrefs']
  },
  {
    number: '03',
    title: 'CRO',
    description: 'Conversion-focused UX, product-page optimization, customer journeys, calls to action and trust elements.',
    deliverables: [
      'Customer friction & drop-off audits',
      'Product page bundle & variant UX',
      'Trust badges & social proof placement',
      'Sticky checkout & quick-buy flows',
      'Mobile thumb-zone CTA optimization',
      'Order confirmation & post-purchase loops'
    ],
    tools: ['Heatmapping', 'Funnel Analytics', 'A/B Experimentation', 'Session Recording']
  },
  {
    number: '04',
    title: 'UI/UX Design',
    description: 'Websites, mobile applications and digital products designed around users and business goals.',
    deliverables: [
      'Design systems & typographic scale',
      'Asymmetric editorial agency layouts',
      'Interactive component prototyping',
      'Mobile-first e-commerce wireframing',
      'Accessibility & WCAG AA contrast compliance'
    ],
    tools: ['Figma', 'Design Systems', 'Interactive Prototyping', 'Tokens']
  },
  {
    number: '05',
    title: 'Web Development',
    description: 'Modern responsive websites and digital experiences brought to life with appropriate technologies.',
    deliverables: [
      'Clean, semantic TypeScript & modern frontend',
      'Ultra-fast asset delivery & lazy loading',
      'Accessible keyboard & screen-reader flows',
      'Responsive multi-breakpoint layouts',
      'Custom API & headless storefront integrations'
    ],
    tools: ['TypeScript', 'React', 'Tailwind CSS', 'Vite', 'GraphQL / REST']
  },
  {
    number: '06',
    title: 'E-commerce Marketing',
    description: 'Promotional experiences, landing pages, product positioning and digital growth support.',
    deliverables: [
      'High-impact campaign landing pages',
      'Catalog feed management & troubleshooting',
      'Seasonal promotional architecture',
      'Brand positioning & messaging frameworks',
      'Cross-sell & upsell merchandising strategies'
    ],
    tools: ['Google Shopping Feeds', 'Retention Flows', 'Campaign Landers']
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    name: 'DISCOVER',
    description: 'Understand the business, audience and problem.'
  },
  {
    number: '02',
    name: 'STRATEGIZE',
    description: 'Turn insights into a clear digital direction.'
  },
  {
    number: '03',
    name: 'DESIGN',
    description: 'Create an experience that looks great and works intuitively.'
  },
  {
    number: '04',
    name: 'BUILD',
    description: 'Bring the experience to life using the right technology.'
  },
  {
    number: '05',
    name: 'OPTIMIZE',
    description: 'Identify opportunities and continuously improve.'
  }
];

export const AGENCY_PRINCIPLES = [
  {
    title: 'DESIGN WITH PURPOSE',
    description: 'Every visual decision should support the user and the business.'
  },
  {
    title: 'THINK BEYOND THE SCREEN',
    description: 'We consider the complete customer journey, not just individual pages.'
  },
  {
    title: 'BUILD FOR GROWTH',
    description: 'The experience should be designed with improvement and scalability in mind.'
  }
];

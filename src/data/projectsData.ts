import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    slug: 'habitat-renewal',
    title: 'Habitat Renewal',
    category: 'E-commerce · Shopify · SEO · Content · Google Merchant Center',
    services: ['Shopify Optimization', 'SEO & Content', 'Product Visibility', 'Google Merchant Center', 'Collection Architecture'],
    description: 'Improving a furniture and home décor e-commerce experience through Shopify optimization, SEO, content creation and product visibility improvements.',
    headline: 'FROM STOREFRONT OPTIMIZATION TO PRODUCT VISIBILITY.',
    overview: 'Habitat Renewal is a furniture and home décor e-commerce store. The work focused on improving the digital storefront, product and collection SEO, content structure and Google Merchant Center product visibility.',
    liveUrl: 'https://habitatrenewal.com',
    dominant: true,
    heroImage: '/assets/projects/habitat-hero.jpg',
    metrics: {
      label: 'Google Merchant Center Approval',
      value: '0 → 57,679',
      subtext: '57,679 products approved in Google Merchant Center',
      highlight: true
    }
  },
  {
    id: '02',
    slug: 'gandm-tech',
    title: 'G & M Tech',
    category: 'Shopify · E-commerce Design · UI/UX · SEO · CRO',
    services: ['Shopify Storefront Design', 'UI/UX Design', 'Technical SEO', 'CRO Optimization', 'Product Experience'],
    description: 'Designing and optimizing a futuristic Shopify storefront for a technology-focused e-commerce brand.',
    headline: 'A FUTURISTIC SHOPIFY EXPERIENCE FOR A MODERN TECH BRAND.',
    overview: 'G & M Tech is a technology e-commerce store selling gadgets and electronic products. The project focused on creating a futuristic storefront while keeping the shopping experience clear, structured and conversion-focused.',
    liveUrl: 'https://gandmtech.com',
    dominant: false,
    heroImage: '/assets/projects/gm-hero.jpg',
    metrics: {
      label: 'SEO Score Improvement',
      value: '59 → 100',
      subtext: 'Product and storefront audit score optimization',
      highlight: false
    }
  }
];

export const HABITAT_ARTICLES = [
  {
    title: '10 Home Decor Trends You Need to Try This Year',
    focusKeyword: '10 Home Decor Trends',
    score: 100,
    type: 'Trend Guide'
  },
  {
    title: 'Top Living Room Furniture Ideas to Transform Your Space',
    focusKeyword: 'Top Living Room Furniture Ideas',
    score: 100,
    type: 'Room Inspiration'
  },
  {
    title: 'How to Choose the Perfect Bedroom Set for Your Home',
    focusKeyword: 'How to Choose the Perfect Bedroom Set',
    score: 100,
    type: 'Buying Guide'
  }
];

export const HABITAT_COLLECTIONS_SEO = [
  { title: 'Bedroom Furniture', focusKeyword: 'Bedroom Sets', score: 100 },
  { title: 'Living Room Furniture', focusKeyword: 'Living Room Furniture', score: 100 },
  { title: 'Dining Furniture', focusKeyword: 'Dining Room Sets', score: 100 },
  { title: 'Mirrors & Wall Decor', focusKeyword: 'Mirrors & Wall Decor', score: 100 },
  { title: 'Botanicals & Trees', focusKeyword: 'Artificial Plants & Trees', score: 100 },
  { title: 'Bath', focusKeyword: 'Bathroom Accessories', score: 100 },
  { title: 'Accent Furniture', focusKeyword: 'Accent Furniture', score: 100 },
  { title: 'Lighting', focusKeyword: 'Home Lighting', score: 100 },
  { title: 'Rugs', focusKeyword: 'Area Rugs', score: 100 },
  { title: 'American Cottage Collection', focusKeyword: 'American Cottage Furniture', score: 100 },
  { title: 'Handcrafted Pottery & Stoneware', focusKeyword: 'Handcrafted Pottery', score: 100 },
  { title: 'The Weavers Collection', focusKeyword: 'The Weavers Collection', score: 100 }
];

export const HABITAT_PRODUCTS_SEO = [
  { title: '10 Piece Vintage Cotton Napkins', focusKeyword: '10 Piece Vintage Cotton Napkins', score: 100 },
  { title: 'Natural Burlap Napkin Rings - 6/12/18 Set', focusKeyword: 'Natural Burlap Napkin Rings', score: 100 },
  { title: '6 Piece Blossom Napkin Rings', focusKeyword: '6 Piece Blossom Napkin Rings', score: 100 },
  { title: 'Handmade Natural Bamboo Napkin Rings', focusKeyword: 'Handmade Natural Bamboo Napkin Rings', score: 100 },
  { title: 'Natural Wood Bead Napkin Rings', focusKeyword: 'Natural Wood Bead Napkin Rings', score: 100 },
  { title: 'Wooden Bunny Napkin Rings', focusKeyword: 'Wooden Bunny Napkin Rings', score: 100 },
  { title: 'Adelae Wallpaper by Quirky Paisley', focusKeyword: 'Adelae removable wallpaper', score: 100 },
  { title: 'Bluette Wallpaper by The Feral Flower', focusKeyword: 'Bluette Wallpaper by The Feral Flower', score: 100 },
  { title: 'Afton Wallpaper by Luna Pictata', focusKeyword: 'Afton Wallpaper by Luna Pictata', score: 100 }
];

export const GM_SEO_EVIDENCE = {
  beforeAudit: [
    { title: 'M0 Pro Hi-Res Audio HIFI Bluetooth Portable Music Player', score: 59, status: 'Missing Keyword' },
    { title: '100W TPA3116 Subwoofer Amplifier Class D Mini Power Amplifier', score: 59, status: 'Missing Keyword' },
    { title: 'AOCHUAN 3-Axis Handheld Gimbal Stabilizer Smartxe', score: 59, status: 'Missing Keyword' },
    { title: 'XU MINI M Handheld Game Console 2.8" Screen', score: 59, status: 'Missing Keyword' },
    { title: '128G Open Source R36S Retro Handheld Video Game Console', score: 59, status: 'Missing Keyword' }
  ],
  afterMetaTags: [
    { title: '1 Smart Home Wifi Operated Relay Switch 16A', focusKeyword: 'Smart Home', score: 100 },
    { title: '1/4 Inch TRS Instrument Guitar Cable 10Ft', focusKeyword: 'TRS Guitar Cable', score: 100 },
    { title: '10" Ring Light with 50" Extendable Tripod Stand', focusKeyword: '10" Ring Light', score: 100 },
    { title: '10.26 Inch Car Monitor Wireless Carplay / Android-Auto', focusKeyword: '10.26" Car Monitor', score: 100 },
    { title: '100 Turbos Chilled Ice Sensation Cold Fan', focusKeyword: 'Turbo Mini Cold Fan', score: 100 },
    { title: '100W TPA3116 Subwoofer Amplifier Class D', focusKeyword: '100W TPA3116 Subwoofer', score: 100 },
    { title: '128G Open Source R36S Retro Handheld Console', focusKeyword: 'R36S Retro Handheld Game Console', score: 100 }
  ],
  pagespeedReport: {
    url: 'https://gandmtech.com/',
    date: 'Oct 5, 2025',
    device: 'Mobile',
    scores: {
      performance: 74,
      accessibility: 91,
      bestPractices: 100,
      seo: 100
    }
  }
};

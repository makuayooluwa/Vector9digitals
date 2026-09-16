import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  ChevronRight
} from 'lucide-react';
import { BrowserFrame, GoogleMerchantCenterComparison, SmartSeoTable } from '../components/Screenshots';
import { HABITAT_ARTICLES, HABITAT_COLLECTIONS_SEO, HABITAT_PRODUCTS_SEO } from '../data/projectsData';

interface CaseStudyProps {
  navigate: (path: string) => void;
}

export const HabitatRenewalCaseStudy: React.FC<CaseStudyProps> = ({ navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="pt-28 md:pt-36 pb-24 md:pb-32 text-[#F5F5F2]">
      
      {/* Top Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <div className="flex items-center justify-between border-b border-[#222222] pb-4 text-xs font-mono text-[#888888]">
          <button
            onClick={() => navigate('/work')}
            className="hover:text-[#6C63FF] transition-colors flex items-center gap-2 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Selected Work</span>
          </button>

          <div className="flex items-center gap-3">
            <span>PROJECT 01 / 02</span>
            <span className="text-[#444444]">|</span>
            <span className="text-[#A5A0FF]">FEATURED CASE STUDY</span>
          </div>
        </div>
      </div>

      {/* Case Study Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <div className="space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono px-3 py-1 rounded bg-[#1C1A17] border border-[#3D2E20] text-[#E5A93C] uppercase tracking-wider">
              HABITAT RENEWAL
            </span>
            <span className="text-xs font-mono text-[#777777]">
              E-commerce · Shopify · SEO · Content · Google Merchant Center
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display uppercase tracking-tight text-white leading-[1.05]">
            FROM STOREFRONT <br />
            OPTIMIZATION TO <br />
            <span className="text-[#6C63FF]">PRODUCT VISIBILITY.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#9A9A9A] leading-relaxed max-w-3xl">
            Habitat Renewal is a furniture and home décor e-commerce store. The work focused on improving the digital storefront, product and collection SEO, content structure and Google Merchant Center product visibility.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="https://habitatrenewal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-[#EAEAEA] text-black font-semibold font-display text-xs tracking-wider uppercase transition-all"
            >
              <span>View Live Store</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#141414] border border-[#262626] text-xs font-mono text-[#BBBBBB]">
              <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
              <span>Primary Win: 0 → 57,679 Products Approved in GMC</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Banner */}
        <div className="mt-12 rounded-2xl border border-[#2A2420] overflow-hidden bg-[#16120E] shadow-2xl">
          <BrowserFrame url="habitatrenewal.com" title="Habitat Renewal Desktop Storefront">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
              <img
                src="/assets/projects/habitat-hero.jpg"
                alt="Habitat Renewal warm living room furniture storefront"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10">
                <span className="text-xs font-mono text-[#E5A93C] uppercase tracking-widest mb-1">
                  E-Commerce Brand Experience
                </span>
                <h3 className="font-display text-lg sm:text-2xl font-bold text-white max-w-2xl">
                  “PREMIUM FURNITURE AND DECOR DESIGNED TO CREATE CALM, REFINED, AND BEAUTIFULLY LIVED-IN SPACES.”
                </h3>
              </div>
            </div>
          </BrowserFrame>
        </div>
      </section>

      {/* Overview & Challenge Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-[#1C1C1C]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-4">
              <span className="text-xs font-mono text-[#6C63FF] tracking-widest uppercase block">
                01 // OVERVIEW & SCOPE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white">
                THE CHALLENGE
              </h2>
              <div className="space-y-2 text-xs font-mono text-[#777777] pt-4">
                <div>PLATFORM: Shopify 2.0</div>
                <div>NICHE: Furniture & Home Décor</div>
                <div>SCOPE: Storefront UX, SEO, GMC</div>
                <div>TIMELINE: Multi-phase Optimization</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-base text-[#9A9A9A] leading-relaxed">
            <p className="text-lg text-[#F5F5F2]">
              Habitat Renewal required a comprehensive digital overhaul to bridge an inspiring organic home décor brand with dependable technical e-commerce foundations.
            </p>

            <p>
              Before our intervention, the store faced challenges across both front-end customer engagement and back-end catalog discoverability:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-[#111111] border border-[#222222]">
                <strong className="block text-white text-sm font-semibold mb-2">Storefront Experience</strong>
                <p className="text-xs text-[#888888]">
                  The presentation needed to better communicate an elevated, calming aesthetic with curated storytelling and clear customer incentives (e.g. Free shipping thresholds, seasonal announcements).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#111111] border border-[#222222]">
                <strong className="block text-white text-sm font-semibold mb-2">Collection Architecture</strong>
                <p className="text-xs text-[#888888]">
                  Faceted filtering, categorization, and sorting for hundreds of SKUs (from accent chairs to handcrafted pottery) were fragmented, leading to browsing friction.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#111111] border border-[#222222]">
                <strong className="block text-white text-sm font-semibold mb-2">Organic Search & Content</strong>
                <p className="text-xs text-[#888888]">
                  The brand was missing dedicated search-intent editorial guides, metadata optimization, and keyword mapping across primary furniture categories.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#181111] border border-[#381C1C]">
                <strong className="block text-[#FF6961] text-sm font-semibold mb-2">Google Merchant Center Block</strong>
                <p className="text-xs text-[#FFB3B0]">
                  Most critically, Google Merchant Center had suspended the feed: 0 approved products out of 75,904 SKUs, cutting off Google Shopping traffic entirely.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* THE STOREFRONT */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-[#1C1C1C]">
        <div className="mb-12">
          <span className="text-xs font-mono text-[#6C63FF] tracking-widest uppercase block mb-2">
            02 // FRONTEND EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white mb-4">
            THE STOREFRONT
          </h2>
          <p className="text-base text-[#9A9A9A] max-w-3xl leading-relaxed">
            We redesigned key customer touchpoints across the store: an editorial homepage that establishes brand identity, structured collection pages for smooth browsing, and informative product detail pages designed to build buying confidence.
          </p>
        </div>

        {/* Storefront screens showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Collection Experience Viewport */}
          <div className="lg:col-span-7">
            <BrowserFrame url="habitatrenewal.com/collections/accent-furniture" title="Collection Browsing Experience">
              <div className="bg-[#12100E] p-4 sm:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#2A2420] pb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded bg-[#3D2E20] text-[#E5A93C] font-mono text-[11px]">FILTER +</span>
                    <span className="px-3 py-1 rounded bg-[#241C16] text-[#A09080] font-mono text-[11px]">SORT BY v</span>
                  </div>
                  <span className="text-[#888888] font-mono text-[11px]">299 products</span>
                </div>

                {/* Grid of actual items from screenshot */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-[#1A1613] border border-[#2E241E] space-y-2">
                    <div className="relative aspect-square rounded bg-[#241E1A] overflow-hidden flex items-center justify-center text-2xl">
                      🪑
                      <span className="absolute top-1 left-1 bg-[#B24522] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                        -$128.00
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-white truncate">Swivel Accent Chair Faux Leather</h4>
                      <div className="text-[11px] font-mono text-[#E5A93C]">$637.99 <span className="line-through text-[#666666]">$765.00</span></div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#1A1613] border border-[#2E241E] space-y-2">
                    <div className="relative aspect-square rounded bg-[#241E1A] overflow-hidden flex items-center justify-center text-2xl">
                      📚
                      <span className="absolute top-1 left-1 bg-[#B24522] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                        -$500.00
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-white truncate">Vyre 71" Tall Farmhouse Bookshelves</h4>
                      <div className="text-[11px] font-mono text-[#E5A93C]">$899.00 <span className="line-through text-[#666666]">$1,399.00</span></div>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded bg-[#1C1814] text-[11px] text-[#A09080] flex items-center justify-between">
                  <span>Showing curated seating & storage taxonomy</span>
                  <span className="text-[#A5A0FF] font-mono">Faceted Filtering Active</span>
                </div>
              </div>
            </BrowserFrame>
          </div>

          {/* Product Detail Page Viewport */}
          <div className="lg:col-span-5">
            <BrowserFrame url="habitatrenewal.com/products/modern-beige-velvet-armchair" title="Product Detail Page">
              <div className="bg-[#12100E] p-4 sm:p-5 space-y-4">
                <div className="relative aspect-square rounded-lg overflow-hidden border border-[#2E241E]">
                  <img
                    src="/assets/projects/habitat-armchair.jpg"
                    alt="Beige Velvet Arm Chair with Gold Metal Accent"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-[#B24522] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    -28% OFF
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-[#888888] uppercase tracking-wider block">SHIPITFURNITURE</span>
                  <h4 className="text-sm font-display font-bold text-white leading-snug">
                    BEIGE VELVET ARM CHAIR WITH GOLD METAL ACCENT
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold font-mono text-[#E5A93C]">$308.00</span>
                    <span className="text-xs font-mono text-[#666666] line-through">$428.00</span>
                  </div>
                  <p className="text-[10px] text-[#9A9A9A]">
                    or 4 installments of $27.80/mo with <strong className="text-white">Shop Pay</strong>
                  </p>
                </div>

                <div className="pt-2 border-t border-[#2A2420] flex items-center justify-between text-xs">
                  <span className="text-[#888888]">Color: <strong>BEIGE</strong></span>
                  <span className="text-[#27C93F] font-mono text-[11px]">In Stock · Ready to Ship</span>
                </div>
              </div>
            </BrowserFrame>
          </div>

        </div>
      </section>

      {/* SEO & CONTENT STRATEGY */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-[#1C1C1C]">
        <div className="mb-12">
          <span className="text-xs font-mono text-[#6C63FF] tracking-widest uppercase block mb-2">
            03 // EDITORIAL & SEARCH STRATEGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white mb-4">
            SEO & CONTENT CREATION
          </h2>
          <p className="text-base text-[#9A9A9A] max-w-3xl leading-relaxed">
            To capture high-intent non-branded organic traffic, we produced search-optimized editorial articles and structured collection metadata with 100/100 Smart SEO audit ratings.
          </p>
        </div>

        {/* 3 Articles Published */}
        <div className="mb-12">
          <h3 className="text-sm font-mono uppercase tracking-widest text-[#777777] mb-4">
            Published Editorial Guides (100 Meta Tags Score)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HABITAT_ARTICLES.map((art, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#0E0E0E] border border-[#222222] hover:border-[#383838] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1C1C1C] text-[#E5A93C] uppercase">
                      {art.type}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#27C93F] bg-[#27C93F]/10 px-2 py-0.5 rounded border border-[#27C93F]/30">
                      Score {art.score}
                    </span>
                  </div>
                  <h4 className="text-base font-display font-semibold text-white mb-3">
                    “{art.title}”
                  </h4>
                </div>
                <div className="pt-4 border-t border-[#1A1A1A] text-xs font-mono text-[#777777]">
                  <span>Focus Keyword: </span>
                  <strong className="text-[#AAAAAA]">{art.focusKeyword}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Smart SEO Tables: Collections & Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SmartSeoTable
            title="Collection Meta Tags Optimization"
            storeName="Habitat Renewal (ebony-home-3)"
            category="collections"
            items={HABITAT_COLLECTIONS_SEO}
          />
          <SmartSeoTable
            title="Product Meta Tags Optimization"
            storeName="Habitat Renewal (ebony-home-3)"
            category="products"
            items={HABITAT_PRODUCTS_SEO}
          />
        </div>
      </section>

      {/* GOOGLE MERCHANT CENTER (PRIMARY RESULT) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-[#1C1C1C] bg-[#090909]">
        <div className="mb-12">
          <span className="text-xs font-mono text-[#6C63FF] tracking-widest uppercase block mb-2">
            04 // TECHNICAL RESOLUTION & SCALE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white mb-4">
            GOOGLE MERCHANT CENTER OPTIMIZATION
          </h2>
          <p className="text-base text-[#9A9A9A] max-w-3xl leading-relaxed">
            I worked through product visibility and Merchant Center issues affecting the store's product listings, helping move the account from having no approved products to 57,679 approved products.
          </p>
        </div>

        {/* Interactive Before & After Component */}
        <GoogleMerchantCenterComparison />

        {/* Breakdown of what was fixed */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#0E0E0E] border border-[#222222]">
            <h4 className="text-sm font-semibold text-white mb-2">1. Feed Attribute Mapping</h4>
            <p className="text-xs text-[#888888] leading-relaxed">
              Standardized variant taxonomy, GTIN/barcode exemptions, MPNs, and brand attributes across tens of thousands of home furnishings.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0E0E0E] border border-[#222222]">
            <h4 className="text-sm font-semibold text-white mb-2">2. Policy & Shipping Setup</h4>
            <p className="text-xs text-[#888888] leading-relaxed">
              Configured precise carrier shipping tables, freight delivery rates, transparent return policies, and merchant contact trust compliance.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0E0E0E] border border-[#222222]">
            <h4 className="text-sm font-semibold text-white mb-2">3. Re-Review & Account Activation</h4>
            <p className="text-xs text-[#888888] leading-relaxed">
              Executed formal Google support appeals, resolving the suspension notice and lifting 57,679 products into Active Shopping status.
            </p>
          </div>
        </div>
      </section>

      {/* THE OUTCOME */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-[#1C1C1C]">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#121212] via-[#0E0E0E] to-[#0A0A0A] border border-[#262626]">
          <span className="text-xs font-mono text-[#6C63FF] tracking-widest uppercase block mb-3">
            05 // PROJECT SUMMARY
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white mb-6">
            THE OUTCOME
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#CCCCCC]">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6C63FF] shrink-0 mt-0.5" />
                <span>A more cohesive and refined Shopify storefront experience that elevates customer perception.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6C63FF] shrink-0 mt-0.5" />
                <span>Structured collection taxonomy and faceted filtering across hundreds of furniture and decor items.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6C63FF] shrink-0 mt-0.5" />
                <span>High-converting product detail pages with transparent pricing, installments, and material clarity.</span>
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6C63FF] shrink-0 mt-0.5" />
                <span>Search-focused content strategy driving organic discovery for high-intent furniture keywords.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6C63FF] shrink-0 mt-0.5" />
                <span>Perfect 100/100 Smart SEO scores across articles, collections, and catalog metadata.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6C63FF] shrink-0 mt-0.5" />
                <span>Resolved major Google Merchant Center blockers, unlocking 57,679 products for Google Shopping.</span>
              </li>
            </ul>
          </div>

          <div className="mt-10 pt-8 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => navigate('/work/gandm-tech')}
              className="flex items-center gap-2 text-sm font-mono text-[#F5F5F2] hover:text-[#6C63FF] transition-colors"
            >
              <span>Next Project: G & M Tech (Futuristic Shopify & CRO)</span>
              <ChevronRight className="w-4 h-4 text-[#6C63FF]" />
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 rounded bg-white hover:bg-[#EAEAEA] text-black font-semibold font-display text-xs tracking-wider uppercase transition-all"
            >
              Start a similar project ↗
            </button>
          </div>
        </div>
      </section>

    </article>
  );
};

import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles, 
  ChevronRight,
  Zap,
  Layers,
  Search
} from 'lucide-react';
import { BrowserFrame, PageSpeedReportView, SmartSeoTable } from '../components/Screenshots';
import { GM_SEO_EVIDENCE } from '../data/projectsData';

interface CaseStudyProps {
  navigate: (path: string) => void;
}

export const GandMTechCaseStudy: React.FC<CaseStudyProps> = ({ navigate }) => {
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
            <span>PROJECT 02 / 02</span>
            <span className="text-[#444444]">|</span>
            <span className="text-[#C084FC]">TECH E-COMMERCE</span>
          </div>
        </div>
      </div>

      {/* Case Study Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <div className="space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono px-3 py-1 rounded bg-[#1F142B] border border-[#4C286A] text-[#C084FC] uppercase tracking-wider">
              G & M TECH
            </span>
            <span className="text-xs font-mono text-[#777777]">
              Shopify · E-commerce Design · UI/UX · SEO · CRO
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display uppercase tracking-tight text-white leading-[1.05]">
            A FUTURISTIC SHOPIFY <br />
            EXPERIENCE FOR A <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] via-[#C084FC] to-[#8A2BE2]">
              MODERN TECH BRAND.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#9A9A9A] leading-relaxed max-w-3xl">
            G & M Tech is a technology e-commerce store selling gadgets and electronic products. The project focused on creating a futuristic storefront while keeping the shopping experience clear, structured and conversion-focused.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="https://gandmtech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#9333EA] hover:bg-[#7E22CE] text-white font-semibold font-display text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)]"
            >
              <span>View Live Store</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#14141A] border border-[#262634] text-xs font-mono text-[#BBBBBB]">
              <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
              <span>Primary Win: SEO Score 59 → 100 with Google PageSpeed 100 SEO</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Banner */}
        <div className="mt-12 rounded-2xl border border-[#2A1E38] overflow-hidden bg-black shadow-2xl">
          <BrowserFrame url="gandmtech.com" title="G & M Tech Desktop Storefront">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
              <img
                src="/assets/projects/gm-hero.jpg"
                alt="G & M Tech futuristic cyberpunk electronics storefront"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 md:p-10">
                <div className="text-xs font-mono text-[#C084FC] uppercase tracking-widest mb-1 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5" />
                  <span>SMART GADGETS, BOLD DESIGNS AND FUTURISTIC PERFORMANCE</span>
                </div>
                <h3 className="font-display text-lg sm:text-2xl font-bold text-white max-w-2xl">
                  “POWER UP YOUR WORLD — NEXT-GEN TECH GADGETS RIGHT HERE.”
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
              <span className="text-xs font-mono text-[#C084FC] tracking-widest uppercase block">
                01 // OVERVIEW & SCOPE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white">
                THE CHALLENGE
              </h2>
              <div className="space-y-2 text-xs font-mono text-[#777777] pt-4">
                <div>PLATFORM: Shopify 2.0</div>
                <div>NICHE: Consumer Tech & Gadgets</div>
                <div>SCOPE: UI/UX Redesign, SEO, CRO</div>
                <div>THEME: Dark Cyberpunk & Futuristic</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-base text-[#9A9A9A] leading-relaxed">
            <p className="text-lg text-[#F5F5F2]">
              In a crowded consumer electronics market, generic Shopify templates fail to inspire tech-savvy buyers. G & M Tech needed an aggressive, memorable brand identity paired with uncompromising usability and swift checkout mechanics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-[#111116] border border-[#22222E]">
                <strong className="block text-white text-sm font-semibold mb-2">Distinctive Tech Identity</strong>
                <p className="text-xs text-[#888888]">
                  Moving away from sterile white templates to an immersive dark aesthetic (#050508) illuminated with electric purple circuit accents and high-fidelity product renders.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#111116] border border-[#22222E]">
                <strong className="block text-white text-sm font-semibold mb-2">Catalog Structure & Navigation</strong>
                <p className="text-xs text-[#888888]">
                  Organizing diverse hardware inventory (microphones, smart home relays, handheld gaming consoles, car displays) into clean, discoverable taxonomy.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#111116] border border-[#22222E]">
                <strong className="block text-white text-sm font-semibold mb-2">Conversion & Variant UX</strong>
                <p className="text-xs text-[#888888]">
                  Optimizing multi-pack bundle selectors (1 Pack, 2 Pack, 4 Pack), clear local currency (Dhs. AED), and high-contrast "Buy It Now" action pathways.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#111116] border border-[#22222E]">
                <strong className="block text-[#C084FC] text-sm font-semibold mb-2">Technical SEO Deficit</strong>
                <p className="text-xs text-[#888888]">
                  Early audits revealed an average SEO score of only 59, with missing keyword associations and unoptimized product descriptions across key SKUs.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* VISUAL DIRECTION & STOREFRONT EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-[#1C1C1C]">
        <div className="mb-12">
          <span className="text-xs font-mono text-[#C084FC] tracking-widest uppercase block mb-2">
            02 // VISUAL IDENTITY & FRONTEND
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white mb-4">
            VISUAL DIRECTION & STOREFRONT
          </h2>
          <p className="text-base text-[#9A9A9A] max-w-3xl leading-relaxed">
            The visual system unites dark editorial minimalism with futuristic purple glowing circuit board motifs, delivering an engaging atmosphere without compromising readability or speed.
          </p>
        </div>

        {/* Visual Design Palette Callout */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-lg bg-[#050508] border border-[#20202C]">
            <span className="text-xs font-mono text-[#C084FC] block mb-1">Canvas Deep</span>
            <div className="text-sm font-mono text-white font-bold">#050508</div>
          </div>
          <div className="p-4 rounded-lg bg-[#121218] border border-[#20202C]">
            <span className="text-xs font-mono text-[#C084FC] block mb-1">Card Surface</span>
            <div className="text-sm font-mono text-white font-bold">#121218</div>
          </div>
          <div className="p-4 rounded-lg bg-[#9333EA]/20 border border-[#9333EA]/40">
            <span className="text-xs font-mono text-[#D946EF] block mb-1">Neon Accent</span>
            <div className="text-sm font-mono text-white font-bold">#9333EA / #D946EF</div>
          </div>
          <div className="p-4 rounded-lg bg-[#27C93F]/10 border border-[#27C93F]/30">
            <span className="text-xs font-mono text-[#27C93F] block mb-1">SEO & Trust</span>
            <div className="text-sm font-mono text-white font-bold">100 / 100 Green</div>
          </div>
        </div>

        {/* Storefront screens showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Microphones Collection Viewport */}
          <div className="lg:col-span-6">
            <BrowserFrame url="gandmtech.com/collections/microphones" title="Microphones Collection Page">
              <div className="bg-black p-4 sm:p-5 space-y-4">
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-[#262634]">
                  <img
                    src="/assets/projects/gm-mic.jpg"
                    alt="Microphones category studio condenser gear"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-4">
                    <h4 className="text-base font-display font-bold text-white">Microphones</h4>
                    <p className="text-xs text-[#A0A0B0] max-w-sm mt-0.5">
                      Discover lavalier, podcasting, and studio microphones designed for pristine voice capture.
                    </p>
                  </div>
                </div>
                <div className="p-3 rounded bg-[#101015] border border-[#202028] text-xs text-[#888899] flex items-center justify-between">
                  <span>Category Banner with Circuit Glow</span>
                  <span className="text-[#C084FC] font-mono">Catalog Active</span>
                </div>
              </div>
            </BrowserFrame>
          </div>

          {/* Product Detail Page Viewport: Shelly 1 WiFi Relay Switch */}
          <div className="lg:col-span-6">
            <BrowserFrame url="gandmtech.com/products/1-smart-home-wifi-relay-switch" title="Smart Relay Product Detail Page">
              <div className="bg-black p-4 sm:p-5 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-5 relative aspect-square rounded-lg overflow-hidden border border-[#262634]">
                    <img
                      src="/assets/projects/gm-relay.jpg"
                      alt="1 Smart Home Wifi Operated Relay Switch 16A"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="sm:col-span-7 space-y-2.5">
                    <h4 className="text-xs font-display font-bold text-white leading-snug">
                      1 Smart Home Wifi Operated Relay Switch 16A an Embedded Webserver Remote Control
                    </h4>
                    <div className="text-sm font-mono font-bold text-white">
                      Dhs. 48.60
                    </div>

                    {/* Bundle Selector matching screenshot */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-[#777777] uppercase">BUNDLE:</span>
                      <div className="flex gap-1.5">
                        <span className="px-2 py-1 rounded bg-[#20202C] text-white border border-white text-[10px] font-mono font-bold">1 Pack</span>
                        <span className="px-2 py-1 rounded bg-[#121218] text-[#888888] border border-[#282834] text-[10px] font-mono">4 Pack</span>
                        <span className="px-2 py-1 rounded bg-[#121218] text-[#888888] border border-[#282834] text-[10px] font-mono">2 Pack</span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-2 space-y-1.5">
                      <div className="w-full py-2 rounded bg-black border border-white text-white text-[11px] font-semibold text-center">
                        Add to cart
                      </div>
                      <div className="w-full py-2 rounded bg-[#9333EA] text-white text-[11px] font-semibold text-center shadow-[0_0_12px_rgba(147,51,234,0.4)]">
                        Buy it now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BrowserFrame>
          </div>

        </div>

        {/* Customer Journey Supporting Pages (Contact & Support) */}
        <div className="p-6 rounded-xl bg-[#0D0D12] border border-[#1E1E28] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9999AA]">
          <div className="space-y-1">
            <strong className="text-white block font-medium">Complete Storefront Experience</strong>
            <p>Designed friction-free contact form (`/pages/contact`), order tracking (`/pages/track-your-order`), and payment trust banners.</p>
          </div>
          <span className="px-3 py-1 rounded bg-[#9333EA]/20 text-[#D946EF] font-mono text-[11px] border border-[#9333EA]/30 shrink-0">
            Visa · Mastercard · PayPal
          </span>
        </div>
      </section>

      {/* SEO & PERFORMANCE OPTIMIZATION EVIDENCE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-[#1C1C1C] bg-[#09090C]">
        <div className="mb-12">
          <span className="text-xs font-mono text-[#27C93F] tracking-widest uppercase block mb-2">
            03 // EMPIRICAL AUDIT EVIDENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white mb-4">
            SEO SCORE IMPROVEMENT: 59 → 100
          </h2>
          <p className="text-base text-[#9A9A9A] max-w-3xl leading-relaxed">
            Prior to optimization, Smart SEO audits flagged low metadata scores of 59 across essential tech catalog items. We systematically optimized product meta tags, keyword alignment, and technical hygiene—culminating in a perfect 100 SEO score validated by Google PageSpeed Insights.
          </p>
        </div>

        {/* Google PageSpeed Insights Report View */}
        <div className="mb-12">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-3">
            Google PageSpeed Insights Mobile Audit (Oct 5, 2025)
          </h3>
          <PageSpeedReportView />
        </div>

        {/* Before & After Audit Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Before Table */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-xs font-mono text-[#FF9500] uppercase tracking-wider font-semibold">
                BEFORE: Smart SEO Audit (Score 59)
              </h4>
              <span className="text-[11px] font-mono text-[#777777]">Missing Keywords</span>
            </div>
            <SmartSeoTable
              title="SEO Audit Prior to Optimization"
              storeName="G & M Tech (aviqds-rw)"
              category="audit"
              items={GM_SEO_EVIDENCE.beforeAudit}
            />
          </div>

          {/* After Table */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-xs font-mono text-[#27C93F] uppercase tracking-wider font-semibold">
                AFTER: Meta Tags Optimized (Score 100)
              </h4>
              <span className="text-[11px] font-mono text-[#27C93F]">100/100 Validated</span>
            </div>
            <SmartSeoTable
              title="Smart SEO Product Meta Tags"
              storeName="G & M Tech (aviqds-rw)"
              category="products"
              items={GM_SEO_EVIDENCE.afterMetaTags}
            />
          </div>

        </div>
      </section>

      {/* THE OUTCOME */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-[#1C1C1C]">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#12121A] via-[#0E0E14] to-[#0A0A0E] border border-[#242436]">
          <span className="text-xs font-mono text-[#C084FC] tracking-widest uppercase block mb-3">
            04 // PROJECT SUMMARY
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white mb-6">
            THE OUTCOME
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#CCCCCC]">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6C63FF] shrink-0 mt-0.5" />
                <span>Distinctive, futuristic digital storefront that sets G & M Tech apart from conventional dropship stores.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6C63FF] shrink-0 mt-0.5" />
                <span>Structured catalog browsing across audio gear, smart home automation, and gaming gadgets.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6C63FF] shrink-0 mt-0.5" />
                <span>Conversion-optimized product pages with multi-pack variant selectors and streamlined quick-buy actions.</span>
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6C63FF] shrink-0 mt-0.5" />
                <span>Substantial SEO turnaround: improved product audit scores from 59 to 100 across key catalog SKUs.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6C63FF] shrink-0 mt-0.5" />
                <span>Official Google PageSpeed Mobile audit certifying 100 Best Practices and 100 SEO health.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6C63FF] shrink-0 mt-0.5" />
                <span>Clean supporting touchpoints for customer trust, order tracking, and contact clarity.</span>
              </li>
            </ul>
          </div>

          <div className="mt-10 pt-8 border-t border-[#222230] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => navigate('/work/habitat-renewal')}
              className="flex items-center gap-2 text-sm font-mono text-[#F5F5F2] hover:text-[#6C63FF] transition-colors"
            >
              <span>Previous Project: Habitat Renewal (Shopify & GMC)</span>
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

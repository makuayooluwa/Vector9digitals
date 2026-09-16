import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BrowserFrame } from './Screenshots';

interface HeroProps {
  navigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ navigate }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-[#181818]">
      {/* Subtle technical background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Subtle violet glow accent top right */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#6C63FF]/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Grid details */}
        <div className="flex items-center justify-between border-b border-[#222222] pb-6 mb-12 text-xs font-mono text-[#777777]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#6C63FF]" />
            <span className="text-[#F5F5F2] font-semibold">VECTOR9 DIGITALS</span>
            <span className="hidden sm:inline text-[#444444]">/</span>
            <span className="hidden sm:inline">SHOPIFY & E-COMMERCE</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden md:inline">EDITION // 2026</span>
            <span className="text-[#A5A0FF]">AVAILABLE FOR PROJECTS</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          
          {/* Left Column: Headlines and Copy */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161616] border border-[#262626] text-[11px] font-mono tracking-widest text-[#A0A0A0] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF]" />
              SHOPIFY · ECOMMERCE · DIGITAL EXPERIENCES
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold font-display tracking-tight text-[#F5F5F2] leading-[1.04] uppercase">
              WE BUILD DIGITAL <br />
              EXPERIENCES THAT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F2] via-[#E0E0DC] to-[#999999]">
                MOVE BUSINESSES
              </span> <br />
              <span className="text-[#F5F5F2]">FORWARD.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#9A9A9A] max-w-xl font-normal leading-relaxed">
              Shopify stores, e-commerce experiences and digital products designed around your brand, your customers and your goals.
            </p>

            {/* Statement Callout */}
            <div className="p-4 rounded-lg bg-[#111111] border-l-2 border-[#6C63FF] max-w-xl">
              <p className="text-sm font-medium text-[#F5F5F2] italic">
                “We don't just make digital experiences look good. We make them work better.”
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('work');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else navigate('/work');
                }}
                className="group flex items-center gap-2 px-6 py-3.5 rounded bg-[#F5F5F2] hover:bg-white text-black font-semibold font-display text-sm tracking-wide transition-all duration-200 hover:shadow-[0_0_25px_rgba(108,99,255,0.15)] hover:scale-[1.01]"
              >
                <span>View our work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="group flex items-center gap-2 px-6 py-3.5 rounded bg-[#141414] hover:bg-[#1A1A24] border border-[#2E2E2E] hover:border-[#6C63FF] text-[#F5F5F2] font-display text-sm tracking-wide transition-all"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-4 h-4 text-[#9A9A9A] group-hover:text-[#6C63FF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Real Proof Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#1C1C1C] text-xs font-mono text-[#888888]">
              <div>
                <span className="block text-white font-bold text-base font-display">57,679</span>
                <span>GMC Approved Items</span>
              </div>
              <div>
                <span className="block text-white font-bold text-base font-display">100 / 100</span>
                <span>Audit & Meta Scores</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-white font-bold text-base font-display">Shopify 2.0</span>
                <span>Custom Architecture</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Visual Composition with Real Project Screenshots */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            
            {/* Project 1 Hero: Habitat Renewal */}
            <div className="relative z-20 group cursor-pointer" onClick={() => navigate('/work/habitat-renewal')}>
              <BrowserFrame 
                url="habitatrenewal.com" 
                title="Habitat Renewal" 
                className="transform transition-transform duration-500 hover:-translate-y-1 hover:border-[#444444]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A]">
                  <img
                    src="/assets/projects/habitat-hero.jpg"
                    alt="Habitat Renewal modern living room e-commerce storefront"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle overlay gradient & text matching actual screenshot */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5">
                    <div className="text-[10px] font-mono tracking-widest text-[#E5A93C] uppercase mb-1">
                      FREE SHIPPING ON ORDERS OVER $100
                    </div>
                    <h3 className="font-display font-semibold text-sm sm:text-base text-[#F5F5F2] leading-snug">
                      PREMIUM FURNITURE AND DECOR DESIGNED TO CREATE CALM, REFINED SPACES
                    </h3>
                    <div className="mt-3 flex items-center justify-between text-xs">
                      <span className="px-2 py-0.5 rounded bg-white text-black font-semibold text-[11px]">
                        Find Your Style ↗
                      </span>
                      <span className="text-[#D1CFFD] font-mono text-[11px]">
                        01 / HABITAT RENEWAL
                      </span>
                    </div>
                  </div>
                </div>
              </BrowserFrame>

              {/* GMC Verification Badge floating over browser */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 z-30 p-3.5 rounded-xl bg-[#0F1612] border border-[#27C93F]/40 shadow-2xl backdrop-blur-md max-w-[260px]">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#27C93F] mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Google Merchant Center</span>
                </div>
                <div className="text-xl font-bold font-display text-white flex items-center gap-2">
                  <span className="text-xs text-[#777777] line-through">0</span>
                  <span className="text-[#27C93F]">→ 57,679</span>
                </div>
                <p className="text-[10px] text-[#A0BBA0] mt-0.5">Approved product visibility unblocked</p>
              </div>
            </div>

            {/* Project 2 Overlapping Card: G & M Tech */}
            <div 
              className="mt-10 sm:mt-12 ml-4 sm:ml-12 relative z-10 group cursor-pointer"
              onClick={() => navigate('/work/gandm-tech')}
            >
              <BrowserFrame 
                url="gandmtech.com" 
                title="G & M Tech"
                className="transform transition-transform duration-500 hover:-translate-y-1 hover:border-[#6C63FF]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-black">
                  <img
                    src="/assets/projects/gm-hero.jpg"
                    alt="G & M Tech futuristic cyberpunk Shopify storefront"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-[#A5A0FF] tracking-wider uppercase block">
                          G & M TECH · SMART GADGETS
                        </span>
                        <h4 className="font-display font-medium text-xs text-white">
                          Futuristic tech storefront & CRO
                        </h4>
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-[#27C93F] bg-black/80 flex flex-col items-center justify-center text-[10px] font-mono font-bold text-[#27C93F]">
                        100
                        <span className="text-[7px] text-[#888888] -mt-1">SEO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </BrowserFrame>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, ShieldCheck, Sparkles } from 'lucide-react';
import { BrowserFrame } from './Screenshots';
import { PROJECTS } from '../data/projectsData';

interface SelectedWorkProps {
  navigate: (path: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ navigate }) => {
  const [habitat, gmTech] = PROJECTS;

  return (
    <section id="work" className="py-24 md:py-32 border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#222222] pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#6C63FF] tracking-widest uppercase mb-3">
              <span>V9 / 01</span>
              <span>·</span>
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tight text-[#F5F5F2]">
              BUILT FOR BUSINESSES. <br className="hidden sm:inline" />
              DESIGNED TO PERFORM.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9A9A9A] max-w-md leading-relaxed">
            A selection of Shopify and e-commerce work where design, optimization and growth come together.
          </p>
        </div>

        {/* Projects Layout: Asymmetric, Visually Dominant Habitat Renewal */}
        <div className="space-y-20 md:space-y-28">
          
          {/* PROJECT 01: HABITAT RENEWAL (VISUALLY DOMINANT) */}
          <div className="group rounded-2xl border border-[#222222] bg-[#0E0E0E] p-6 sm:p-10 md:p-12 hover:border-[#383838] transition-all duration-300 relative overflow-hidden">
            {/* Background ambient lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C49A6C]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Information, Tags, Outcome */}
              <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#1C1C1C] border border-[#2A2A2A] text-[#A5A0FF]">
                    PROJECT 01
                  </span>
                  <span className="text-xs font-mono text-[#777777] uppercase tracking-wider">
                    FEATURED CASE STUDY
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white mb-2">
                    {habitat.title}
                  </h3>
                  <p className="text-xs font-mono text-[#C49A6C] tracking-wide uppercase">
                    {habitat.category}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed">
                  {habitat.description}
                </p>

                {/* Services Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {habitat.services.map((srv, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-[#161616] text-[#BBBBBB] border border-[#262626]"
                    >
                      {srv}
                    </span>
                  ))}
                </div>

                {/* Real Verified Metric Banner */}
                <div className="p-4 sm:p-5 rounded-xl bg-[#141A16] border border-[#27C93F]/30 relative">
                  <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#27C93F] mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Primary Result · Google Merchant Center</span>
                  </div>
                  <div className="text-2xl sm:text-4xl font-bold font-display text-white flex items-center gap-3">
                    <span className="text-sm sm:text-lg text-[#777777] line-through font-mono">0 approved</span>
                    <span className="text-[#27C93F]">→ 57,679</span>
                  </div>
                  <p className="text-xs text-[#A2C7A8] mt-1">
                    Resolved suspension & unblocked 57,679 products in Google Merchant Center.
                  </p>
                </div>

                {/* Action Link */}
                <div className="pt-2">
                  <button
                    onClick={() => navigate(`/work/${habitat.slug}`)}
                    className="group/btn inline-flex items-center gap-2 text-sm font-semibold font-display tracking-wide text-white bg-[#1C1C1C] hover:bg-[#6C63FF] hover:text-white border border-[#2E2E2E] hover:border-[#6C63FF] px-6 py-3 rounded-lg transition-all duration-200"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>

              </div>

              {/* Right Column: Visual Showcase (Browser View + Product Preview) */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                
                {/* Desktop Viewport */}
                <div 
                  className="cursor-pointer"
                  onClick={() => navigate(`/work/${habitat.slug}`)}
                >
                  <BrowserFrame url="habitatrenewal.com" title="Storefront Viewport">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#181513]">
                      <img
                        src="/assets/projects/habitat-hero.jpg"
                        alt="Habitat Renewal living room furniture e-commerce storefront"
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />

                      {/* Header bar recreation matching screenshot */}
                      <div className="absolute top-0 inset-x-0 bg-[#3B291A]/90 backdrop-blur-sm px-4 py-1.5 text-[10px] font-mono text-[#F4D3B0] flex items-center justify-between">
                        <span>FREE shipping on orders over $100</span>
                        <span className="hidden sm:inline">THE FALL COLLECTION HAS ARRIVED!</span>
                      </div>

                      {/* Overlay card */}
                      <div className="absolute bottom-4 left-4 right-4 bg-[#0A0A0A]/85 backdrop-blur-md p-4 rounded-lg border border-[#2A2A2A] flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#C49A6C] block">
                            Organic Modern E-Commerce
                          </span>
                          <span className="text-xs sm:text-sm font-display font-medium text-white">
                            Storefront UX, Content & Collection Taxonomy
                          </span>
                        </div>
                        <span className="text-xs font-mono text-[#A5A0FF] flex items-center gap-1">
                          Explore ↗
                        </span>
                      </div>
                    </div>
                  </BrowserFrame>
                </div>

                {/* Sub-preview: Chair product shot & SEO scores */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-[#141414] border border-[#222222] flex items-center gap-3">
                    <img
                      src="/assets/projects/habitat-armchair.jpg"
                      alt="Modern Beige Velvet Armchair product detail"
                      className="w-12 h-12 rounded object-cover border border-[#2E2E2E]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="truncate">
                      <span className="text-[11px] font-medium text-white block truncate">
                        Modern Beige Velvet Armchair
                      </span>
                      <span className="text-[10px] font-mono text-[#C49A6C]">
                        $308.00 (was $428.00)
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#141414] border border-[#222222] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#777777] block uppercase">Smart SEO Score</span>
                      <span className="text-xs font-medium text-white">Collection & Meta</span>
                    </div>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#27C93F]/20 text-[#27C93F] border border-[#27C93F]/40">
                      100/100
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* PROJECT 02: G & M TECH */}
          <div className="group rounded-2xl border border-[#222222] bg-[#0E0E10] p-6 sm:p-10 md:p-12 hover:border-[#383842] transition-all duration-300 relative overflow-hidden">
            {/* Background purple glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#8A2BE2]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Visual Showcase (Browser View + Tech Device) */}
              <div className="lg:col-span-7 space-y-4">
                
                <div 
                  className="cursor-pointer"
                  onClick={() => navigate(`/work/${gmTech.slug}`)}
                >
                  <BrowserFrame url="gandmtech.com" title="Futuristic Storefront">
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <img
                        src="/assets/projects/gm-hero.jpg"
                        alt="G & M Tech cyberpunk gadgets storefront"
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />

                      {/* Announcement bar */}
                      <div className="absolute top-0 inset-x-0 bg-[#7B1FA2]/90 backdrop-blur-sm px-4 py-1.5 text-[10px] font-mono text-white flex items-center justify-between">
                        <span>Pay With Visa, Mastercard or Paypal</span>
                        <span className="hidden sm:inline">SMART GADGETS & FUTURISTIC PERFORMANCE</span>
                      </div>

                      {/* Overlay card */}
                      <div className="absolute bottom-4 left-4 right-4 bg-[#0A0A0E]/85 backdrop-blur-md p-4 rounded-lg border border-[#242430] flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#C084FC] block">
                            Next-Gen Tech E-Commerce
                          </span>
                          <span className="text-xs sm:text-sm font-display font-medium text-white">
                            Futuristic UI/UX, Dynamic Catalogs & Fast Checkout
                          </span>
                        </div>
                        <span className="text-xs font-mono text-[#A5A0FF] flex items-center gap-1">
                          Explore ↗
                        </span>
                      </div>
                    </div>
                  </BrowserFrame>
                </div>

                {/* Sub-preview: Microphone and Shelly Relay Switch */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-[#131318] border border-[#22222C] flex items-center gap-3">
                    <img
                      src="/assets/projects/gm-mic.jpg"
                      alt="Studio microphone catalog category"
                      className="w-12 h-12 rounded object-cover border border-[#2C2C38]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="truncate">
                      <span className="text-[11px] font-medium text-white block truncate">
                        Microphones Collection
                      </span>
                      <span className="text-[10px] font-mono text-[#C084FC]">
                        Podcasting & Studio Gear
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#131318] border border-[#22222C] flex items-center gap-3">
                    <img
                      src="/assets/projects/gm-relay.jpg"
                      alt="Shelly 1 Smart Home WiFi relay switch product"
                      className="w-12 h-12 rounded object-cover border border-[#2C2C38]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="truncate">
                      <span className="text-[11px] font-medium text-white block truncate">
                        Smart Home WiFi Relay
                      </span>
                      <span className="text-[10px] font-mono text-[#C084FC]">
                        Dhs. 48.60 · Bundle UX
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Information, Tags, SEO 59->100 Metric */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#1C1C24] border border-[#2A2A38] text-[#C084FC]">
                    PROJECT 02
                  </span>
                  <span className="text-xs font-mono text-[#777777] uppercase tracking-wider">
                    TECH E-COMMERCE
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white mb-2">
                    {gmTech.title}
                  </h3>
                  <p className="text-xs font-mono text-[#C084FC] tracking-wide uppercase">
                    {gmTech.category}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed">
                  {gmTech.description}
                </p>

                {/* Services Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {gmTech.services.map((srv, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-[#14141C] text-[#C4C4D4] border border-[#242434]"
                    >
                      {srv}
                    </span>
                  ))}
                </div>

                {/* Real Verified Metric Banner: SEO Score 59 -> 100 */}
                <div className="p-4 sm:p-5 rounded-xl bg-[#131E17] border border-[#27C93F]/30 relative">
                  <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#27C93F] mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>SEO Score Improvement</span>
                  </div>
                  <div className="text-2xl sm:text-4xl font-bold font-display text-white flex items-center gap-3">
                    <span className="text-sm sm:text-lg text-[#777777] line-through font-mono">59 score</span>
                    <span className="text-[#27C93F]">→ 100 / 100</span>
                  </div>
                  <p className="text-xs text-[#A2C7A8] mt-1">
                    Mobile PageSpeed SEO 100 & Smart SEO catalog optimization.
                  </p>
                </div>

                {/* Action Link */}
                <div className="pt-2">
                  <button
                    onClick={() => navigate(`/work/${gmTech.slug}`)}
                    className="group/btn inline-flex items-center gap-2 text-sm font-semibold font-display tracking-wide text-white bg-[#1C1C24] hover:bg-[#6C63FF] hover:text-white border border-[#2A2A38] hover:border-[#6C63FF] px-6 py-3 rounded-lg transition-all duration-200"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

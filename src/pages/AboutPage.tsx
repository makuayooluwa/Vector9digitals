import React, { useEffect } from 'react';
import { WhyVector9 } from '../components/WhyVector9';
import { AboutSection } from '../components/AboutSection';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-32 text-[#F5F5F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="border-b border-[#222222] pb-12 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#6C63FF] tracking-widest uppercase mb-3">
            <span>ABOUT</span>
            <span>·</span>
            <span>AGENCY PROFILE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-display uppercase tracking-tight text-white mb-6">
            A SMALL TEAM. <br />
            A BIG DIGITAL OUTLOOK.
          </h1>
          <p className="text-base sm:text-lg text-[#9A9A9A] max-w-3xl leading-relaxed">
            Vector9 Digitals is an independent digital agency built on a single premise: digital experiences must work commercially, not just look visually striking.
          </p>
        </div>

        {/* Core Narrative & Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7 space-y-6 text-base text-[#9A9A9A] leading-relaxed">
            <h2 className="text-2xl font-bold font-display uppercase tracking-tight text-white">
              Pragmatic Craft for Modern E-Commerce
            </h2>
            <p className="text-lg text-[#F5F5F2]">
              Our work currently centers strongly around Shopify and e-commerce, while our broader capabilities span UI/UX design, web development, mobile products, SEO and digital growth.
            </p>
            <p>
              We believe in clean execution, clear thinking and building digital work that actually serves the business behind it. We reject bloated agency retainers, vanity presentations, and surface-level aesthetics that fall apart on mobile devices or in search rankings.
            </p>
            <p>
              When a client trusts Vector9 with their digital storefront, they receive end-to-end craftsmanship: from structural collection taxonomy and high-converting product pages to granular metadata optimization and unblocking Google Merchant Center catalogs.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#0F0F0F] p-8 rounded-2xl border border-[#222222] space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#777777] pb-3 border-b border-[#1C1C1C]">
              Agency Factsheet
            </h3>
            <div className="space-y-4 text-xs font-mono">
              <div className="flex justify-between pb-2 border-b border-[#181818]">
                <span className="text-[#888888]">AGENCY</span>
                <span className="text-white font-bold">Vector9 Digitals</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#181818]">
                <span className="text-[#888888]">PRIMARY FOCUS</span>
                <span className="text-[#A5A0FF]">Shopify & E-Commerce</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#181818]">
                <span className="text-[#888888]">CORE TECH</span>
                <span className="text-white">Shopify 2.0 / Liquid / React</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#181818]">
                <span className="text-[#888888]">VERIFIED PEAK RESULT</span>
                <span className="text-[#27C93F] font-bold">57,679 Products Approved</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888888]">HEADQUARTERS</span>
                <span className="text-white">Digital-First Studio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Vector9 Component Embedded */}
        <div className="rounded-2xl border border-[#222222] overflow-hidden mb-16">
          <WhyVector9 />
        </div>

        {/* About Section Operating Commitments */}
        <div className="rounded-2xl border border-[#222222] overflow-hidden mb-16">
          <AboutSection navigate={navigate} />
        </div>

        {/* Bottom Contact Callout */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#0C0C0C] border border-[#222222] text-center max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white">
            WANT TO DISCUSS YOUR NEXT STOREFRONT?
          </h3>
          <p className="text-sm text-[#9A9A9A]">
            Reach out directly to review your digital objectives with our founders.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-3.5 rounded bg-white hover:bg-[#EAEAEA] text-black font-semibold font-display text-xs tracking-wider uppercase transition-all"
          >
            Start a project inquiry ↗
          </button>
        </div>

      </div>
    </div>
  );
};

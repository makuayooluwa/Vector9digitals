import React, { useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, ShoppingBag, Search, TrendingUp, Palette, Code2, Megaphone } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { Approach } from '../components/Approach';

interface ServicesPageProps {
  navigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getIcon = (num: string) => {
    switch (num) {
      case '01': return <ShoppingBag className="w-5 h-5 text-white" />;
      case '02': return <Search className="w-5 h-5 text-white" />;
      case '03': return <TrendingUp className="w-5 h-5 text-white" />;
      case '04': return <Palette className="w-5 h-5 text-white" />;
      case '05': return <Code2 className="w-5 h-5 text-white" />;
      case '06': return <Megaphone className="w-5 h-5 text-white" />;
      default: return <ShoppingBag className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-32 text-[#F5F5F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="border-b border-[#222222] pb-12 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#888888] tracking-widest uppercase mb-3">
            <span>CAPABILITIES</span>
            <span>·</span>
            <span>SERVICES & EXPERTISE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-display uppercase tracking-tight text-white mb-6">
            DESIGN, BUILD, OPTIMIZE.
          </h1>
          <p className="text-base sm:text-lg text-[#888888] max-w-3xl leading-relaxed">
            Vector9 Digitals builds and scales modern Shopify stores and digital experiences through disciplined design systems, technical SEO architecture, conversion rate optimization and robust code.
          </p>
        </div>

        {/* 6 Capabilities In-Depth Breakdown */}
        <div className="space-y-12 mb-24">
          {SERVICES.map((srv) => (
            <div
              key={srv.number}
              className="rounded-2xl border border-[#222222] bg-[#0A0A0A] p-8 sm:p-12 hover:border-[#333333] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Service Overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-white px-2.5 py-1 rounded bg-[#181818] border border-[#333333]">
                      {srv.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#141414] border border-[#242424] flex items-center justify-center">
                      {getIcon(srv.number)}
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white">
                    {srv.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#888888] leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => navigate('/contact')}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4D4D4] hover:text-white transition-colors"
                    >
                      <span>Inquire about this capability</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Right: Deliverables List & Toolset */}
                <div className="lg:col-span-7 bg-[#111111] p-6 sm:p-8 rounded-xl border border-[#222222] space-y-6">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-widest text-[#888888] mb-4">
                      Core Deliverables & Outputs
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {srv.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#D4D4D4]">
                          <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {srv.tools && srv.tools.length > 0 && (
                    <div className="pt-4 border-t border-[#222222]">
                      <span className="text-[11px] font-mono text-[#888888] uppercase tracking-wider block mb-2">
                        Technologies & Ecosystem
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {srv.tools.map((t, idx) => (
                          <span key={idx} className="text-xs font-mono px-3 py-1 rounded bg-[#181818] text-[#888888] border border-[#2A2A2A]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Approach Section Reusable */}
        <div className="rounded-2xl border border-[#222222] overflow-hidden mb-16">
          <Approach />
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#0A0A0A] border border-[#222222] text-center max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white">
            READY TO ELEVATE YOUR STORE?
          </h3>
          <p className="text-sm text-[#888888] leading-relaxed">
            Let's evaluate your catalog, storefront UX and technical visibility to build a tailored proposal.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-3.5 rounded bg-white hover:bg-black text-black hover:text-white border border-white font-semibold font-display text-xs tracking-wider uppercase transition-all"
          >
            Start a project inquiry ↗
          </button>
        </div>

      </div>
    </div>
  );
};

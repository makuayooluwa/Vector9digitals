import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  TrendingUp, 
  Palette, 
  Code2, 
  Megaphone,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';

interface ServicesProps {
  navigate: (path: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ navigate }) => {
  const [selectedService] = useState<number | null>(null);

  const getIcon = (num: string) => {
    switch (num) {
      case '01': return <ShoppingBag className="w-5 h-5 text-[#A5A0FF]" />;
      case '02': return <Search className="w-5 h-5 text-[#A5A0FF]" />;
      case '03': return <TrendingUp className="w-5 h-5 text-[#A5A0FF]" />;
      case '04': return <Palette className="w-5 h-5 text-[#A5A0FF]" />;
      case '05': return <Code2 className="w-5 h-5 text-[#A5A0FF]" />;
      case '06': return <Megaphone className="w-5 h-5 text-[#A5A0FF]" />;
      default: return <ShoppingBag className="w-5 h-5 text-[#A5A0FF]" />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#222222] pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#6C63FF] tracking-widest uppercase mb-3">
              <span>V9 / 02</span>
              <span>·</span>
              <span>WHAT WE DO</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tight text-[#F5F5F2]">
              DESIGN, BUILD, OPTIMIZE.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9A9A9A] max-w-md leading-relaxed">
            Specialized Shopify and e-commerce engineering paired with technical SEO, conversion-rate optimization and modern UI/UX design.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, index) => {
            const isExpanded = selectedService === index;

            return (
              <div
                key={srv.number}
                className={`rounded-xl border transition-all duration-300 p-8 flex flex-col justify-between ${
                  isExpanded 
                    ? 'bg-[#141414] border-[#6C63FF]/60 shadow-[0_0_30px_rgba(108,99,255,0.08)]' 
                    : 'bg-[#0E0E0E] border-[#202020] hover:border-[#333333] hover:bg-[#111111]'
                }`}
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#1C1C1C] mb-6">
                    <span className="text-xs font-mono tracking-widest text-[#777777]">
                      {srv.number} — SERVICE
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#181818] border border-[#262626] flex items-center justify-center">
                      {getIcon(srv.number)}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-display tracking-tight text-white mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-[#9A9A9A] leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2.5 pt-4 border-t border-[#1C1C1C]">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666] block mb-2">
                      Key Deliverables
                    </span>
                    {srv.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#CCCCCC]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tools & Action */}
                <div className="pt-6 mt-6 border-t border-[#1A1A1A] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {srv.tools?.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181818] text-[#888888] border border-[#262626]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate('/contact')}
                    className="text-xs font-mono text-[#9A9A9A] hover:text-[#6C63FF] transition-colors flex items-center gap-1 group"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#6C63FF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-8 rounded-xl bg-[#0F0F0F] border border-[#222222] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-bold text-lg text-white">Need a complete end-to-end e-commerce build?</h4>
            <p className="text-sm text-[#888888] mt-1">
              We frequently handle combined engagements covering Shopify migration, custom theme build, SEO metadata structure, and GMC visibility.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-3 rounded bg-white hover:bg-[#EAEAEA] text-black font-semibold font-display text-xs tracking-wider uppercase shrink-0 transition-all"
          >
            Schedule Consultation ↗
          </button>
        </div>

      </div>
    </section>
  );
};

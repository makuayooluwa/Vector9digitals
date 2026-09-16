import React from 'react';
import { Target, Layers, TrendingUp } from 'lucide-react';
import { AGENCY_PRINCIPLES } from '../data/servicesData';

export const WhyVector9: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Target className="w-6 h-6 text-[#A5A0FF]" />;
      case 1: return <Layers className="w-6 h-6 text-[#A5A0FF]" />;
      case 2: return <TrendingUp className="w-6 h-6 text-[#A5A0FF]" />;
      default: return <Target className="w-6 h-6 text-[#A5A0FF]" />;
    }
  };

  return (
    <section className="py-24 md:py-32 border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#6C63FF] tracking-widest uppercase mb-3">
            <span>PHILOSOPHY</span>
            <span>·</span>
            <span>WHY VECTOR9</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tight text-[#F5F5F2] leading-tight">
            WE DON'T JUST DESIGN. <br />
            WE THINK ABOUT WHAT HAPPENS NEXT.
          </h2>
          <p className="text-base sm:text-lg text-[#9A9A9A] leading-relaxed mt-6">
            Vector9 Digitals approaches digital work with both design sensitivity and commercial intent. A beautiful store is only successful if it can be found, explored easily and converted smoothly.
          </p>
        </div>

        {/* 3 Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AGENCY_PRINCIPLES.map((p, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#222222] bg-[#0D0D0D] p-8 hover:border-[#383838] transition-all relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-lg bg-[#141414] border border-[#282828] flex items-center justify-center mb-6">
                {getIcon(idx)}
              </div>

              <span className="text-xs font-mono text-[#666666] tracking-widest block mb-2">
                PRINCIPLE 0{idx + 1}
              </span>

              <h3 className="text-xl font-bold font-display uppercase tracking-tight text-white mb-3">
                {p.title}
              </h3>

              <p className="text-sm text-[#9A9A9A] leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

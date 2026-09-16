import React from 'react';
import { APPROACH_STEPS } from '../data/servicesData';

export const Approach: React.FC = () => {
  return (
    <section className="py-24 md:py-32 border-b border-[#1A1A1A] relative bg-[#090909]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#222222] pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#6C63FF] tracking-widest uppercase mb-3">
              <span>V9 / 03</span>
              <span>·</span>
              <span>OUR APPROACH</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tight text-[#F5F5F2]">
              GOOD DIGITAL WORK <br className="hidden sm:inline" />
              ISN'T ACCIDENTAL.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9A9A9A] max-w-md leading-relaxed">
            A disciplined, 5-phase methodology that bridges creative digital craft with rigorous commercial execution.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
          {APPROACH_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="group rounded-xl border border-[#1E1E1E] bg-[#0E0E0E] p-6 hover:border-[#383838] transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div className="w-8 h-0.5 bg-[#262626] group-hover:bg-[#6C63FF] transition-colors mb-6" />

              <div>
                <span className="text-xs font-mono text-[#666666] tracking-widest block mb-2">
                  PHASE // {step.number}
                </span>
                <h3 className="text-xl font-bold font-display uppercase tracking-tight text-white mb-3">
                  {step.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#9A9A9A] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-[#181818] flex items-center justify-between text-[11px] font-mono text-[#555555]">
                <span>STEP 0{idx + 1}</span>
                <span className="text-[#6C63FF] opacity-0 group-hover:opacity-100 transition-opacity">
                  → ACTIVE
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology statement */}
        <div className="mt-12 p-6 rounded-lg bg-[#111111] border border-[#222222] text-xs font-mono text-[#888888] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#6C63FF]" />
            <span>REPEATABLE FRAMEWORK: AUDIT → DESIGN → BUILD → MEASURE</span>
          </div>
          <span className="text-[#AAAAAA]">NO GUESSWORK. EMPIRICAL BENCHMARKS ONLY.</span>
        </div>

      </div>
    </section>
  );
};

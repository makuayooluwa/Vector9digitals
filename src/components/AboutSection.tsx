import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

interface AboutSectionProps {
  navigate?: (path: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ navigate }) => {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-[#1A1A1A] relative bg-[#090909]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Mission */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#6C63FF] tracking-widest uppercase">
              <span>AGENCY</span>
              <span>·</span>
              <span>ABOUT VECTOR9</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tight text-[#F5F5F2] leading-tight">
              A SMALL TEAM. <br />
              A BIG DIGITAL OUTLOOK.
            </h2>

            <p className="text-base sm:text-lg text-[#F5F5F2] font-normal leading-relaxed">
              Vector9 Digitals is a digital agency focused on creating thoughtful, high-performing digital experiences for modern businesses.
            </p>

            <p className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed">
              Our work currently centers strongly around Shopify and e-commerce, while our broader capabilities span UI/UX design, web development, mobile products, SEO and digital growth.
            </p>

            <p className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed">
              We believe in clean execution, clear thinking and building digital work that actually serves the business behind it.
            </p>

            {navigate && (
              <div className="pt-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A5A0FF] hover:text-white transition-colors group"
                >
                  <span>Work directly with our founders</span>
                  <ArrowUpRight className="w-4 h-4 text-[#6C63FF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Key Commitments & Operating Standards */}
          <div className="lg:col-span-6 space-y-6 lg:pl-8">
            <div className="rounded-xl border border-[#202020] bg-[#0E0E0E] p-8 space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#777777] pb-4 border-b border-[#1A1A1A]">
                Operating Commitments
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#6C63FF]/10 border border-[#6C63FF]/25 flex items-center justify-center text-[#A5A0FF] shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Direct Practitioner Access</h4>
                    <p className="text-xs text-[#888888] mt-0.5">No agency bureaucracy or junior handoffs. You work directly with senior designers and engineers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#6C63FF]/10 border border-[#6C63FF]/25 flex items-center justify-center text-[#A5A0FF] shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Authentic Technical Rigor</h4>
                    <p className="text-xs text-[#888888] mt-0.5">We measure success through verified outcomes: unblocked Google Merchant Center feeds, 100/100 audit scores, and friction-free checkout flows.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#6C63FF]/10 border border-[#6C63FF]/25 flex items-center justify-center text-[#A5A0FF] shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Clean, Scalable Foundations</h4>
                    <p className="text-xs text-[#888888] mt-0.5">Shopify Online Store 2.0 architectures designed so your internal team can manage catalogs and merchandising effortlessly.</p>
                  </div>
                </div>
              </div>

              {/* Agency Positioning Badge */}
              <div className="pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-xs font-mono text-[#888888]">
                <span>SPECIALIZATION</span>
                <span className="text-[#A5A0FF]">SHOPIFY & E-COMMERCE FIRST</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

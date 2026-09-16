import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1C1C1C] bg-[#070707] text-[#9A9A9A] text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#1A1A1A]">
          {/* Agency Brand Identity & Direct Contact */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-tight text-[#F5F5F2] flex items-center gap-2">
                VECTOR9 DIGITALS
                <span className="w-2 h-2 rounded-full bg-[#6C63FF]" />
              </span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#666666] mt-0.5">
                Shopify & E-commerce Agency
              </span>
            </div>
            <p className="text-[#888888] max-w-sm leading-relaxed text-sm">
              Digital experiences built to perform.
            </p>
            
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="mailto:vector9digitals@gmail.com"
                aria-label="Email Vector9 Digitals"
                className="font-mono text-xs sm:text-sm text-[#E0E0E0] hover:text-[#6C63FF] transition-colors flex items-center gap-2"
              >
                <span>vector9digitals@gmail.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6C63FF]" />
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono text-[#D1CFFD] bg-[#6C63FF]/10 border border-[#6C63FF]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF] animate-pulse" />
                Accepting select client partnerships
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="text-xs font-mono tracking-widest uppercase text-[#F5F5F2]">Navigation</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigate('/work')}
                  className="hover:text-[#6C63FF] transition-colors flex items-center gap-1 group text-left"
                >
                  <span>Selected Work</span>
                  <span className="text-[10px] font-mono text-[#555555] group-hover:text-[#6C63FF]">01</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services')}
                  className="hover:text-[#6C63FF] transition-colors flex items-center gap-1 group text-left"
                >
                  <span>Services & Capabilities</span>
                  <span className="text-[10px] font-mono text-[#555555] group-hover:text-[#6C63FF]">02</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="hover:text-[#6C63FF] transition-colors flex items-center gap-1 group text-left"
                >
                  <span>About Vector9</span>
                  <span className="text-[10px] font-mono text-[#555555] group-hover:text-[#6C63FF]">03</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="hover:text-[#6C63FF] transition-colors flex items-center gap-1 group text-left"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3 h-3 text-[#6C63FF]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Studies */}
          <div className="md:col-span-2 space-y-4">
            <h5 className="text-xs font-mono tracking-widest uppercase text-[#F5F5F2]">Work</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigate('/work/habitat-renewal')}
                  className="hover:text-[#6C63FF] transition-colors text-left"
                >
                  <strong className="block text-white text-xs font-medium">Habitat Renewal</strong>
                  <span className="text-xs text-[#666666]">Shopify · SEO · GMC</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/work/gandm-tech')}
                  className="hover:text-[#6C63FF] transition-colors text-left"
                >
                  <strong className="block text-white text-xs font-medium">G & M Tech</strong>
                  <span className="text-xs text-[#666666]">Storefront · CRO · SEO</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Official Social Links */}
          <div className="md:col-span-2 space-y-4">
            <h5 className="text-xs font-mono tracking-widest uppercase text-[#F5F5F2]">Connect</h5>
            <ul className="space-y-2.5 text-sm font-mono text-xs">
              <li>
                <a
                  href="https://www.instagram.com/vector9digitals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vector9 Digitals on Instagram"
                  className="text-[#CCCCCC] hover:text-[#6C63FF] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-[#6C63FF]" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/vector9digitals"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vector9 Digitals on X"
                  className="text-[#CCCCCC] hover:text-[#6C63FF] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>X</span>
                  <ArrowUpRight className="w-3 h-3 text-[#6C63FF]" />
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="mailto:vector9digitals@gmail.com"
                  aria-label="Email Vector9 Digitals"
                  className="text-[#888888] hover:text-[#6C63FF] transition-colors break-all block"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666666]">
          <div>
            © 2026 Vector9 Digitals. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#444444]">V9 / PRODUCTION PORTFOLIO</span>
            <button
              onClick={scrollToTop}
              className="text-[#9A9A9A] hover:text-[#6C63FF] transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

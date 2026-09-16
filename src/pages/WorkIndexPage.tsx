import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/projectsData';
import { BrowserFrame } from '../components/Screenshots';

interface WorkIndexPageProps {
  navigate: (path: string) => void;
}

export const WorkIndexPage: React.FC<WorkIndexPageProps> = ({ navigate }) => {
  const [filter, setFilter] = useState<'all' | 'shopify' | 'seo'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'shopify') return p.services.some(s => s.toLowerCase().includes('shopify'));
    if (filter === 'seo') return p.services.some(s => s.toLowerCase().includes('seo') || s.toLowerCase().includes('merchant'));
    return true;
  });

  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-32 text-[#F5F5F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="border-b border-[#222222] pb-12 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#6C63FF] tracking-widest uppercase mb-3">
            <span>INDEX</span>
            <span>·</span>
            <span>SELECTED WORK</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-display uppercase tracking-tight text-white mb-6">
            WORK BUILT TO PERFORM.
          </h1>
          <p className="text-base sm:text-lg text-[#9A9A9A] max-w-2xl leading-relaxed">
            Case studies from our Shopify and e-commerce engagements, highlighting real storefront builds, SEO metadata structures, and catalog visibility resolutions.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                filter === 'all'
                  ? 'bg-[#6C63FF] text-white font-medium shadow-sm'
                  : 'bg-[#141414] text-[#888888] border border-[#222222] hover:text-white'
              }`}
            >
              All Engagements (02)
            </button>
            <button
              onClick={() => setFilter('shopify')}
              className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                filter === 'shopify'
                  ? 'bg-[#6C63FF] text-white font-medium shadow-sm'
                  : 'bg-[#141414] text-[#888888] border border-[#222222] hover:text-white'
              }`}
            >
              Shopify & E-Commerce
            </button>
            <button
              onClick={() => setFilter('seo')}
              className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                filter === 'seo'
                  ? 'bg-[#6C63FF] text-white font-medium shadow-sm'
                  : 'bg-[#141414] text-[#888888] border border-[#222222] hover:text-white'
              }`}
            >
              SEO & GMC Visibility
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-[#222222] bg-[#0E0E0E] p-6 sm:p-10 hover:border-[#383838] transition-all group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Visual */}
                <div 
                  className="lg:col-span-7 cursor-pointer"
                  onClick={() => navigate(`/work/${project.slug}`)}
                >
                  <BrowserFrame url={project.slug === 'habitat-renewal' ? 'habitatrenewal.com' : 'gandmtech.com'}>
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </BrowserFrame>
                </div>

                {/* Details */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#1A1A1A] border border-[#2A2A2A] text-[#A5A0FF]">
                      PROJECT {project.id}
                    </span>
                    <span className="text-xs font-mono text-[#777777] uppercase">
                      {project.slug === 'habitat-renewal' ? 'DOMINANT CASE STUDY' : 'TECH E-COMMERCE'}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white">
                    {project.title}
                  </h2>

                  <p className="text-sm text-[#9A9A9A] leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.services.map((s, idx) => (
                      <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#161616] text-[#A0A0A0] border border-[#242424]">
                        {s}
                      </span>
                    ))}
                  </div>

                  {project.metrics && (
                    <div className="p-4 rounded-xl bg-[#121614] border border-[#27C93F]/30">
                      <div className="text-[10px] font-mono text-[#27C93F] uppercase tracking-wider mb-0.5">
                        {project.metrics.label}
                      </div>
                      <div className="text-xl font-bold font-display text-white">
                        {project.metrics.value}
                      </div>
                      <p className="text-xs text-[#99B899] mt-0.5">{project.metrics.subtext}</p>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      onClick={() => navigate(`/work/${project.slug}`)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white hover:bg-[#EAEAEA] text-black font-semibold font-display text-xs tracking-wider uppercase transition-all"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

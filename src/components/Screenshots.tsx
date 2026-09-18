import React, { useState } from 'react';
import { 
  Globe, 
  Lock, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Maximize2, 
  Smartphone, 
  Monitor, 
  ShieldCheck,
  TrendingUp,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface BrowserFrameProps {
  url: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  theme?: 'dark' | 'light';
  aspect?: string;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({
  url,
  title,
  children,
  className = '',
  theme = 'dark'
}) => {
  return (
    <div className={`rounded-xl border border-[#222222] overflow-hidden bg-[#0A0A0A] shadow-2xl transition-all duration-300 ${className}`}>
      {/* Browser Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#111111] border-b border-[#222222] select-none text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
        </div>

        {/* Address Bar */}
        <div className="flex items-center justify-center gap-1.5 px-3 py-1 rounded bg-[#0A0A0A] border border-[#222222] text-[#888888] text-[11px] font-mono max-w-xs md:max-w-md w-full mx-4 truncate">
          <Lock className="w-3 h-3 text-[#888888] shrink-0" />
          <span className="truncate text-[#D4D4D4]">{url}</span>
        </div>

        <div className="flex items-center gap-2 text-[#888888]">
          {title && <span className="text-[11px] tracking-wider uppercase hidden sm:inline text-[#888888] font-mono">{title}</span>}
          <div className="w-1.5 h-1.5 rounded-full bg-[#333333]" />
        </div>
      </div>

      {/* Viewport Content */}
      <div className="relative overflow-hidden">
        {children}
      </div>
    </div>
  );
};

// Google Merchant Center Comparison Component
export const GoogleMerchantCenterComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'before' | 'after'>('both');

  return (
    <div className="space-y-6">
      {/* Metric Callout Banner */}
      <div className="p-6 md:p-8 rounded-xl bg-[#111111] border border-[#222222] relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-[#888888] text-xs font-mono tracking-widest uppercase mb-2">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Real Verified Outcome · Google Merchant Center</span>
            </div>
            <div className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white flex items-center gap-4">
              <span className="text-[#888888] line-through">0</span>
              <span className="text-white">→</span>
              <span className="text-white">57,679</span>
            </div>
            <p className="text-sm md:text-base text-[#888888] mt-2 max-w-2xl leading-relaxed">
              57,679 products approved in Google Merchant Center. Moved the account from total suspension (0 approved, 75,904 rejected) to active status with 57,679 approved items.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#0A0A0A] p-1 rounded-lg border border-[#222222] self-start lg:self-center">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-all ${
                activeTab === 'both' ? 'bg-white text-black font-semibold' : 'text-[#888888] hover:text-white'
              }`}
            >
              Side by Side
            </button>
            <button
              onClick={() => setActiveTab('before')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-all ${
                activeTab === 'before' ? 'bg-[#222222] text-white border border-[#333333]' : 'text-[#888888] hover:text-white'
              }`}
            >
              Before (0)
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-all ${
                activeTab === 'after' ? 'bg-[#222222] text-white border border-[#333333]' : 'text-[#888888] hover:text-white'
              }`}
            >
              After (57,679)
            </button>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className={`grid gap-6 ${activeTab === 'both' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 max-w-xl mx-auto'}`}>
        
        {/* BEFORE CARD */}
        {(activeTab === 'both' || activeTab === 'before') && (
          <div className="rounded-xl border border-[#222222] bg-[#0A0A0A] p-6 text-white shadow-lg relative overflow-hidden transition-all duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-[#222222] mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#333333] flex items-center justify-center text-white font-bold">
                  <span className="text-xs font-mono">GMC</span>
                </div>
                <div>
                  <h4 className="font-semibold text-base text-white">Google Merchant Center</h4>
                  <p className="text-xs text-[#888888]">Initial Status Prior to Intervention</p>
                </div>
              </div>
              <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded bg-[#181818] text-[#888888] border border-[#333333]">
                Suspended
              </span>
            </div>

            <div className="mb-4">
              <div className="text-xs text-[#888888] uppercase tracking-wider font-mono">Total Products</div>
              <div className="text-3xl font-bold font-display text-white mt-1">75,904</div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5 py-3 border-y border-[#222222] text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#333333]" />
                <span className="text-[#888888]">Approved:</span>
                <span className="font-bold text-white">0</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#333333]" />
                <span className="text-[#888888]">Limited:</span>
                <span className="font-bold text-white">0</span>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span className="text-[#888888]">Not Approved:</span>
                <span className="font-bold text-white">75,904</span>
              </div>
            </div>

            {/* Suspended Alert */}
            <div className="p-3.5 rounded-lg bg-[#141414] border border-[#2A2A2A] text-[#D4D4D4] text-xs leading-relaxed flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-medium mb-0.5">Google Merchant Center account suspended</strong>
                Initial audit showed total catalogue rejection due to missing shipping rates, policy attributes, and barcode schema compliance.
              </div>
            </div>
          </div>
        )}

        {/* AFTER CARD */}
        {(activeTab === 'both' || activeTab === 'after') && (
          <div className="rounded-xl border border-[#333333] bg-[#111111] p-6 text-white shadow-xl relative overflow-hidden transition-all duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-[#222222] mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#222222] border border-[#444444] flex items-center justify-center text-white font-bold">
                  <span className="text-xs font-mono">GMC</span>
                </div>
                <div>
                  <h4 className="font-semibold text-base text-white">Google Merchant Center</h4>
                  <p className="text-xs text-[#888888]">Post-Troubleshooting Status</p>
                </div>
              </div>
              <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded bg-white text-black border border-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-black" /> Active
              </span>
            </div>

            <div className="mb-4">
              <div className="text-xs text-[#888888] uppercase tracking-wider font-mono">Total Products</div>
              <div className="text-3xl font-bold font-display text-white mt-1">76,974</div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5 py-3 border-y border-[#222222] text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span className="text-[#888888]">Approved:</span>
                <span className="font-bold text-white text-base">57,679</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#333333]" />
                <span className="text-[#888888]">Limited:</span>
                <span className="font-bold text-white">0</span>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <span className="w-2 h-2 rounded-full bg-[#555555]" />
                <span className="text-[#888888]">Not Approved:</span>
                <span className="font-bold text-[#888888]">19,295</span>
                <span className="text-[11px] text-[#888888] ml-2 font-mono">(Majority Unblocked)</span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#141414] border border-[#2A2A2A] text-[#D4D4D4] text-xs leading-relaxed flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
              <span>Resolved catalog feed mapping, tax/shipping attributes, and account policy compliance.</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

// PageSpeed Report Component for G & M Tech
export const PageSpeedReportView: React.FC = () => {
  return (
    <div className="rounded-xl border border-[#222222] bg-[#111111] p-6 shadow-xl text-white">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#222222] gap-3 mb-6">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#888888]">Report from Oct 5, 2025, 2:29:42 PM</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm font-mono text-white bg-[#0A0A0A] px-2.5 py-1 rounded border border-[#222222]">https://gandmtech.com/</span>
            <span className="text-xs px-2 py-0.5 bg-[#181818] text-[#888888] border border-[#333333] rounded font-mono">Mobile View</span>
          </div>
        </div>
        <div className="text-xs text-[#888888] font-mono flex items-center gap-1.5 self-start sm:self-center">
          <ShieldCheck className="w-4 h-4 text-white" />
          <span className="text-white font-medium">Verified Audit Evidence</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {/* Performance */}
        <div className="p-4 rounded-lg bg-[#0A0A0A] border border-[#222222] flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#888888] flex items-center justify-center text-xl font-bold font-display text-white mb-2">
            74
          </div>
          <span className="text-xs text-[#888888] font-mono uppercase">Performance</span>
        </div>

        {/* Accessibility */}
        <div className="p-4 rounded-lg bg-[#0A0A0A] border border-[#222222] flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#D4D4D4] flex items-center justify-center text-xl font-bold font-display text-white mb-2">
            91
          </div>
          <span className="text-xs text-[#888888] font-mono uppercase">Accessibility</span>
        </div>

        {/* Best Practices */}
        <div className="p-4 rounded-lg bg-[#0A0A0A] border border-[#222222] flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-xl font-bold font-display text-white mb-2">
            100
          </div>
          <span className="text-xs text-[#888888] font-mono uppercase">Best Practices</span>
        </div>

        {/* SEO - Highlighted Circle */}
        <div className="p-4 rounded-lg bg-[#181818] border-2 border-white flex flex-col items-center justify-center relative">
          <div className="absolute -top-2.5 bg-white text-black text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full font-mono">
            Target Focus
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center text-xl font-bold font-display text-white mb-2 bg-[#111111]">
            100
          </div>
          <span className="text-xs text-white font-bold font-mono uppercase">SEO Audit</span>
        </div>
      </div>
    </div>
  );
};

// Shopify Smart SEO Evidence Table Component
interface SmartSeoTableProps {
  title: string;
  storeName: string;
  category: 'articles' | 'collections' | 'products' | 'audit';
  items: Array<{
    title: string;
    focusKeyword?: string;
    score: number;
    status?: string;
  }>;
}

export const SmartSeoTable: React.FC<SmartSeoTableProps> = ({
  title,
  storeName,
  category,
  items
}) => {
  return (
    <div className="rounded-xl border border-[#222222] bg-[#111111] overflow-hidden text-sm shadow-xl">
      {/* Header bar */}
      <div className="p-4 bg-[#0A0A0A] border-b border-[#222222] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="px-2 py-1 rounded bg-[#181818] text-white text-xs font-mono font-bold flex items-center gap-1 border border-[#333333]">
            <span className="text-xs">⚙️</span> Smart SEO
          </span>
          <span className="font-semibold text-white">{title}</span>
        </div>
        <div className="text-xs font-mono text-[#888888] flex items-center gap-2">
          <span>Store: <strong className="text-white">{storeName}</strong></span>
          <span className="text-[#333333]">|</span>
          <span className="text-[#D4D4D4]">Shopify Admin Evidence</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#222222] text-[11px] font-mono uppercase tracking-wider text-[#888888] bg-[#0A0A0A]">
              <th className="py-3 px-4">Item Title</th>
              {category !== 'audit' && <th className="py-3 px-4">Focus Keyword</th>}
              <th className="py-3 px-4 text-right">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#222222] text-xs">
            {items.map((item, idx) => (
              <tr key={idx} className="hover:bg-[#181818] transition-colors">
                <td className="py-3 px-4 font-medium text-[#F5F5F5] max-w-xs truncate">
                  {item.title}
                </td>
                {category !== 'audit' && (
                  <td className="py-3 px-4 text-[#888888] font-mono text-[11px]">
                    {item.focusKeyword || '—'}
                  </td>
                )}
                <td className="py-3 px-4 text-right">
                  {item.score >= 90 ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-black font-bold font-mono border border-white">
                      {item.score}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#181818] text-[#888888] font-bold font-mono border border-[#333333]">
                      {item.score}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

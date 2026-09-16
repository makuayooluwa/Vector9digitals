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
    <div className={`rounded-xl border border-[#222222] overflow-hidden bg-[#0D0D0D] shadow-2xl transition-all duration-300 ${className}`}>
      {/* Browser Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#141414] border-b border-[#222222] select-none text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
        </div>

        {/* Address Bar */}
        <div className="flex items-center justify-center gap-1.5 px-3 py-1 rounded bg-[#0A0A0A] border border-[#262626] text-[#A0A0A0] text-[11px] font-mono max-w-xs md:max-w-md w-full mx-4 truncate">
          <Lock className="w-3 h-3 text-[#888888] shrink-0" />
          <span className="truncate">{url}</span>
        </div>

        <div className="flex items-center gap-2 text-[#666666]">
          {title && <span className="text-[11px] tracking-wider uppercase hidden sm:inline">{title}</span>}
          <div className="w-2 h-2 rounded-full bg-[#222222]" />
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
      <div className="p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#121212] via-[#0E0E0E] to-[#0A0A0A] border border-[#262626] relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#6C63FF]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-[#6C63FF] text-xs font-mono tracking-widest uppercase mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Real Verified Outcome · Google Merchant Center</span>
            </div>
            <div className="text-4xl md:text-6xl font-bold font-display tracking-tight text-[#F5F5F2] flex items-center gap-4">
              <span className="text-[#666666] line-through decoration-[#FF5F56]/60">0</span>
              <span className="text-[#6C63FF]">→</span>
              <span className="text-[#F5F5F2]">57,679</span>
            </div>
            <p className="text-sm md:text-base text-[#9A9A9A] mt-2 max-w-2xl leading-relaxed">
              57,679 products approved in Google Merchant Center. Moved the account from total suspension (0 approved, 75,904 rejected) to active status with 57,679 approved items.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#161616] p-1 rounded-lg border border-[#262626] self-start lg:self-center">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-all ${
                activeTab === 'both' ? 'bg-[#262626] text-[#F5F5F2]' : 'text-[#888888] hover:text-[#F5F5F2]'
              }`}
            >
              Side by Side
            </button>
            <button
              onClick={() => setActiveTab('before')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-all ${
                activeTab === 'before' ? 'bg-[#FF5F56]/20 text-[#FF5F56] border border-[#FF5F56]/40' : 'text-[#888888] hover:text-[#F5F5F2]'
              }`}
            >
              Before (0)
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-all ${
                activeTab === 'after' ? 'bg-[#27C93F]/20 text-[#27C93F] border border-[#27C93F]/40' : 'text-[#888888] hover:text-[#F5F5F2]'
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
          <div className="rounded-xl border border-[#331818] bg-[#140E0E] p-6 text-[#F5F5F2] shadow-lg relative overflow-hidden transition-all duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-[#2A1616] mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#4285F4] flex items-center justify-center text-white font-bold shadow">
                  <span className="text-xl">🏷️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-base text-white">Google Merchant Center</h4>
                  <p className="text-xs text-[#999999]">Initial Status Prior to Intervention</p>
                </div>
              </div>
              <span className="px-2.5 py-1 text-xs font-semibold rounded bg-[#FF453A]/20 text-[#FF6961] border border-[#FF453A]/30">
                Error
              </span>
            </div>

            <div className="mb-4">
              <div className="text-xs text-[#888888] uppercase tracking-wider font-mono">Total Products</div>
              <div className="text-3xl font-bold font-display text-white mt-1">75,904</div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5 py-3 border-y border-[#2A1616] text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="text-[#888888]">Approved:</span>
                <span className="font-bold text-[#FF6961]">0</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C]" />
                <span className="text-[#888888]">Limited:</span>
                <span className="font-bold text-white">0</span>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF453A]" />
                <span className="text-[#888888]">Not Approved:</span>
                <span className="font-bold text-[#FF6961]">75,904</span>
              </div>
            </div>

            {/* Suspended Alert */}
            <div className="p-3.5 rounded-lg bg-[#261212] border border-[#441C1C] text-[#FFB3B0] text-xs leading-relaxed flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#FF453A] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-medium mb-0.5">Your Google Merchant Center account is suspended</strong>
                To resolve your suspension, you need to go to Google Merchant Center and contact Google support.
              </div>
            </div>
          </div>
        )}

        {/* AFTER CARD */}
        {(activeTab === 'both' || activeTab === 'after') && (
          <div className="rounded-xl border border-[#1C3322] bg-[#0E1611] p-6 text-[#F5F5F2] shadow-xl relative overflow-hidden transition-all duration-300 ring-1 ring-[#27C93F]/20">
            <div className="flex items-center justify-between pb-4 border-b border-[#1A2A1E] mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#4285F4] flex items-center justify-center text-white font-bold shadow">
                  <span className="text-xl">🏷️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-base text-white">Google Merchant Center</h4>
                  <p className="text-xs text-[#82B390]">Post-Troubleshooting Status</p>
                </div>
              </div>
              <span className="px-2.5 py-1 text-xs font-semibold rounded bg-[#34C759]/20 text-[#34C759] border border-[#34C759]/40 flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3" /> Active
              </span>
            </div>

            <div className="mb-4">
              <div className="text-xs text-[#82B390] uppercase tracking-wider font-mono">Total Products</div>
              <div className="text-3xl font-bold font-display text-white mt-1">76,974</div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5 py-3 border-y border-[#1A2A1E] text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#34C759] animate-pulse" />
                <span className="text-[#A3CCA3]">Approved:</span>
                <span className="font-bold text-[#34C759] text-base">57,679</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C]" />
                <span className="text-[#888888]">Limited:</span>
                <span className="font-bold text-white">0</span>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF453A]" />
                <span className="text-[#888888]">Not Approved:</span>
                <span className="font-bold text-[#E5A93C]">19,295</span>
                <span className="text-[11px] text-[#6E8873] ml-2">(Unblocked majority)</span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#142318] border border-[#1E3A24] text-[#B8E2C0] text-xs leading-relaxed flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#34C759] shrink-0" />
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
    <div className="rounded-xl border border-[#222222] bg-[#0F0F12] p-6 shadow-xl text-[#F5F5F2]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#222222] gap-3 mb-6">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#9A9A9A]">Report from Oct 5, 2025, 2:29:42 PM</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm font-mono text-white bg-[#1A1A1E] px-2.5 py-1 rounded border border-[#2A2A30]">https://gandmtech.com/</span>
            <span className="text-xs px-2 py-0.5 bg-[#4285F4]/20 text-[#6BA5FF] rounded">Mobile View</span>
          </div>
        </div>
        <div className="text-xs text-[#A5A0FF] font-mono flex items-center gap-1.5 self-start sm:self-center">
          <ShieldCheck className="w-4 h-4" />
          <span>Verified Audit Evidence</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {/* Performance */}
        <div className="p-4 rounded-lg bg-[#141418] border border-[#222226] flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full border-4 border-[#FFAA00] flex items-center justify-center text-xl font-bold font-display text-[#FFAA00] mb-2 shadow-[0_0_15px_rgba(255,170,0,0.15)]">
            74
          </div>
          <span className="text-xs text-[#9A9A9A] font-medium">Performance</span>
        </div>

        {/* Accessibility */}
        <div className="p-4 rounded-lg bg-[#141418] border border-[#222226] flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full border-4 border-[#27C93F] flex items-center justify-center text-xl font-bold font-display text-[#27C93F] mb-2 shadow-[0_0_15px_rgba(39,201,63,0.15)]">
            91
          </div>
          <span className="text-xs text-[#9A9A9A] font-medium">Accessibility</span>
        </div>

        {/* Best Practices */}
        <div className="p-4 rounded-lg bg-[#141418] border border-[#222226] flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full border-4 border-[#27C93F] flex items-center justify-center text-xl font-bold font-display text-[#27C93F] mb-2 shadow-[0_0_15px_rgba(39,201,63,0.15)]">
            100
          </div>
          <span className="text-xs text-[#9A9A9A] font-medium">Best Practices</span>
        </div>

        {/* SEO - Highlighted Circle */}
        <div className="p-4 rounded-lg bg-[#132216] border-2 border-[#27C93F]/50 flex flex-col items-center justify-center relative shadow-[0_0_20px_rgba(39,201,63,0.2)]">
          <div className="absolute -top-2.5 bg-[#27C93F] text-black text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
            Target Focus
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-[#27C93F] flex items-center justify-center text-xl font-bold font-display text-[#27C93F] mb-2 bg-[#27C93F]/10">
            100
          </div>
          <span className="text-xs text-[#A0D4A0] font-bold">SEO Audit</span>
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
    <div className="rounded-xl border border-[#222222] bg-[#0E0E10] overflow-hidden text-sm shadow-xl">
      {/* Header bar */}
      <div className="p-4 bg-[#141417] border-b border-[#222222] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="px-2 py-1 rounded bg-[#008060]/20 text-[#20C070] text-xs font-mono font-bold flex items-center gap-1 border border-[#008060]/40">
            <span className="text-xs">⚙️</span> Smart SEO
          </span>
          <span className="font-semibold text-white">{title}</span>
        </div>
        <div className="text-xs font-mono text-[#888888] flex items-center gap-2">
          <span>Store: <strong className="text-white">{storeName}</strong></span>
          <span className="text-[#333333]">|</span>
          <span className="text-[#A5A0FF]">Shopify Admin Evidence</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#1E1E22] text-[11px] font-mono uppercase tracking-wider text-[#777777] bg-[#0A0A0C]">
              <th className="py-3 px-4">Item Title</th>
              {category !== 'audit' && <th className="py-3 px-4">Focus Keyword</th>}
              <th className="py-3 px-4 text-right">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#17171A] text-xs">
            {items.map((item, idx) => (
              <tr key={idx} className="hover:bg-[#141418] transition-colors">
                <td className="py-3 px-4 font-medium text-[#F5F5F2] max-w-xs truncate">
                  {item.title}
                </td>
                {category !== 'audit' && (
                  <td className="py-3 px-4 text-[#A0A0A0] font-mono text-[11px]">
                    {item.focusKeyword || '—'}
                  </td>
                )}
                <td className="py-3 px-4 text-right">
                  {item.score >= 90 ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#27C93F]/15 text-[#27C93F] font-bold font-mono border border-[#27C93F]/30">
                      {item.score}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FF9500]/15 text-[#FF9500] font-bold font-mono border border-[#FF9500]/30">
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

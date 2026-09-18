import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Clock, Shield } from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: 'Shopify Store Design & Build',
    budget: '$5,000 - $10,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate brief client submission state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Context & Expectations */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#888888] tracking-widest uppercase mb-3">
                <span>INQUIRIES</span>
                <span>·</span>
                <span>START A PROJECT</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tight text-[#FFFFFF] leading-[1.08]">
                HAVE SOMETHING <br />
                WORTH BUILDING?
              </h2>
            </div>

            <p className="text-base text-[#888888] leading-relaxed">
              Tell us about your store, product or digital goals. We review all inquiries carefully and provide direct, pragmatic feedback on scope and feasibility.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#1C1C1C] text-xs font-mono text-[#888888]">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-white" />
                <span>RESPONSE TIME: WITHIN 24 BUSINESS HOURS</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-white" />
                <span>NDA & CONFIDENTIALITY PROTECTED</span>
              </div>
            </div>

            {/* Direct Contact & Socials */}
            <div className="p-6 rounded-xl bg-[#0D0D0D] border border-[#1E1E1E] space-y-5">
              <div>
                <span className="text-[11px] font-mono text-[#777777] uppercase tracking-wider block mb-2">
                  DIRECT EMAIL
                </span>
                <a
                  href="mailto:vector9digitals@gmail.com"
                  aria-label="Send email to vector9digitals@gmail.com"
                  className="text-base sm:text-lg font-mono font-medium text-white hover:text-[#D4D4D4] transition-colors flex items-center gap-2"
                >
                  <span>vector9digitals@gmail.com</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </a>
              </div>

              <div className="pt-4 border-t border-[#1A1A1A]">
                <span className="text-[11px] font-mono text-[#777777] uppercase tracking-wider block mb-2">
                  OFFICIAL CHANNELS
                </span>
                <div className="flex items-center gap-6 font-mono text-xs">
                  <a
                    href="https://www.instagram.com/vector9digitals/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Vector9 Digitals on Instagram"
                    className="text-[#CCCCCC] hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </a>
                  <a
                    href="https://x.com/vector9digitals"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Vector9 Digitals on X"
                    className="text-[#CCCCCC] hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>X</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#222222] bg-[#111111] p-8 sm:p-10 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#181818] border border-[#333333] flex items-center justify-center mx-auto text-white">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-display text-white">Inquiry Received</h3>
                    <p className="text-sm text-[#888888] max-w-md mx-auto">
                      Thank you for reaching out, {formData.name || 'there'}. A Vector9 partner will review your project requirements and follow up within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        projectType: 'Shopify Store Design & Build',
                        budget: '$5,000 - $10,000',
                        message: ''
                      });
                    }}
                    className="text-xs font-mono text-white underline hover:text-[#D4D4D4]"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#999999]">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        required
                        type="text"
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-[#262626] text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-[#555555]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#999999]">
                        Work Email *
                      </label>
                      <input
                        id="contact-email"
                        required
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-[#262626] text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-[#555555]"
                      />
                    </div>
                  </div>

                  {/* Company & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-company" className="block text-xs font-mono uppercase tracking-wider text-[#999999]">
                        Company / Brand Name
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        placeholder="e.g. Modern Goods"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-[#262626] text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-[#555555]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact-project-type" className="block text-xs font-mono uppercase tracking-wider text-[#999999]">
                        Primary Need
                      </label>
                      <select
                        id="contact-project-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-[#262626] text-white text-sm focus:outline-none focus:border-white transition-colors"
                      >
                        <option value="Shopify Store Design & Build">Shopify Store Design & Build</option>
                        <option value="Store Optimization / CRO">Store Optimization / CRO</option>
                        <option value="SEO, Content & Google Merchant Center">SEO, Content & Google Merchant Center</option>
                        <option value="Complete E-Commerce Redesign">Complete E-Commerce Redesign</option>
                        <option value="UI/UX & Web Development">UI/UX & Web Development</option>
                        <option value="Other Scope">Other Scope</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#999999]">
                      Estimated Investment Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['$3k - $5k', '$5k - $10k', '$10k - $25k', '$25k+'].map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: tier })}
                          className={`py-2.5 px-3 text-xs font-mono rounded border transition-all ${
                            formData.budget === tier
                              ? 'bg-white text-black border-white font-semibold shadow-sm'
                              : 'bg-[#141414] text-[#888888] border-[#262626] hover:border-white hover:text-white'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#999999]">
                      Project Scope & Objectives *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Share details about your store, timeline, current platform and target business outcomes..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-[#262626] text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-[#555555] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full py-4 rounded-lg bg-white hover:bg-black text-black hover:text-white border border-white font-semibold font-display text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white transition-colors" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#666666] font-mono">
                    All project data is treated under strict confidentiality.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

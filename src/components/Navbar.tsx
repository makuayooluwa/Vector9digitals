import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string, sectionId?: string) => {
    setMobileMenuOpen(false);
    if (currentPath === '/' && sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1E1E1E]'
          : 'py-6 md:py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => navigate('/')}
          className="group text-left flex flex-col focus:outline-none"
        >
          <span className="font-display font-bold text-lg md:text-xl tracking-tight text-[#F5F5F5] flex items-center gap-1.5 group-hover:text-white transition-colors">
            VECTOR9
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white" />
          </span>
          <span className="text-[10px] tracking-[0.25em] font-mono uppercase text-[#888888]">
            DIGITALS
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button
            onClick={() => handleNavClick('/work', 'work')}
            className={`transition-colors pb-0.5 ${
              currentPath.startsWith('/work')
                ? 'text-white border-b border-white'
                : 'text-[#888888] hover:text-white'
            }`}
          >
            Work
          </button>
          <button
            onClick={() => handleNavClick('/services', 'services')}
            className={`transition-colors pb-0.5 ${
              currentPath === '/services'
                ? 'text-white border-b border-white'
                : 'text-[#888888] hover:text-white'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick('/about', 'about')}
            className={`transition-colors pb-0.5 ${
              currentPath === '/about'
                ? 'text-white border-b border-white'
                : 'text-[#888888] hover:text-white'
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('/contact', 'contact')}
            className={`transition-colors pb-0.5 ${
              currentPath === '/contact'
                ? 'text-white border-b border-white'
                : 'text-[#888888] hover:text-white'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('/contact', 'contact')}
            className="group flex items-center gap-2 text-xs font-mono tracking-wider uppercase px-4 py-2.5 rounded border border-[#333333] hover:border-white bg-[#111111] hover:bg-white text-white hover:text-black transition-all duration-200"
          >
            <span>Start a project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F5F5F5] hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#0A0A0A] border-b border-[#222222] px-6 py-8 shadow-2xl flex flex-col gap-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-lg font-display">
            <button
              onClick={() => handleNavClick('/work', 'work')}
              className="text-left text-[#F5F5F5] hover:text-white py-2 border-b border-[#1A1A1A] flex items-center justify-between"
            >
              <span>Work</span>
              <span className="text-xs font-mono text-[#888888]">V9 / 01</span>
            </button>
            <button
              onClick={() => handleNavClick('/services', 'services')}
              className="text-left text-[#F5F5F5] hover:text-white py-2 border-b border-[#1A1A1A] flex items-center justify-between"
            >
              <span>Services</span>
              <span className="text-xs font-mono text-[#888888]">V9 / 02</span>
            </button>
            <button
              onClick={() => handleNavClick('/about', 'about')}
              className="text-left text-[#F5F5F5] hover:text-white py-2 border-b border-[#1A1A1A] flex items-center justify-between"
            >
              <span>About</span>
              <span className="text-xs font-mono text-[#888888]">Agency</span>
            </button>
            <button
              onClick={() => handleNavClick('/contact', 'contact')}
              className="text-left text-[#F5F5F5] hover:text-white py-2 border-b border-[#1A1A1A] flex items-center justify-between"
            >
              <span>Contact</span>
              <span className="text-xs font-mono text-[#888888]">Inquiry</span>
            </button>
          </nav>

          <button
            onClick={() => handleNavClick('/contact', 'contact')}
            className="group flex items-center justify-center gap-2 text-sm font-mono tracking-wider uppercase py-3 rounded bg-white hover:bg-black text-black hover:text-white border border-white font-semibold transition-all"
          >
            <span>Start a project</span>
            <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white transition-colors" />
          </button>
        </div>
      )}
    </header>
  );
};

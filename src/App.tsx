import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WorkIndexPage } from './pages/WorkIndexPage';
import { HabitatRenewalCaseStudy } from './pages/HabitatRenewalCaseStudy';
import { GandMTechCaseStudy } from './pages/GandMTechCaseStudy';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Route resolution
  const renderCurrentView = () => {
    const cleanPath = currentPath.replace(/\/$/, '') || '/';

    switch (cleanPath) {
      case '/':
        return <HomePage navigate={navigate} />;
      case '/work':
        return <WorkIndexPage navigate={navigate} />;
      case '/work/habitat-renewal':
        return <HabitatRenewalCaseStudy navigate={navigate} />;
      case '/work/gandm-tech':
        return <GandMTechCaseStudy navigate={navigate} />;
      case '/services':
        return <ServicesPage navigate={navigate} />;
      case '/about':
        return <AboutPage navigate={navigate} />;
      case '/contact':
        return <ContactPage />;
      default:
        // If unknown route, default to HomePage
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F2] flex flex-col font-sans selection:bg-[#6C63FF] selection:text-white">
      {/* Persistent Minimal Sticky Navigation */}
      <Navbar currentPath={currentPath} navigate={navigate} />

      {/* Primary Page Content */}
      <div className="flex-1">
        {renderCurrentView()}
      </div>

      {/* Persistent Editorial Footer */}
      <Footer navigate={navigate} />
    </div>
  );
}

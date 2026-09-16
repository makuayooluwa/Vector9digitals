import React, { useEffect } from 'react';
import { ContactSection } from '../components/ContactSection';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 md:pt-36 pb-20 text-[#F5F5F2]">
      <ContactSection />
    </div>
  );
};

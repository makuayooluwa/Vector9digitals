import React from 'react';
import { Hero } from '../components/Hero';
import { SelectedWork } from '../components/SelectedWork';
import { Services } from '../components/Services';
import { Approach } from '../components/Approach';
import { WhyVector9 } from '../components/WhyVector9';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <main>
      <Hero navigate={navigate} />
      <SelectedWork navigate={navigate} />
      <Services navigate={navigate} />
      <Approach />
      <WhyVector9 />
      <AboutSection navigate={navigate} />
      <ContactSection />
    </main>
  );
};

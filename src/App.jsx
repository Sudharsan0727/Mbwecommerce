import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import FeatureSection from './components/FeatureSection';
import FeatureStack from './components/FeatureStack';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';
import WhySection from './components/WhySection';
import TechStackSection from './components/TechStackSection';
import TestimonialSection from './components/TestimonialSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      <Navbar onOpenDemo={() => setIsDemoModalOpen(true)} />
      <main>
        <Hero />
        <Showcase />
        <VideoSection />
        <Pricing />
        <WhySection />
        <FeatureSection />
        <FeatureStack />
        <TechStackSection />
        <TestimonialSection />
        <FaqSection />
      </main>
      <Footer onOpenDemo={() => setIsDemoModalOpen(true)} />
      
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </div>
  );
}

export default App;

'use client';

import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BackgroundElements from '@/components/BackgroundElements';
import VDOgateSection from '@/components/VDOgateSection';
import AmbassadorBenefitsSection from '@/components/AmbassadorBenefitsSection';
import PerksForAmbassadors from '@/components/PerksForAmbassadors';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden" style={{ background: '#ffffff' }}>
        <BackgroundElements />
        <Header />
        <HeroSection />
      </div>

      {/* VDOgate Section */}
      <VDOgateSection />

      {/* Ambassador Benefits Section */}
      <AmbassadorBenefitsSection />

      {/* Perks for Ambassadors Section */}
      <PerksForAmbassadors />

      {/* Footer */}
      <Footer />
    </div>
  );
}

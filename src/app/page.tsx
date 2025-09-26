'use client';

import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BackgroundElements from '@/components/BackgroundElements';
import VDOgateSection from '@/components/VDOgateSection';
import AmbassadorBenefitsSection from '@/components/AmbassadorBenefitsSection';

export default function Home() {
  const handleRegisterClick = () => {
    console.log('Register button clicked');
  };

  return (
    <div className="relative w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden" style={{ background: '#ffffff' }}>
        <BackgroundElements />
        <Header onRegisterClick={handleRegisterClick} />
        <HeroSection />
      </div>

      {/* VDOgate Section */}
      <VDOgateSection />

      {/* Ambassador Benefits Section */}
      <AmbassadorBenefitsSection />
    </div>
  );
}

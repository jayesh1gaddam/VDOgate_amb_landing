// components/HeroSection.tsx - Production-ready hero section with exact Figma design

import React from 'react';
import Image from 'next/image';
import { HeroSectionProps } from '@/types';
import { FIGMA_ASSETS, FIGMA_POSITIONS } from '@/constants/design';

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <>
      {/* Desktop Hero - Exact Figma positioning (1024px+) */}
      <div className={`desktop-exact mobile-hidden tablet-hidden relative w-full h-screen bg-transparent ${className}`}>
        {/* Hero Content - Exact Figma text and elements */}
        <div
          className="absolute"
          style={{
            left: FIGMA_POSITIONS.heroContent.left,
            top: FIGMA_POSITIONS.heroContent.top,
            width: FIGMA_POSITIONS.heroContent.width,
            height: FIGMA_POSITIONS.heroContent.height,
            zIndex: 5,
          }}
        >
        {/* Main Text Container */}
        <div
          className="absolute flex flex-col items-start text-black"
          style={{
            left: '0px',
            top: '0px',
            width: '443px',
          }}
        >
          {/* Title with overlapping layout */}
          <div
            className="relative inline-grid leading-[0] place-items-start shrink-0 whitespace-nowrap"
            style={{
              gridTemplateColumns: 'max-content',
              gridTemplateRows: 'max-content',
              letterSpacing: '0.44px',
            }}
          >
            <p
              className="relative text-black m-0"
              style={{
                gridArea: '1 / 1',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 700,
                fontSize: '44px',
                lineHeight: 1.15,
                whiteSpace: 'pre',
              }}
            >
              Become a
            </p>
            <div
              className="relative"
              style={{
                gridArea: '1 / 1',
                marginLeft: '0px',
                marginTop: '41px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                lineHeight: 1.32,
                fontSize: '0px',
                whiteSpace: 'pre',
              }}
            >
              <p className="mb-0 text-[100px]">
                <span className="text-[#f7682b] font-bold">VDO</span>
                <span className="text-[#463dc7] font-bold">gate</span>
              </p>
              <p className="text-[60px] text-black font-bold m-0">AMBASSADOR</p>
            </div>
          </div>

          {/* Subtitle */}
          <p
            className="relative shrink-0 text-black"
            style={{
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: 1.32,
              letterSpacing: '0.2px',
              width: '378px',
              marginTop: '20px',
            }}
          >
            Be Part of India&apos;s Most Exclusive Creator Economy Leadership Program
          </p>
        </div>

        {/* Gold Stars */}
        <div
          className="absolute"
          style={{
            left: '233px',
            top: '3px',
            width: '44px',
            height: '44px',
          }}
        >
          <Image
            src="/assets/gold_star.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div
          className="absolute"
          style={{
            left: '284px',
            top: '3px',
            width: '44px',
            height: '44px',
          }}
        >
          <Image
            src="/assets/gold_star.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div
          className="absolute"
          style={{
            left: '335px',
            top: '3px',
            width: '44px',
            height: '44px',
          }}
        >
          <Image
            src="/assets/gold_star.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Hero Graphics PNG - Exact Figma positioning */}
      <div
        className="absolute"
        style={{
          left: FIGMA_POSITIONS.heroGraphic.left,
          top: FIGMA_POSITIONS.heroGraphic.top,
          width: FIGMA_POSITIONS.heroGraphic.width,
          height: FIGMA_POSITIONS.heroGraphic.height,
          zIndex: 4,
        }}
      >
        <Image
          src={FIGMA_ASSETS.heroGraphic}
          alt="VDOgate Ambassador Hero Graphics"
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      {/* Primary CTA Button - SECURE YOUR SPOT NOW */}
      <button
        onClick={() => window.open('https://form.typeform.com/to/paosFBoY', '_blank')}
        className="absolute bg-[#f7682b] rounded-[20px] border-none cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-0.5
                   hover:shadow-[0px_0px_12.1px_0px_rgba(0,0,0,0.25),0_8px_25px_rgba(247,104,43,0.3)]
                   shadow-[0px_-4px_4px_0px_inset_rgba(255,252,242,0.31)]"
        style={{
          left: FIGMA_POSITIONS.heroCTAPrimary.left,
          top: FIGMA_POSITIONS.heroCTAPrimary.top,
          width: FIGMA_POSITIONS.heroCTAPrimary.width,
          height: FIGMA_POSITIONS.heroCTAPrimary.height,
          padding: '12px 87px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: 1.15,
          letterSpacing: '0.2px',
          color: '#ffffff',
          zIndex: 6,
        }}
      >
        SECURE YOUR SPOT NOW
      </button>

      {/* Secondary CTA Button - EXCLUSIVE OPPORTUNITY */}
      <button
        onClick={() => window.open('https://form.typeform.com/to/paosFBoY', '_blank')}
        className="absolute bg-[rgba(255,255,255,0.1)] rounded-[20px] border-[0.5px] border-solid border-[#f7682b] cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-0.5"
        style={{
          left: FIGMA_POSITIONS.heroCTASecondary.left,
          top: FIGMA_POSITIONS.heroCTASecondary.top,
          width: FIGMA_POSITIONS.heroCTASecondary.width,
          height: FIGMA_POSITIONS.heroCTASecondary.height,
          padding: '12px 36px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: 1.15,
          letterSpacing: '0.16px',
          color: '#f7682b',
          zIndex: 6,
        }}
      >
        EXCLUSIVE OPPORTUNITY | LIMITED SPOTS
      </button>
      </div>

      {/* Tablet Hero (768px - 1023px) */}
      <div className={`desktop-hidden mobile-hidden tablet-visible relative w-full h-screen bg-transparent ${className}`}>
        <div className="responsive-container h-full flex flex-col justify-center items-center text-center pt-20 pb-16">

          {/* Main Content Container */}
          <div className="max-w-4xl mx-auto space-y-6">

            {/* Title Section */}
            <div className="space-y-4">
              <h1 className="text-responsive-4xl font-bold text-black leading-tight">
                Become a
              </h1>
              <div className="space-y-2">
                <h2 className="text-6xl md:text-7xl font-bold leading-none">
                  <span className="text-[#f7682b]">VDO</span>
                  <span className="text-[#463dc7]">gate</span>
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-black">
                  AMBASSADOR
                </h3>
              </div>
            </div>

            {/* Gold Stars */}
            <div className="flex justify-center space-x-3 py-4">
              <div className="w-8 h-8 relative">
                <Image
                  src="/assets/gold_star.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-8 h-8 relative">
                <Image
                  src="/assets/gold_star.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-8 h-8 relative">
                <Image
                  src="/assets/gold_star.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-responsive-lg text-black max-w-2xl mx-auto leading-relaxed">
              Be Part of India&apos;s Most Exclusive Creator Economy Leadership Program
            </p>

            {/* Hero Graphics - Visible on Tablet */}
            <div className="flex justify-center py-6">
              <div className="relative w-80 h-80">
                <Image
                  src={FIGMA_ASSETS.heroGraphic}
                  alt="VDOgate Ambassador Hero Graphics"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <button
                onClick={() => window.open('https://form.typeform.com/to/paosFBoY', '_blank')}
                className="bg-[#f7682b] text-white font-bold px-8 py-4 rounded-[16px]
                               shadow-[0px_4px_12px_0px_rgba(247,104,43,0.3)]
                               transition-all duration-300 hover:transform hover:-translate-y-1
                               text-lg whitespace-nowrap no-touch-hover">
                SECURE YOUR SPOT NOW
              </button>
              <button
                onClick={() => window.open('https://form.typeform.com/to/paosFBoY', '_blank')}
                className="bg-[rgba(255,255,255,0.1)] border border-[#f7682b] text-[#f7682b]
                               font-bold px-6 py-4 rounded-[16px]
                               transition-all duration-300 hover:transform hover:-translate-y-1
                               text-sm whitespace-nowrap no-touch-hover">
                EXCLUSIVE OPPORTUNITY | LIMITED SPOTS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Hero (320px - 767px) */}
      <div className={`desktop-hidden tablet-hidden mobile-visible relative w-full h-screen bg-transparent ${className}`}>
        <div className="px-4 h-full flex flex-col justify-center items-center text-center safe-area-inset">

          {/* Main Content Container */}
          <div className="relative z-10 w-full max-w-sm mx-auto space-y-3">

            {/* Title Section */}
            <div className="space-y-1">
              <h1 className="text-4xl font-black text-black leading-none">
                Become a
              </h1>
              <div className="space-y-0">
                <h2 className="text-6xl font-black leading-none">
                  <span className="text-[#f7682b]">VDO</span>
                  <span className="text-[#463dc7]">gate</span>
                </h2>
                <h3 className="text-4xl font-black text-black leading-none">
                  AMBASSADOR
                </h3>
              </div>
            </div>

            {/* Gold Stars */}
            <div className="flex justify-center space-x-2 py-1">
              <div className="w-5 h-5 relative">
                <Image
                  src="/assets/gold_star.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-5 h-5 relative">
                <Image
                  src="/assets/gold_star.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-5 h-5 relative">
                <Image
                  src="/assets/gold_star.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-black leading-tight">
              Be Part of India&apos;s Most Exclusive Creator Economy Leadership Program
            </p>

            {/* Hero Graphics - Visible on Mobile */}
            <div className="flex justify-center py-2">
              <div className="relative w-48 h-48">
                <Image
                  src={FIGMA_ASSETS.heroGraphic}
                  alt="VDOgate Ambassador Hero Graphics"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => window.open('https://form.typeform.com/to/paosFBoY', '_blank')}
                className="w-full bg-[#f7682b] text-white font-bold px-6 py-4 rounded-[12px]
                               shadow-[0px_4px_12px_0px_rgba(247,104,43,0.3)]
                               transition-all duration-300 hover:transform hover:-translate-y-1
                               text-lg touch-action-manipulation no-touch-hover">
                SECURE YOUR SPOT NOW
              </button>
              <button
                onClick={() => window.open('https://form.typeform.com/to/paosFBoY', '_blank')}
                className="w-full bg-[rgba(255,255,255,0.1)] border border-[#f7682b] text-[#f7682b]
                               font-bold px-4 py-3 rounded-[12px]
                               transition-all duration-300 hover:transform hover:-translate-y-1
                               text-base touch-action-manipulation no-touch-hover">
                EXCLUSIVE OPPORTUNITY
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
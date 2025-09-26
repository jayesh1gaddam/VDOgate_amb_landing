// components/HeroSection.tsx - Production-ready hero section with exact Figma design

import React from 'react';
import Image from 'next/image';
import { HeroSectionProps } from '@/types';
import { FIGMA_ASSETS, FIGMA_POSITIONS } from '@/constants/design';

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-screen bg-transparent ${className}`}>
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
            Be Part of India's Most Exclusive Creator Economy Leadership Program
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
  );
};

export default HeroSection;
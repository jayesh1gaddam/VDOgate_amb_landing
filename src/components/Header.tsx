// components/Header.tsx - Professional responsive header component

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { HeaderProps } from '@/types';
import { FIGMA_ASSETS, FIGMA_POSITIONS, FIGMA_COLORS } from '@/constants/design';

const Header: React.FC<HeaderProps> = ({ onRegisterClick = () => {} }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Header - Exact Figma positioning (1024px+) */}
      <div className="desktop-exact mobile-hidden tablet-hidden">
        <div
          className="absolute bg-[#fffcf2] rounded-[20px] shadow-[0px_0px_12.1px_0px_rgba(0,0,0,0.25)]"
          style={{
            top: FIGMA_POSITIONS.header.top,
            left: FIGMA_POSITIONS.header.left,
            width: FIGMA_POSITIONS.header.width,
            height: FIGMA_POSITIONS.header.height,
          }}
        >
          <div
            className="absolute bg-[#fffcf2] rounded-[10px] flex items-center justify-center"
            style={{
              left: '27px',
              top: '0px',
              padding: '4px 8px',
              height: '50px',
            }}
          >
            <div
              className="relative"
              style={{
                width: '135px',
                height: '34px',
              }}
            >
              <Image
                src={FIGMA_ASSETS.logo}
                alt="VDOgate Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            console.log('Desktop header register button clicked');
            window.open('https://form.typeform.com/to/paosFBoY', '_blank');
          }}
          className="absolute bg-[#f7682b] rounded-[20px] shadow-[0px_0px_12.1px_0px_rgba(0,0,0,0.25)]
                     border-none cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-0.5
                     hover:shadow-[0px_0px_12.1px_0px_rgba(0,0,0,0.25),0_8px_25px_rgba(247,104,43,0.3)]"
          style={{
            top: FIGMA_POSITIONS.registerButton.top,
            left: FIGMA_POSITIONS.registerButton.left,
            height: FIGMA_POSITIONS.registerButton.height,
            padding: '9.5px 45px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: 1.23,
            letterSpacing: '0.24px',
            color: FIGMA_COLORS.text.white,
            whiteSpace: 'nowrap',
            zIndex: 100,
          }}
        >
          REGISTER NOW
        </button>
      </div>

      {/* Tablet Header (768px - 1023px) */}
      <div className="desktop-hidden mobile-hidden tablet-visible">
        <div className="absolute top-6 left-6 right-6 bg-[#fffcf2] rounded-[16px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)] h-16 flex items-center justify-between px-6 z-50">
          <div className="flex items-center">
            <div className="relative w-36 h-9">
              <Image
                src={FIGMA_ASSETS.logo}
                alt="VDOgate Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <button
            onClick={() => {
              console.log('Tablet header register button clicked');
              window.open('https://form.typeform.com/to/paosFBoY', '_blank');
            }}
            className="bg-[#f7682b] rounded-[14px] shadow-[0px_2px_8px_0px_rgba(247,104,43,0.3)]
                       border-none cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-0.5
                       px-6 py-3 text-white font-bold text-lg no-touch-hover"
            style={{ zIndex: 100 }}
          >
            REGISTER NOW
          </button>
        </div>
      </div>

      {/* Mobile Header (320px - 767px) */}
      <div className="desktop-hidden tablet-hidden mobile-visible">
        <div className="absolute top-4 left-4 right-4 bg-[#fffcf2] rounded-[14px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.1)] h-14 flex items-center justify-between px-4 z-50 safe-area-inset">
          <div className="flex items-center justify-start">
            <div className="relative mobile-preserve">
              <Image
                src={FIGMA_ASSETS.logo}
                alt="VDOgate Logo"
                width={96}
                height={24}
                className="object-contain"
                priority
                style={{ maxWidth: '96px', height: 'auto' }}
              />
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors touch-action-manipulation"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`h-0.5 w-6 bg-gray-600 transition-all duration-300 transform origin-center ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`h-0.5 w-6 bg-gray-600 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`h-0.5 w-6 bg-gray-600 transition-all duration-300 transform origin-center ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`absolute top-20 left-4 right-4 bg-[#fffcf2] rounded-[14px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)] transition-all duration-300 z-40 safe-area-inset ${
          isMobileMenuOpen
            ? 'opacity-100 visible transform translate-y-0'
            : 'opacity-0 invisible transform -translate-y-2'
        }`}>
          <div className="p-4">
            <button
              onClick={() => {
                console.log('Mobile header register button clicked');
                window.open('https://form.typeform.com/to/paosFBoY', '_blank');
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-[#f7682b] rounded-[12px] shadow-[0px_2px_8px_0px_rgba(247,104,43,0.3)]
                         border-none cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-0.5
                         py-4 px-6 text-white font-bold text-lg touch-action-manipulation no-touch-hover"
              style={{ zIndex: 100 }}
            >
              REGISTER NOW
            </button>
          </div>
        </div>

        {/* Backdrop */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-20 z-30 transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>

      {/* Sticky Header on Scroll - Exact Match to Original Headers */}

      {/* Desktop Sticky Header (1024px+) */}
      <div className={`desktop-exact mobile-hidden tablet-hidden fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out z-[200] ${
        isScrolled
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex items-center justify-between mx-12 mt-4 relative">
          <div className="bg-[#fffcf2] rounded-[20px] shadow-[0px_0px_12.1px_0px_rgba(0,0,0,0.25)] px-8 py-2 flex items-center">
            <div className="relative w-32 h-8">
              <Image
                src={FIGMA_ASSETS.logo}
                alt="VDOgate Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <button
            onClick={() => {
              console.log('Sticky desktop header register button clicked');
              window.open('https://form.typeform.com/to/paosFBoY', '_blank');
            }}
            className="bg-[#f7682b] rounded-[20px] shadow-[0px_0px_12.1px_0px_rgba(0,0,0,0.25)]
                       border-none cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-0.5
                       hover:shadow-[0px_0px_12.1px_0px_rgba(0,0,0,0.25),0_8px_25px_rgba(247,104,43,0.3)]"
            style={{
              padding: '9.5px 45px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: 1.23,
              letterSpacing: '0.24px',
              color: FIGMA_COLORS.text.white,
              whiteSpace: 'nowrap',
            }}
          >
            REGISTER NOW
          </button>
        </div>
      </div>

      {/* Tablet Sticky Header (768px - 1023px) */}
      <div className={`desktop-hidden mobile-hidden tablet-visible fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out z-[200] ${
        isScrolled
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="bg-[#fffcf2] rounded-[16px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)] h-16 flex items-center justify-between px-6 mx-6 mt-6">
          <div className="flex items-center">
            <div className="relative w-32 h-8">
              <Image
                src={FIGMA_ASSETS.logo}
                alt="VDOgate Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <button
            onClick={() => {
              console.log('Sticky tablet header register button clicked');
              window.open('https://form.typeform.com/to/paosFBoY', '_blank');
            }}
            className="bg-[#f7682b] rounded-[14px] shadow-[0px_2px_8px_0px_rgba(247,104,43,0.3)]
                       border-none cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-0.5
                       px-6 py-3 text-white font-bold text-lg no-touch-hover"
          >
            REGISTER NOW
          </button>
        </div>
      </div>

      {/* Mobile Sticky Header (320px - 767px) */}
      <div className={`desktop-hidden tablet-hidden mobile-visible fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out z-[200] ${
        isScrolled
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="bg-[#fffcf2] rounded-[14px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.1)] h-14 flex items-center justify-between px-4 mx-4 mt-4">
          <div className="flex items-center justify-start">
            <div className="relative mobile-preserve">
              <Image
                src={FIGMA_ASSETS.logo}
                alt="VDOgate Logo"
                width={80}
                height={20}
                className="object-contain"
                priority
                style={{ maxWidth: '80px', height: 'auto' }}
              />
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors touch-action-manipulation"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`h-0.5 w-6 bg-gray-600 transition-all duration-300 transform origin-center ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`h-0.5 w-6 bg-gray-600 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`h-0.5 w-6 bg-gray-600 transition-all duration-300 transform origin-center ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
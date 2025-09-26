// components/Header.tsx - Production-ready header component

import React from 'react';
import Image from 'next/image';
import { HeaderProps } from '@/types';
import { FIGMA_ASSETS, FIGMA_POSITIONS, FIGMA_COLORS } from '@/constants/design';

const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
  return (
    <>
      {/* Header Background - Exact Figma positioning */}
      <div
        className="absolute bg-[#fffcf2] rounded-[20px] shadow-[0px_0px_12.1px_0px_rgba(0,0,0,0.25)]"
        style={{
          top: FIGMA_POSITIONS.header.top,
          left: FIGMA_POSITIONS.header.left,
          width: FIGMA_POSITIONS.header.width,
          height: FIGMA_POSITIONS.header.height,
        }}
      >
        {/* Logo Container */}
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
              width: '162px',
              height: '41px',
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

      {/* Register Button - Exact Figma positioning */}
      <button
        onClick={onRegisterClick}
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
        }}
      >
        REGISTER NOW
      </button>
    </>
  );
};

export default Header;
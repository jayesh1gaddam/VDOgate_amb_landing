// components/VDOgateSection.tsx - Production-ready VDOgate section with exact Figma design

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const VDOgateSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check if section is in viewport for tablet animation
      const sectionElement = document.getElementById('vdogate-section');
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInView(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Static tablet - no scroll-based animation
  const tabletRotation = 10; // Slightly tilted upright position
  const tabletOpacity = 1; // Fully visible
  const tabletScale = 0.9; // Normal size

  // Static shadow
  const shadowIntensity = 0.25;
  const shadowBlur = 25;

  return (
    <div id="vdogate-section" className="relative w-full bg-white" style={{ height: '832px' }}>
      {/* Background Frame */}
      <div
        className="absolute inset-0"
        style={{
          left: '0px',
          top: '0px',
          width: '100vw',
          height: '832px',
        }}
      >
        <Image
          src="/assets/background_frame.svg"
          alt=""
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Main Heading */}
      <h2
        className="absolute text-black font-bold text-center whitespace-nowrap"
        style={{
          top: 'calc(50% - 298px)',
          left: 'calc(50% - 195px)',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 700,
          fontSize: '44px',
          lineHeight: 1.15,
          letterSpacing: '0.44px',
        }}
      >
        What is VDOgate?
      </h2>

      {/* Subtitle */}
      <p
        className="absolute text-black text-center"
        style={{
          top: '184px',
          left: 'calc(50% + 0.5px)',
          transform: 'translateX(-50%)',
          width: '827px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
          fontSize: '22px',
          lineHeight: 1.32,
          letterSpacing: '0.22px',
        }}
      >
        VDOgate is a unique video-first platform designed for freelancers across India
      </p>

      {/* Decorative Elements */}
      {/* Small decorative vector near title */}
      <div
        className="absolute"
        style={{
          left: 'calc(40% + 228px)',
          top: '162px',
          width: '99.63px',
          height: '13.718px',
        }}
      >
        <div
          className="absolute"
          style={{
            top: '-1.95%',
            right: '-0.04%',
            bottom: '-1.24%',
            left: '-0.29%',
          }}
        >
          <Image
            src="/assets/vector3_decoration.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Small dot decoration */}
      <div
        className="absolute"
        style={{
          left: 'calc(80% - 13.532px)',
          top: '147.39px',
          width: '0.635px',
          height: '1.131px',
        }}
      >
        <div
          className="absolute"
          style={{
            top: '-33.23%',
            right: '-135.81%',
            bottom: '-8.84%',
            left: '-91.47%',
          }}
        >
          <Image
            src="/assets/vector4_decoration.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Feature Cards Container */}
      <div
        className="absolute"
        style={{
          top: '292px',
          left: 'calc(50% + 0.769px)',
          transform: 'translateX(-50%)',
          width: '1107.54px',
          height: '294px',
        }}
      >
        {/* First Row of Cards */}
        <div
          className="absolute flex gap-[65px] items-center justify-center"
          style={{
            left: '0px',
            top: '0px',
            width: '1107.54px',
            height: '102px',
          }}
        >
          {/* Card 1: Upload Videos */}
          <div
            className="relative bg-[rgba(255,255,255,0.1)] rounded-[20px] flex flex-col gap-[10px] items-center justify-center px-[13px] py-[17px] shrink-0"
            style={{
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.1)',
              outline: '5px solid #f7682b',
              outlineOffset: '-5px',
              filter: 'contrast(1.2) saturate(1.1)',
              boxShadow: `
                inset 0 0 0 5px #f7682b,
                0 0 0 1px rgba(247, 104, 43, 0.3),
                0 2px 4px rgba(247, 104, 43, 0.2)
              `,
            }}
          >
            <div className="flex gap-[33px] items-center w-[448px]">
              <div className="w-[54px] h-[50px] relative shrink-0">
                <Image
                  src="/assets/upload_icon.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <p
                className="text-black relative shrink-0 w-[389px]"
                style={{
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  fontSize: '28px',
                  lineHeight: 1.23,
                  letterSpacing: '0.28px',
                }}
              >
                Upload videos in any language to showcase skills
              </p>
            </div>
          </div>

          {/* Card 2: Attract Clients */}
          <div
            className="relative bg-[rgba(255,255,255,0.1)] rounded-[20px] flex flex-col gap-[10px] items-center justify-center px-[13px] py-[17px] shrink-0"
            style={{
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.1)',
              outline: '5px solid #f7682b',
              outlineOffset: '-5px',
              filter: 'contrast(1.2) saturate(1.1)',
              boxShadow: `
                inset 0 0 0 5px #f7682b,
                0 0 0 1px rgba(247, 104, 43, 0.3),
                0 2px 4px rgba(247, 104, 43, 0.2)
              `,
            }}
          >
            <div className="flex gap-[33px] items-center">
              <div className="w-[61.538px] h-[50px] relative shrink-0">
                <Image
                  src="/assets/clients_icon.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <p
                className="text-black relative shrink-0 w-[381px]"
                style={{
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  fontSize: '28px',
                  lineHeight: 1.23,
                  letterSpacing: '0.28px',
                }}
              >
                Attract clients directly without middlemen or commissions
              </p>
            </div>
          </div>
        </div>

        {/* Second Row of Cards */}
        <div
          className="absolute flex gap-[65px] items-center justify-center"
          style={{
            left: '36px',
            top: '159px',
          }}
        >
          {/* Card 3: Host Events */}
          <div
            className="relative bg-[rgba(255,255,255,0.1)] rounded-[20px] flex flex-col gap-[10px] items-start px-[13px] py-[17px] shrink-0"
            style={{
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.1)',
              outline: '5px solid #f7682b',
              outlineOffset: '-5px',
              filter: 'contrast(1.2) saturate(1.1)',
              boxShadow: `
                inset 0 0 0 5px #f7682b,
                0 0 0 1px rgba(247, 104, 43, 0.3),
                0 2px 4px rgba(247, 104, 43, 0.2)
              `,
            }}
          >
            <div className="flex gap-[33px] items-center">
              <div className="w-[72.086px] h-[50px] relative shrink-0">
                <Image
                  src="/assets/events_icon.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <p
                className="text-black relative shrink-0 w-[338px]"
                style={{
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  fontSize: '28px',
                  lineHeight: 1.23,
                  letterSpacing: '0.28px',
                }}
              >
                Host paid live events and monetize their community
              </p>
            </div>
          </div>

          {/* Card 4: Grow Following */}
          <div
            className="relative bg-[rgba(255,255,255,0.1)] rounded-[20px] flex flex-col gap-[10px] items-start px-[13px] py-[17px] shrink-0"
            style={{
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.1)',
              outline: '5px solid #f7682b',
              outlineOffset: '-5px',
              filter: 'contrast(1.2) saturate(1.1)',
              boxShadow: `
                inset 0 0 0 5px #f7682b,
                0 0 0 1px rgba(247, 104, 43, 0.3),
                0 2px 4px rgba(247, 104, 43, 0.2)
              `,
            }}
          >
            <div className="flex gap-[33px] items-center">
              <div className="w-[47px] h-[50px] relative shrink-0">
                <Image
                  src="/assets/growth_icon.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <p
                className="text-black relative shrink-0 w-[395px]"
                style={{
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  fontSize: '28px',
                  lineHeight: 1.23,
                  letterSpacing: '0.28px',
                }}
              >
                Grow fan following beyond Social Media algorithm hurdles
              </p>
            </div>
          </div>
        </div>

        {/* Rotated Essential Icons - Left side decoration */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            top: '-77.17%',
            right: '86.37%',
            bottom: '120.44%',
            left: '-2.89%',
          }}
        >
          <div
            className="flex-none"
            style={{
              width: '149px',
              height: '109.024px',
              transform: 'rotate(331.593deg)',
            }}
          >
            <div className="relative size-full">
              <div
                className="absolute"
                style={{
                  top: '-1%',
                  right: '-3.36%',
                  bottom: '-2.37%',
                  left: '-1.88%',
                }}
              >
                <Image
                  src="/assets/essential_icons.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Decorative Icon */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          top: '60.34%',
          right: '0.55%',
          bottom: '24.7%',
          left: '90.7%',
        }}
      >
        <div
          className="flex-none"
          style={{
            width: '85px',
            height: '104px',
            transform: 'rotate(17.196deg)',
          }}
        >
          <div className="relative size-full">
            <div
              className="absolute"
              style={{
                top: '-0.06%',
                right: '-2.59%',
                bottom: '-1.93%',
                left: '-2.2%',
              }}
            >
              <Image
                src="/assets/vector2_decoration.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* VDOgate App Interface - Center aligned */}
      <div
        className="absolute overflow-hidden pointer-events-none"
        style={{
          left: '50%',
          top: '583px',
          transform: 'translateX(-50%)',
          width: '1224px',
          height: '249px',
        }}
      >
        <Image
          src="/assets/vdogate_app_interface.png"
          alt="VDOgate App Interface"
          width={1224}
          height={816}
          className="absolute object-cover"
          style={{
            height: '327.71%',
            left: '0px',
            top: '0px',
            width: '100%',
          }}
        />
      </div>


    </div>
  );
};

export default VDOgateSection;
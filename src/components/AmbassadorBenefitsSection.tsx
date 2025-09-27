// components/AmbassadorBenefitsSection.tsx - Industry-grade Ambassador Benefits section

import React from 'react';
import Image from 'next/image';

const AmbassadorBenefitsSection: React.FC = () => {
  return (
    <>
      {/* Desktop Ambassador Benefits - Exact Figma positioning (1024px+) */}
      <div className="desktop-exact mobile-hidden tablet-hidden relative w-full bg-white" style={{ height: '713px' }}>
        {/* Background Image - Updated height */}
        <div
          className="absolute overflow-hidden pointer-events-none"
          style={{
            left: '0px',
            top: '-35px',
            width: '1280px',
            height: '713px',
          }}
        >
          <Image
            src="/assets/ambassador_bg.png"
            alt=""
            width={1421}
            height={943}
            className="absolute object-cover"
            style={{
              height: '132.31%',
              left: '-3.22%',
              top: '0px',
              width: '111.1%',
            }}
          />
        </div>

      {/* Right Side Decorative Vector */}
      <div
        className="absolute"
        style={{
          top: '58.48%',
          right: '0.31%',
          bottom: '-0.56%',
          left: '74.45%',
        }}
      >
        <div
          className="absolute"
          style={{
            top: '-0.43%',
            right: '-0.46%',
            bottom: '-0.46%',
            left: '-0.37%',
          }}
        >
          <Image
            src="/assets/vector_decoration_right.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Main Title */}
      <h2
        className="absolute text-black font-bold text-center whitespace-nowrap"
        style={{
          left: 'calc(20% + 384px)',
          top: '63px',
          transform: 'translateX(-50%)',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 700,
          fontSize: '44px',
          lineHeight: 1.15,
          letterSpacing: '0.44px',
        }}
      >
        Why Join as an Ambassador?
      </h2>

      {/* Title Underline Decoration */}
      <div
        className="absolute"
        style={{
          left: 'calc(20% + 165px)',
          top: '113.5px',
          width: '438.5px',
          height: '10.5px',
        }}
      >
        <div
          className="absolute"
          style={{
            bottom: '-4.53%',
            left: '0px',
            right: '0px',
            top: '-11.49%',
          }}
        >
          <Image
            src="/assets/title_underline.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Top Right Decorative Element */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          top: '4.24%',
          right: '11.75%',
          bottom: '84.32%',
          left: '82.58%',
        }}
      >
        <div
          className="flex-none"
          style={{
            width: '53px',
            height: '67px',
            transform: 'rotate(19.905deg)',
          }}
        >
          <div className="relative size-full">
            <div
              className="absolute"
              style={{
                top: '-0.84%',
                right: '-1.89%',
                bottom: '-0.77%',
                left: '-0.91%',
              }}
            >
              <Image
                src="/assets/vector_decoration_top.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefit Cards Grid - Centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '182px', width: '1076px' }}>
        {/* Top Row */}
        <div className="flex justify-between">
          {/* Community Impact Card */}
          <div
            className="relative rounded-[20px]"
            style={{
              width: '474px',
              height: '164px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(255, 255, 255, 0.1) inset',
            }}
          >
            <div
              className="absolute box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[9px] rounded-[20px]"
              style={{
                left: '20px',
                top: '14px',
                background: 'linear-gradient(135deg, #f7682b 0%, #ff8a50 100%)',
                boxShadow: '0px -4px 4px 0px inset rgba(255, 255, 255, 0.25), 0px 2px 8px rgba(247, 104, 43, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <p
                className="relative shrink-0 text-white text-center whitespace-nowrap"
                style={{
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: 1.15,
                  letterSpacing: '0.16px',
                  textShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
                }}
              >
                Community Impact
              </p>
            </div>
            <p
              className="absolute text-black"
              style={{
                left: '20px',
                top: '68px',
                width: '303px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: 1.23,
                letterSpacing: '0.2px',
              }}
            >
              Help freelancers showcase skills through videos & events
            </p>
            <div
              className="absolute overflow-hidden pointer-events-none"
              style={{
                left: '298px',
                top: '3px',
                width: '176px',
                height: '159px',
              }}
            >
              <Image
                src="/assets/community_impact.png"
                alt="Community Impact"
                width={176}
                height={176}
                className="absolute object-cover"
                style={{
                  height: '110.69%',
                  left: '0px',
                  top: '0px',
                  width: '100%',
                }}
              />
            </div>
          </div>

          {/* Earning Potential Card */}
          <div
            className="relative rounded-[20px]"
            style={{
              width: '474px',
              height: '164px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(255, 255, 255, 0.1) inset',
            }}
          >
            <div
              className="absolute box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[9px] rounded-[20px]"
              style={{
                left: '20px',
                top: '14px',
                background: 'linear-gradient(135deg, #f7682b 0%, #ff8a50 100%)',
                boxShadow: '0px -4px 4px 0px inset rgba(255, 255, 255, 0.25), 0px 2px 8px rgba(247, 104, 43, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <p
                className="relative shrink-0 text-white text-center whitespace-nowrap"
                style={{
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: 1.15,
                  letterSpacing: '0.16px',
                  textShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
                }}
              >
                Earning Potential
              </p>
            </div>
            <p
              className="absolute text-black"
              style={{
                left: '20px',
                top: '68px',
                width: '278px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: 1.23,
                letterSpacing: '0.2px',
              }}
            >
              Earn monetary rewards for onboarding freelancers on VDOgate
            </p>
            <div
              className="absolute"
              style={{
                left: '324px',
                top: '39px',
                width: '132px',
                height: '132px',
              }}
            >
              <Image
                src="/assets/earning_potential.png"
                alt="Earning Potential"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between mt-[75px]">
          {/* National Impact Card */}
          <div
            className="relative rounded-[20px]"
            style={{
              width: '474px',
              height: '164px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(255, 255, 255, 0.1) inset',
            }}
          >
            <div
              className="absolute box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[9px] rounded-[20px]"
              style={{
                left: '20px',
                top: '14px',
                background: 'linear-gradient(135deg, #f7682b 0%, #ff8a50 100%)',
                boxShadow: '0px -4px 4px 0px inset rgba(255, 255, 255, 0.25), 0px 2px 8px rgba(247, 104, 43, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <p
                className="relative shrink-0 text-white text-center whitespace-nowrap"
                style={{
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: 1.15,
                  letterSpacing: '0.16px',
                  textShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
                }}
              >
                National Impact
              </p>
            </div>
            <p
              className="absolute text-black"
              style={{
                left: '20px',
                top: '68px',
                width: '303px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: 1.23,
                letterSpacing: '0.2px',
              }}
            >
              Be a part of a growing community making waves across India
            </p>
            <div
              className="absolute"
              style={{
                left: '318px',
                top: '19px',
                width: '136px',
                height: '136px',
              }}
            >
              <Image
                src="/assets/national_impact.png"
                alt="National Impact"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Leadership Development Card */}
          <div
            className="relative rounded-[20px]"
            style={{
              width: '474px',
              height: '164px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(255, 255, 255, 0.1) inset',
            }}
          >
            <div
              className="absolute box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[9px] rounded-[20px]"
              style={{
                left: '20px',
                top: '14px',
                background: 'linear-gradient(135deg, #f7682b 0%, #ff8a50 100%)',
                boxShadow: '0px -4px 4px 0px inset rgba(255, 255, 255, 0.25), 0px 2px 8px rgba(247, 104, 43, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <p
                className="relative shrink-0 text-white text-center whitespace-nowrap"
                style={{
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: 1.15,
                  letterSpacing: '0.16px',
                  textShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
                }}
              >
                Leadership Development
              </p>
            </div>
            <p
              className="absolute text-black"
              style={{
                left: '20px',
                top: '68px',
                width: '303px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: 1.23,
                letterSpacing: '0.2px',
              }}
            >
              Get recognition as a student leader driving the future of freelancing
            </p>
            <div
              className="absolute overflow-hidden pointer-events-none rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px]"
              style={{
                left: '290px',
                top: '16px',
                width: '184px',
                height: '148px',
              }}
            >
              <Image
                src="/assets/leadership_development.png"
                alt="Leadership Development"
                width={184}
                height={184}
                className="absolute object-cover"
                style={{
                  height: '124.06%',
                  left: '0px',
                  top: '0px',
                  width: '100%',
                }}
              />
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Tablet Ambassador Benefits (768px - 1023px) */}
      <div className="desktop-hidden mobile-hidden tablet-visible relative w-full bg-white py-16">
        <div className="responsive-container">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/assets/ambassador_bg.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 space-y-12">
            {/* Header Section */}
            <div className="text-center space-y-4">
              <h2 className="text-responsive-4xl font-bold text-black">
                Why Join as an Ambassador?
              </h2>
            </div>

            {/* Benefit Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Community Impact Card */}
              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-[16px] p-6 border border-[rgba(255,255,255,0.3)] shadow-xl">
                <div className="bg-gradient-to-r from-[#f7682b] to-[#ff8a50] rounded-[12px] px-4 py-2 inline-block mb-4">
                  <span className="text-white font-bold text-sm">Community Impact</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="text-black font-bold text-lg leading-relaxed">
                      Help freelancers showcase skills through videos & events
                    </p>
                  </div>
                  <div className="w-20 h-20 relative flex-shrink-0">
                    <Image
                      src="/assets/community_impact.png"
                      alt="Community Impact"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Earning Potential Card */}
              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-[16px] p-6 border border-[rgba(255,255,255,0.3)] shadow-xl">
                <div className="bg-gradient-to-r from-[#f7682b] to-[#ff8a50] rounded-[12px] px-4 py-2 inline-block mb-4">
                  <span className="text-white font-bold text-sm">Earning Potential</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="text-black font-bold text-lg leading-relaxed">
                      Earn monetary rewards for onboarding freelancers on VDOgate
                    </p>
                  </div>
                  <div className="w-20 h-20 relative flex-shrink-0">
                    <Image
                      src="/assets/earning_potential.png"
                      alt="Earning Potential"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* National Impact Card */}
              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-[16px] p-6 border border-[rgba(255,255,255,0.3)] shadow-xl">
                <div className="bg-gradient-to-r from-[#f7682b] to-[#ff8a50] rounded-[12px] px-4 py-2 inline-block mb-4">
                  <span className="text-white font-bold text-sm">National Impact</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="text-black font-bold text-lg leading-relaxed">
                      Be a part of a growing community making waves across India
                    </p>
                  </div>
                  <div className="w-20 h-20 relative flex-shrink-0">
                    <Image
                      src="/assets/national_impact.png"
                      alt="National Impact"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Leadership Development Card */}
              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-[16px] p-6 border border-[rgba(255,255,255,0.3)] shadow-xl">
                <div className="bg-gradient-to-r from-[#f7682b] to-[#ff8a50] rounded-[12px] px-4 py-2 inline-block mb-4">
                  <span className="text-white font-bold text-sm">Leadership Development</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="text-black font-bold text-lg leading-relaxed">
                      Get recognition as a student leader driving the future of freelancing
                    </p>
                  </div>
                  <div className="w-20 h-20 relative flex-shrink-0">
                    <Image
                      src="/assets/leadership_development.png"
                      alt="Leadership Development"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Ambassador Benefits (320px - 767px) */}
      <div className="desktop-hidden tablet-hidden mobile-visible relative w-full bg-white py-6">
        <div className="responsive-container safe-area-inset">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/assets/ambassador_bg.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 space-y-8">
            {/* Header Section */}
            <div className="text-center px-4">
              <h2 className="text-responsive-3xl font-bold text-black">
                Why Join as an Ambassador?
              </h2>
            </div>

            {/* Benefit Cards Stack */}
            <div className="space-y-6 px-4">
              {/* Community Impact Card */}
              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-[12px] p-5 border border-[rgba(255,255,255,0.3)] shadow-lg">
                <div className="bg-gradient-to-r from-[#f7682b] to-[#ff8a50] rounded-[8px] px-3 py-1 inline-block mb-3">
                  <span className="text-white font-bold text-xs">Community Impact</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p className="text-black font-bold text-base leading-relaxed">
                      Help freelancers showcase skills through videos & events
                    </p>
                  </div>
                  <div className="w-20 h-20 relative flex-shrink-0">
                    <Image
                      src="/assets/community_impact.png"
                      alt="Community Impact"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Earning Potential Card */}
              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-[12px] p-5 border border-[rgba(255,255,255,0.3)] shadow-lg">
                <div className="bg-gradient-to-r from-[#f7682b] to-[#ff8a50] rounded-[8px] px-3 py-1 inline-block mb-3">
                  <span className="text-white font-bold text-xs">Earning Potential</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p className="text-black font-bold text-base leading-relaxed">
                      Earn monetary rewards for onboarding freelancers on VDOgate
                    </p>
                  </div>
                  <div className="w-20 h-20 relative flex-shrink-0">
                    <Image
                      src="/assets/earning_potential.png"
                      alt="Earning Potential"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* National Impact Card */}
              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-[12px] p-5 border border-[rgba(255,255,255,0.3)] shadow-lg">
                <div className="bg-gradient-to-r from-[#f7682b] to-[#ff8a50] rounded-[8px] px-3 py-1 inline-block mb-3">
                  <span className="text-white font-bold text-xs">National Impact</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p className="text-black font-bold text-base leading-relaxed">
                      Be a part of a growing community making waves across India
                    </p>
                  </div>
                  <div className="w-20 h-20 relative flex-shrink-0">
                    <Image
                      src="/assets/national_impact.png"
                      alt="National Impact"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Leadership Development Card */}
              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-[12px] p-5 border border-[rgba(255,255,255,0.3)] shadow-lg">
                <div className="bg-gradient-to-r from-[#f7682b] to-[#ff8a50] rounded-[8px] px-3 py-1 inline-block mb-3">
                  <span className="text-white font-bold text-xs">Leadership Development</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p className="text-black font-bold text-base leading-relaxed">
                      Get recognition as a student leader driving the future of freelancing
                    </p>
                  </div>
                  <div className="w-20 h-20 relative flex-shrink-0">
                    <Image
                      src="/assets/leadership_development.png"
                      alt="Leadership Development"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AmbassadorBenefitsSection;
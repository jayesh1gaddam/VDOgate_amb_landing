// components/PerksForAmbassadors.tsx - Industry-grade Perks for Ambassadors section

import React from 'react';
import Image from 'next/image';

const PerksForAmbassadors: React.FC = () => {
  return (
    <>
      {/* Desktop Perks Section - Exact Figma positioning (1024px+) */}
      <div className="desktop-exact mobile-hidden tablet-hidden relative w-full bg-white" style={{ height: '670px' }}>
        {/* Background with gradient overlay - Full width */}
        <div
          className="absolute overflow-hidden pointer-events-none"
          style={{
            left: '0px',
            top: '-38px',
            width: '100vw',
            height: '708px',
          }}
        >
          <Image
            src="/assets/perks_background.png"
            alt=""
            width={1280}
            height={854}
            className="absolute object-cover"
            style={{
              height: '120.53%',
              left: '0px',
              top: '-0.02%',
              width: '100%',
            }}
          />
        </div>

      {/* Main Title - Fixed SVG size */}
      <div
        className="absolute"
        style={{
          left: '85px',
          top: '40px',
          width: '650px',
          height: '130px',
        }}
      >
        <Image
          src="/assets/perks-for-ambassadors.svg"
          alt="Perks for Ambassadors"
          width={650}
          height={130}
          className="object-contain"
        />
      </div>

      {/* Cards Container - Aligned with heading */}
      <div className="absolute" style={{ left: '85px', top: '294px', width: '1200px' }}>
        <div className="flex justify-between">
          {/* Card 1: 1-Month Free Trial */}
          <div
            className="relative rounded-[20px]"
            style={{
              width: '242px',
              height: '258px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            }}
          >
        <div
          className="absolute"
          style={{
            left: '43px',
            top: '-42px',
            width: '155px',
            height: '155px',
            filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))',
          }}
        >
          <Image
            src="/assets/perk_1_free_trial.png"
            alt="1-Month Free Trial"
            width={155}
            height={155}
            className="object-cover pointer-events-none"
          />
        </div>
        <p
          className="absolute text-white text-center font-bold"
          style={{
            left: '121px',
            top: '113px',
            transform: 'translateX(-50%)',
            width: '186px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: 1.23,
            letterSpacing: '0.24px',
          }}
        >
          1-Month Free Trial for every freelancer you bring
        </p>
      </div>

          {/* Card 2: Handsome monetary benefits */}
          <div
            className="relative rounded-[20px]"
            style={{
              width: '242px',
              height: '258px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            }}
          >
        <div
          className="absolute"
          style={{
            left: '43px',
            top: '-26px',
            width: '155px',
            height: '155px',
          }}
        >
          <Image
            src="/assets/perk_2_monetary.png"
            alt="Handsome monetary benefits"
            width={155}
            height={155}
            className="object-cover pointer-events-none"
          />
        </div>
        <p
          className="absolute text-white text-center font-bold"
          style={{
            left: '121px',
            top: '124px',
            transform: 'translateX(-50%)',
            width: '186px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: 1.23,
            letterSpacing: '0.24px',
          }}
        >
          Handsome monetary benefits for you
        </p>
      </div>

          {/* Card 3: Early access to VDOgate features */}
          <div
            className="relative rounded-[20px]"
            style={{
              width: '242px',
              height: '258px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            }}
          >
        <div
          className="absolute"
          style={{
            left: '51px',
            top: '-24px',
            width: '140px',
            height: '140px',
          }}
        >
          <Image
            src="/assets/perk_3_early_access.png"
            alt="Early access to VDOgate features"
            width={140}
            height={140}
            className="object-cover pointer-events-none"
          />
        </div>
        <p
          className="absolute text-white text-center font-bold"
          style={{
            left: '121px',
            top: '129px',
            transform: 'translateX(-50%)',
            width: '186px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: 1.23,
            letterSpacing: '0.24px',
          }}
        >
          Early access to VDOgate features
        </p>
      </div>

          {/* Card 4: Exclusive "Founding Ambassador" badge */}
          <div
            className="relative rounded-[20px]"
            style={{
              width: '242px',
              height: '258px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            }}
          >
        <div
          className="absolute"
          style={{
            left: '43px',
            top: '-26px',
            width: '155px',
            height: '155px',
          }}
        >
          <Image
            src="/assets/perk_4_founding_badge.png"
            alt="Exclusive Founding Ambassador badge"
            width={155}
            height={155}
            className="object-cover pointer-events-none"
          />
        </div>
        <p
          className="absolute text-white text-center font-bold"
          style={{
            left: '120.5px',
            top: '113px',
            transform: 'translateX(-50%)',
            width: '187px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: 1.23,
            letterSpacing: '0.24px',
          }}
        >
          Exclusive &quot;Founding Ambassador&quot; badge
        </p>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div
        className="absolute"
        style={{
          left: 'calc(50% + 20px)',
          top: '23px',
          width: '64.76px',
          height: '81.602px',
        }}
      >
        <div
          className="absolute"
          style={{
            top: '-2.16%',
            right: '-2.04%',
            bottom: '0%',
            left: '-1.12%',
          }}
        >
          <Image
            src="/assets/perks_decoration.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        </div>
      </div>

      {/* Tablet Perks Section (768px - 1023px) */}
      <div className="desktop-hidden mobile-hidden tablet-visible relative w-full bg-white py-16">
        <div className="responsive-container">
          {/* Background */}
          <div className="absolute inset-0 opacity-100">
            <Image
              src="/assets/perks_background.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 space-y-12">
            {/* Header Section */}
            <div className="text-center">
              <div className="relative w-full max-w-lg mx-auto h-20">
                <Image
                  src="/assets/perks-for-ambassadors.svg"
                  alt="Perks for Ambassadors"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Perks Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Card 1: 1-Month Free Trial */}
              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-[16px] p-6 border border-[rgba(255,255,255,0.18)] shadow-xl text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20 -mt-8">
                    <Image
                      src="/assets/perk_1_free_trial.png"
                      alt="1-Month Free Trial"
                      fill
                      className="object-cover drop-shadow-lg"
                    />
                  </div>
                </div>
                <p className="text-white font-bold text-lg leading-relaxed">
                  1-Month Free Trial for every freelancer you bring
                </p>
              </div>

              {/* Card 2: Handsome monetary benefits */}
              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-[16px] p-6 border border-[rgba(255,255,255,0.18)] shadow-xl text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20 -mt-8">
                    <Image
                      src="/assets/perk_2_monetary.png"
                      alt="Handsome monetary benefits"
                      fill
                      className="object-cover drop-shadow-lg"
                    />
                  </div>
                </div>
                <p className="text-white font-bold text-lg leading-relaxed">
                  Handsome monetary benefits for you
                </p>
              </div>

              {/* Card 3: Early access to VDOgate features */}
              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-[16px] p-6 border border-[rgba(255,255,255,0.18)] shadow-xl text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20 -mt-8">
                    <Image
                      src="/assets/perk_3_early_access.png"
                      alt="Early access to VDOgate features"
                      fill
                      className="object-cover drop-shadow-lg"
                    />
                  </div>
                </div>
                <p className="text-white font-bold text-lg leading-relaxed">
                  Early access to VDOgate features
                </p>
              </div>

              {/* Card 4: Exclusive "Founding Ambassador" badge */}
              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-[16px] p-6 border border-[rgba(255,255,255,0.18)] shadow-xl text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20 -mt-8">
                    <Image
                      src="/assets/perk_4_founding_badge.png"
                      alt="Exclusive Founding Ambassador badge"
                      fill
                      className="object-cover drop-shadow-lg"
                    />
                  </div>
                </div>
                <p className="text-white font-bold text-lg leading-relaxed">
                  Exclusive &quot;Founding Ambassador&quot; badge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Perks Section (320px - 767px) */}
      <div className="desktop-hidden tablet-hidden mobile-visible relative w-full bg-white py-6 min-h-screen">
        <div className="responsive-container safe-area-inset">
          {/* Background */}
          <div className="absolute inset-0 opacity-100 mobile-preserve">
            <Image
              src="/assets/perks_background.png"
              alt=""
              width={375}
              height={800}
              className="object-cover object-center w-full h-full"
              style={{ minHeight: '100vh' }}
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 space-y-8">
            {/* Header Section */}
            <div className="text-center px-4">
              <div className="relative w-full max-w-sm mx-auto h-16">
                <Image
                  src="/assets/perks-for-ambassadors.svg"
                  alt="Perks for Ambassadors"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Perks Cards Stack */}
            <div className="space-y-6 px-4">
              {/* Card 1: 1-Month Free Trial */}
              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-[12px] p-5 border border-[rgba(255,255,255,0.18)] shadow-lg text-center">
                <div className="flex justify-center mb-3">
                  <div className="relative w-16 h-16 -mt-6">
                    <Image
                      src="/assets/perk_1_free_trial.png"
                      alt="1-Month Free Trial"
                      fill
                      className="object-cover drop-shadow-lg"
                    />
                  </div>
                </div>
                <p className="text-white font-bold text-base leading-relaxed">
                  1-Month Free Trial for every freelancer you bring
                </p>
              </div>

              {/* Card 2: Handsome monetary benefits */}
              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-[12px] p-5 border border-[rgba(255,255,255,0.18)] shadow-lg text-center">
                <div className="flex justify-center mb-3">
                  <div className="relative w-16 h-16 -mt-6">
                    <Image
                      src="/assets/perk_2_monetary.png"
                      alt="Handsome monetary benefits"
                      fill
                      className="object-cover drop-shadow-lg"
                    />
                  </div>
                </div>
                <p className="text-white font-bold text-base leading-relaxed">
                  Handsome monetary benefits for you
                </p>
              </div>

              {/* Card 3: Early access to VDOgate features */}
              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-[12px] p-5 border border-[rgba(255,255,255,0.18)] shadow-lg text-center">
                <div className="flex justify-center mb-3">
                  <div className="relative w-16 h-16 -mt-6">
                    <Image
                      src="/assets/perk_3_early_access.png"
                      alt="Early access to VDOgate features"
                      fill
                      className="object-cover drop-shadow-lg"
                    />
                  </div>
                </div>
                <p className="text-white font-bold text-base leading-relaxed">
                  Early access to VDOgate features
                </p>
              </div>

              {/* Card 4: Exclusive "Founding Ambassador" badge */}
              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-[12px] p-5 border border-[rgba(255,255,255,0.18)] shadow-lg text-center">
                <div className="flex justify-center mb-3">
                  <div className="relative w-16 h-16 -mt-6">
                    <Image
                      src="/assets/perk_4_founding_badge.png"
                      alt="Exclusive Founding Ambassador badge"
                      fill
                      className="object-cover drop-shadow-lg"
                    />
                  </div>
                </div>
                <p className="text-white font-bold text-base leading-relaxed">
                  Exclusive &quot;Founding Ambassador&quot; badge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerksForAmbassadors;
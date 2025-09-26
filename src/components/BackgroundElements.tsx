// components/BackgroundElements.tsx - Production-ready background decorative elements

import React from 'react';
import Image from 'next/image';
import { FIGMA_ASSETS, FIGMA_POSITIONS } from '@/constants/design';

const BackgroundElements: React.FC = () => {
  return (
    <>
      {/* Background Vector Elements - Exact Figma inset positioning */}
      <div
        className="absolute"
        style={{
          top: FIGMA_POSITIONS.bgVectors.vector1.top,
          right: FIGMA_POSITIONS.bgVectors.vector1.right,
          bottom: FIGMA_POSITIONS.bgVectors.vector1.bottom,
          left: FIGMA_POSITIONS.bgVectors.vector1.left,
          zIndex: 0,
        }}
      >
        <Image
          src={FIGMA_ASSETS.bgVector1}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div
        className="absolute"
        style={{
          top: FIGMA_POSITIONS.bgVectors.vector2.top,
          right: FIGMA_POSITIONS.bgVectors.vector2.right,
          bottom: FIGMA_POSITIONS.bgVectors.vector2.bottom,
          left: FIGMA_POSITIONS.bgVectors.vector2.left,
          zIndex: 0,
        }}
      >
        <Image
          src={FIGMA_ASSETS.bgVector2}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div
        className="absolute"
        style={{
          top: FIGMA_POSITIONS.bgVectors.vector3.top,
          right: FIGMA_POSITIONS.bgVectors.vector3.right,
          bottom: FIGMA_POSITIONS.bgVectors.vector3.bottom,
          left: FIGMA_POSITIONS.bgVectors.vector3.left,
          zIndex: 0,
        }}
      >
        <Image
          src={FIGMA_ASSETS.bgVector3}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div
        className="absolute"
        style={{
          top: FIGMA_POSITIONS.bgVectors.vector4.top,
          right: FIGMA_POSITIONS.bgVectors.vector4.right,
          bottom: FIGMA_POSITIONS.bgVectors.vector4.bottom,
          left: FIGMA_POSITIONS.bgVectors.vector4.left,
          zIndex: 0,
        }}
      >
        <Image
          src={FIGMA_ASSETS.bgVector4}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Union Decoration - Exact Figma positioning */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          left: FIGMA_POSITIONS.unionDecoration.left,
          top: FIGMA_POSITIONS.unionDecoration.top,
          width: '0px',
          height: '0px',
          zIndex: 2,
        }}
      >
        <div
          className="relative"
          style={{
            width: FIGMA_POSITIONS.unionDecoration.width,
            height: FIGMA_POSITIONS.unionDecoration.height,
            transform: FIGMA_POSITIONS.unionDecoration.transform,
          }}
        >
          <Image
            src={FIGMA_ASSETS.union}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Small Decorative Elements - Exact Figma positioning */}
      {/* Dots */}
      <div
        className="absolute"
        style={{
          top: FIGMA_POSITIONS.decorativeElements.dot1.top,
          right: FIGMA_POSITIONS.decorativeElements.dot1.right,
          bottom: FIGMA_POSITIONS.decorativeElements.dot1.bottom,
          left: FIGMA_POSITIONS.decorativeElements.dot1.left,
          zIndex: 2,
        }}
      >
        <Image
          src={FIGMA_ASSETS.dots}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div
        className="absolute"
        style={{
          top: FIGMA_POSITIONS.decorativeElements.dot2.top,
          right: FIGMA_POSITIONS.decorativeElements.dot2.right,
          bottom: FIGMA_POSITIONS.decorativeElements.dot2.bottom,
          left: FIGMA_POSITIONS.decorativeElements.dot2.left,
          zIndex: 2,
        }}
      >
        <Image
          src={FIGMA_ASSETS.dots}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Lines */}
      <div
        className="absolute"
        style={{
          top: FIGMA_POSITIONS.decorativeElements.line1.top,
          right: FIGMA_POSITIONS.decorativeElements.line1.right,
          bottom: FIGMA_POSITIONS.decorativeElements.line1.bottom,
          left: FIGMA_POSITIONS.decorativeElements.line1.left,
          zIndex: 2,
        }}
      >
        <Image
          src={FIGMA_ASSETS.lines}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div
        className="absolute"
        style={{
          top: FIGMA_POSITIONS.decorativeElements.line2.top,
          right: FIGMA_POSITIONS.decorativeElements.line2.right,
          bottom: FIGMA_POSITIONS.decorativeElements.line2.bottom,
          left: FIGMA_POSITIONS.decorativeElements.line2.left,
          zIndex: 2,
        }}
      >
        <Image
          src={FIGMA_ASSETS.lines}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div
        className="absolute"
        style={{
          top: FIGMA_POSITIONS.decorativeElements.line3.top,
          right: FIGMA_POSITIONS.decorativeElements.line3.right,
          bottom: FIGMA_POSITIONS.decorativeElements.line3.bottom,
          left: FIGMA_POSITIONS.decorativeElements.line3.left,
          zIndex: 2,
        }}
      >
        <Image
          src={FIGMA_ASSETS.lines}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div
        className="absolute"
        style={{
          top: FIGMA_POSITIONS.decorativeElements.line4.top,
          right: FIGMA_POSITIONS.decorativeElements.line4.right,
          bottom: FIGMA_POSITIONS.decorativeElements.line4.bottom,
          left: FIGMA_POSITIONS.decorativeElements.line4.left,
          zIndex: 2,
        }}
      >
        <Image
          src={FIGMA_ASSETS.lines}
          alt=""
          fill
          className="object-contain"
        />
      </div>

    </>
  );
};

export default BackgroundElements;
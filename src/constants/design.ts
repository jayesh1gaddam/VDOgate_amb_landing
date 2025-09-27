// constants/design.ts - Exact Figma design measurements

export const FIGMA_ASSETS = {
  // Logo and branding
  logo: '/assets/vdogate-logo.svg',

  // Hero section assets
  heroContent: '/assets/hero_section_content.png',
  heroGraphic: '/assets/hero_graphic_2.png',

  // Stars
  goldStar: '/assets/gold_star.png',

  // Background decorative elements
  bgVector1: '/assets/vector_decoration_1.svg',
  bgVector2: '/assets/vector_decoration_2.svg',
  bgVector3: '/assets/vector_decoration_right.svg',
  bgVector4: '/assets/vector_decoration_top.svg',

  // Visual group background vectors
  visualBgVector1: '/assets/vector2_decoration.svg',
  visualBgVector2: '/assets/vector3_decoration.svg',

  // Decorative elements
  union: '/assets/vector4_decoration.svg',
  ellipse: '/assets/essential_icons.svg',
  dots: '/assets/vector2_decoration.svg',
  lines: '/assets/vector3_decoration.svg',
} as const;

// Exact Figma positioning values
export const FIGMA_POSITIONS = {
  // Header
  header: {
    top: '40px',
    left: '50px',
    width: 'calc(60% + 181px - 50px - 15px)',
    height: '50px',
  },

  // Hero CTA buttons
  heroCTAPrimary: {
    left: '77px',
    top: 'calc(140px + 348px)',
    width: '447px',
    height: '47px',
  },

  heroCTASecondary: {
    left: '77px',
    top: 'calc(140px + 418px)',
    width: '447px',
    height: '47px',
  },

  // Register button
  registerButton: {
    top: '40px',
    left: 'calc(60% + 181px)',
    height: '49px',
  },

  // Hero content
  heroContent: {
    left: '77px',
    top: '140px',
    width: '447px',
    height: '455px',
  },

  // Main visual container
  visualContainer: {
    left: 'calc(40% + 83px)',
    top: '113px',
  },

  // Union decoration
  unionDecoration: {
    left: 'calc(80% + 23px)',
    top: '493px',
    width: '118.163px',
    height: '149.692px',
    transform: 'rotate(90deg)',
  },

  // Visual group
  visualGroup: {
    left: 'calc(40% + 123px)',
    top: '113px',
  },

  // Main hero graphic
  heroGraphic: {
    left: 'calc(40% + 123px)',
    top: '100px',
    width: '573.308px',
    height: '539px',
  },

  // Blurred shadow
  blurredShadow: {
    left: 'calc(40% + 163.628px)',
    top: '590.61px',
    width: '478.509px',
    height: '59.588px',
  },

  // Background vectors (using inset positioning)
  bgVectors: {
    vector1: {
      top: '80.11%',
      right: '91.25%',
      bottom: '12.8%',
      left: '-3.44%',
    },
    vector2: {
      top: '84.7%',
      right: '78.36%',
      bottom: '-4.03%',
      left: '-2.89%',
    },
    vector3: {
      top: '9.88%',
      right: '-3.52%',
      bottom: '76.08%',
      left: '88.59%',
    },
    vector4: {
      top: '12.94%',
      right: '8.59%',
      bottom: '76.08%',
      left: '81.72%',
    },
  },

  // Small decorative elements
  decorativeElements: {
    dot1: {
      top: '70.52%',
      right: '8.13%',
      bottom: '21.7%',
      left: '87.66%',
    },
    dot2: {
      top: '47.7%',
      right: '49.3%',
      bottom: '44.51%',
      left: '46.48%',
    },
    line1: {
      top: '63.98%',
      right: '7.03%',
      bottom: '32.13%',
      left: '90.86%',
    },
    line2: {
      top: '69.68%',
      right: '46.41%',
      bottom: '26.43%',
      left: '51.48%',
    },
    line3: {
      top: '23.92%',
      right: '12.42%',
      bottom: '72.18%',
      left: '85.47%',
    },
    line4: {
      top: '23.92%',
      right: '48.52%',
      bottom: '72.18%',
      left: '49.38%',
    },
  },
} as const;

// Typography from Figma
export const FIGMA_TYPOGRAPHY = {
  heading: {
    fontFamily: 'Helvetica',
    fontWeight: 700,
    fontSize: '44px',
    lineHeight: 1.15,
    letterSpacing: '0.44px',
  },

  vdogate: {
    fontFamily: 'Helvetica',
    fontWeight: 700,
    fontSize: '100px',
    lineHeight: 1.32,
  },

  ambassador: {
    fontFamily: 'Helvetica',
    fontWeight: 400,
    fontSize: '60px',
    lineHeight: 1.32,
  },

  subtitle: {
    fontFamily: 'Helvetica',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: 1.32,
    letterSpacing: '0.2px',
  },

  button: {
    fontFamily: 'Helvetica',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: 1.15,
    letterSpacing: '0.2px',
  },

  registerButton: {
    fontFamily: 'Helvetica',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: 1.23,
    letterSpacing: '0.24px',
  },
} as const;

// Colors from Figma
export const FIGMA_COLORS = {
  primary: '#f7682b',
  secondary: '#463dc7',
  background: '#ffffff',
  surface: '#fffcf2',
  text: {
    primary: '#000000',
    white: '#ffffff',
  },
} as const;
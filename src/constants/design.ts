// constants/design.ts - Exact Figma design measurements

export const FIGMA_ASSETS = {
  // Logo and branding
  logo: 'http://localhost:3845/assets/dfa3a1a625c075f85436b3e313884ea012241a02.svg',

  // Hero section assets
  heroContent: '/assets/hero_section_content.png',
  heroGraphic: '/assets/hero_graphic_2.png',

  // Stars
  goldStar: 'http://localhost:3845/assets/bf55b194a8f36bd8f4edd810bd082d2350014d1f.png',

  // Background decorative elements
  bgVector1: 'http://localhost:3845/assets/88b1ea39dcd05f33033f34fd3d32432d1a4a8d2f.svg',
  bgVector2: 'http://localhost:3845/assets/2e229cc3670a73b2fc4fe46aa0d065809c7ff97f.svg',
  bgVector3: 'http://localhost:3845/assets/408dbd2e1ff300a7a5824b0d35a874e7453e4736.svg',
  bgVector4: 'http://localhost:3845/assets/fea275f50328100078bba411368a27a76c0543d7.svg',

  // Visual group background vectors
  visualBgVector1: 'http://localhost:3845/assets/4ea06c81ad62aa507f5343efe55a830aa4fafb6e.svg',
  visualBgVector2: 'http://localhost:3845/assets/f9d745ad4e8bc4b8918f28937695aa36b8d2c386.svg',

  // Decorative elements
  union: 'http://localhost:3845/assets/759960aa503b7c96dc20433afb298ac16b35d716.svg',
  ellipse: 'http://localhost:3845/assets/9f08becae742c027ae3af30bbaeb477e9097922a.svg',
  dots: 'http://localhost:3845/assets/7e61696db99ef246942cbe51ce0f841f3e1c49d4.svg',
  lines: 'http://localhost:3845/assets/270a348de1b9c010c3983e64970738927981d910.svg',
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
    top: 'calc(140px + 328px)',
    width: '447px',
    height: '47px',
  },

  heroCTASecondary: {
    left: '77px',
    top: 'calc(140px + 398px)',
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
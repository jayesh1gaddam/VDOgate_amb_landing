// constants/responsive.ts - Responsive breakpoints and mobile adaptations

export const BREAKPOINTS = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
} as const;

// Mobile-specific positioning that maintains design hierarchy
export const MOBILE_POSITIONS = {
  header: {
    padding: '16px',
    height: '60px',
  },

  hero: {
    padding: '20px',
    textAlign: 'center' as const,
    spacing: '24px',
  },

  section: {
    padding: '40px 20px',
    titleSpacing: '32px',
    cardSpacing: '20px',
  },

  cards: {
    gap: '20px',
    width: '100%',
    maxWidth: '350px',
  },
} as const;

// Tablet-specific adaptations
export const TABLET_POSITIONS = {
  section: {
    padding: '60px 40px',
    titleSpacing: '40px',
  },

  cards: {
    gap: '30px',
    columns: 2,
  },
} as const;
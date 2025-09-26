// types/index.ts - Production-ready TypeScript interfaces

export interface AssetPath {
  readonly src: string;
  readonly alt: string;
}

export interface HeroSectionProps {
  className?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

export interface HeaderProps {
  onRegisterClick?: () => void;
}

// Figma design tokens
export interface DesignTokens {
  colors: {
    primary: '#f7682b';
    secondary: '#463dc7';
    background: '#ffffff';
    surface: '#fffcf2';
    text: {
      primary: '#000000';
      white: '#ffffff';
    };
  };
  spacing: {
    xs: '8px';
    sm: '12px';
    md: '20px';
    lg: '24px';
    xl: '32px';
    '2xl': '40px';
  };
  borderRadius: {
    lg: '20px';
    md: '10px';
  };
  shadows: {
    card: '0px 0px 12.1px 0px rgba(0, 0, 0, 0.25)';
    hero: '0px 2px 16.6px 0px rgba(0, 0, 0, 0.2)';
    button: 'inset 0px -4px 4px 0px rgba(255, 252, 242, 0.31)';
  };
}

export interface FigmaPositioning {
  position: 'absolute' | 'relative';
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
  transform?: string;
  zIndex?: number;
}
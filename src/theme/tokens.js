export const colors = {
  bg: '#FFFFFF',
  surface: 'rgba(0, 0, 0, 0.025)',
  surfaceHover: 'rgba(0, 0, 0, 0.05)',
  border: 'rgba(0, 0, 0, 0.08)',
  borderLight: 'rgba(0, 0, 0, 0.12)',
  text: '#0F0F0F',
  textSecondary: 'rgba(0, 0, 0, 0.55)',
  textTertiary: 'rgba(0, 0, 0, 0.32)',
  accent: '#7C3AED',
  accentMuted: 'rgba(124, 58, 237, 0.08)',
  warm: '#D97706',
  warmMuted: 'rgba(217, 119, 6, 0.08)',
  cyan: '#0891B2',
  cyanMuted: 'rgba(8, 145, 178, 0.07)',
  emerald: '#059669',
  emeraldMuted: 'rgba(5, 150, 105, 0.07)',
  rose: '#E11D48',
  roseMuted: 'rgba(225, 29, 72, 0.06)',
};

export const fonts = {
  heading: "'Instrument Serif', Georgia, 'Times New Roman', serif",
  body: "'DM Sans', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
};

export const anim = {
  fadeUp: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  stagger: {
    animate: { transition: { staggerChildren: 0.08 } },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.92 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

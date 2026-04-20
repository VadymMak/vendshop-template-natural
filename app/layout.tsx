import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/lib/config';
import { getPalette } from '@/lib/palettes';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const palette = getPalette(SITE_CONFIG.palette);

  const cssVars: React.CSSProperties & Record<string, string> = {
    '--primary':           palette.primary,
    '--primary-dark':      palette.primaryDark,
    '--primary-light':     palette.primaryLight,
    '--bg':                palette.bg,
    '--bg-alt':            palette.bgAlt,
    '--card':              palette.card,
    '--card-hover':        palette.cardHover,
    '--text':              palette.text,
    '--text-muted':        palette.textMuted,
    '--border':            palette.border,
    '--stats-bg':          palette.statsBg,
    '--stats-text':        palette.statsText,
    '--hero-overlay':      palette.heroOverlay,
    '--chat-toggle-bg':    palette.isDark ? palette.card : palette.primary,
    '--chat-toggle-color': palette.isDark ? palette.text : '#ffffff',
    '--heading-font':      `var(--font-playfair)`,
  };

  return (
    <html
      lang={SITE_CONFIG.language}
      className={`font-playfair ${playfair.variable} ${inter.variable}`}
      style={cssVars}
    >
      <body className="font-playfair" data-theme={palette.isDark ? 'dark' : 'light'}>
        {children}
      </body>
    </html>
  );
}

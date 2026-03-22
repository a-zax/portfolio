import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import Background3D from '@/components/Background3D';
import MouseGlow from '@/components/MouseGlow';

export const metadata: Metadata = {
  title: 'Aryan Shukla — Creative Developer',
  description:
    'Personal portfolio of Aryan Shukla — Creative Developer bridging design and engineering.',
  keywords: ['portfolio', 'developer', 'creative', 'Next.js', 'web development'],
  authors: [{ name: 'Aryan Shukla' }],
  openGraph: {
    title: 'Aryan Shukla — Creative Developer',
    description: 'Bridging design and engineering. Portfolio & projects.',
    type: 'website',
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable} font-inter text-white min-h-screen custom-scrollbar`}
      >
        <Preloader />
        <CustomCursor />
        <Background3D />
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}

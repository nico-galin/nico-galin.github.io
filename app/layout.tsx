'use client';
import { Montserrat } from '@next/font/google';
import { AnimateSharedLayout } from 'framer-motion';
import Navigation from '../components/Navigation';
import '../styles/globals.css';

const font = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title key="title">Nico Galin</title>
        <meta
          name="description"
          content="I create modern websites, apps, and tools with Human-Centered Design principles. Oh, and I love minimalism."
          key="desc"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1c1c1c" />

        <meta property="og:title" content="Nico Galin" />
        <meta
          property="og:description"
          content="I create modern websites, apps, and tools with Human-Centered Design principles. Oh, and I love minimalism."
        />
        <meta property="og:image" content="%PUBLIC_URL%/site_preview.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png" />
      </head>
      <AnimateSharedLayout>
        <body className={font.className} style={{ overflowX: 'hidden' }}>
          <Navigation />
          {children}
        </body>
      </AnimateSharedLayout>
    </html>
  );
}

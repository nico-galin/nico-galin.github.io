'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import styles from './Portfolio.module.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  const segments = useSelectedLayoutSegments();
  const description = 'My portfolio';
  const segment = segments[segments.length - 1];
  return (
    <>
      <Head>
        <title key="title">Portfolio | Nico Galin</title>
        <meta name="description" content={description} key="desc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1c1c1c" />

        <meta property="og:title" content="Nico Galin" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="%PUBLIC_URL%/site_preview.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png" />
      </Head>
      <div>
        {segment == 'icons' || segment == 'dev' ? (
          <div className={styles.menu}>
            <Link
              className={
                segment == 'icons' ? styles.selected : styles.unselected
              }
              href={'/portfolio/icons'}
            >
              Iconography
            </Link>
            <Link
              className={segment == 'dev' ? styles.selected : styles.unselected}
              href={'/portfolio/dev'}
            >
              Projects
            </Link>
          </div>
        ) : null}
        {children}
      </div>
    </>
  );
}

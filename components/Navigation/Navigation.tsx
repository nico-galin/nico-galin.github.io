'use client';
import { useState } from 'react';
import styles from './Navigation.module.scss';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import MenuIcon from '../MenuIcon/MenuIcon';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

const Navigation = () => {
  const segment = useSelectedLayoutSegment();
  const { width } = useWindowDimensions();
  const [fullscreenNavOpen, setFullscreenNavOpen] = useState(false);

  const toggleFullscreenNav = () => {
    setFullscreenNavOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    if (fullscreenNavOpen) toggleFullscreenNav();
  };

  let selBarWidth = '100%';
  if (segment === 'portfolio' || segment === 'item') {
    selBarWidth = '81%';
  } else if (segment === 'resume') {
    selBarWidth = '54%';
  } else if (segment === 'contact') {
    selBarWidth = '27%';
  }

  const navItems = (
    <>
      <li>
        <Link className={styles.link} href="/" onClick={toggleMenu}>
          Home
        </Link>
      </li>
      <li>
        <Link
          className={styles.link}
          href={
            segment == 'iconography' ? '/portfolio/dev' : '/portfolio/icons'
          }
          onClick={toggleMenu}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link className={styles.link} href="/resume" onClick={toggleMenu}>
          Resume
        </Link>
      </li>
      <li>
        <Link className={styles.link} href="/contact" onClick={toggleMenu}>
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <header>
      <div className={styles.dummyNav} />
      <nav className={styles.nav}>
        <div className={styles.leftNavigation}>
          <div className={styles.leftBlock} />
          <li>
            <Link href="/" className={styles.link}>
              Nico Galin
            </Link>
          </li>
        </div>
        <ul
          className={styles.navigation}
          style={!width || width > 850 ? { display: 'none' } : {}}
        >
          <li>
            <MenuIcon
              onClick={toggleFullscreenNav}
              checked={fullscreenNavOpen}
            />
          </li>
        </ul>
        <ul
          className={styles.navigation}
          style={!width || width <= 850 ? { display: 'none' } : {}}
        >
          <div className={styles.selBar} style={{ width: selBarWidth }} />
          {navItems}
        </ul>
      </nav>
      <div
        className={`${styles.fullpageNav_container} ${
          !fullscreenNavOpen ? styles.fullpageNav_hidden : null
        }`}
      >
        <ul className={styles.fullpageNav}>{navItems}</ul>
      </div>
    </header>
  );
};

export default Navigation;

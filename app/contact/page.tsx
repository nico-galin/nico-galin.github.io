'use client';

import styles from './Contact.module.scss';
import type { LegacyRef, MutableRefObject } from 'react';
import { useLayoutEffect } from 'react';
import React, { useRef } from 'react';
import HexGrid from '../../components/HexGrid/HexGrid';
import { contact_hexagons } from '../../constants/hexagons';
import { useDraggable } from 'react-use-draggable-scroll';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Contact = () => {
  const ref = useRef() as MutableRefObject<HTMLElement>;
  const { width } = useWindowDimensions();
  const { events } = useDraggable(ref, { decayRate: 0.8 });

  useLayoutEffect(() => {
    if (ref) {
      ref.current.scrollTop =
        ref.current.scrollHeight / (!!width && width > 650 ? 5 : 4);
      ref.current.scrollLeft =
        ref.current.scrollWidth / (!!width && width > 650 ? 6 : 3);
    }
  }, [width]);

  const selectItem = (id: string) => {
    switch (id) {
      case 'instagram':
        window.open('https://www.instagram.com/nicogalin/', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/nicholas-galin/', '_blank');
        break;
      case 'handshake':
        window.open(
          'https://berkeley.joinhandshake.com/users/20653606/',
          '_blank'
        );
        break;
      case 'email':
        window.open('mailto:nico.galin@gmail.com', '_blank');
        break;
      default:
        break;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.vignette} />
      <div
        className={styles.scrollableArea}
        ref={ref as LegacyRef<HTMLDivElement>}
        {...events}
      >
        <div className={styles.gridPadding}>
          <HexGrid
            size={!!width && width > 850 ? 270 : 160}
            length={3}
            width={5}
            data={contact_hexagons}
            start={[1, 1]}
            delayFraction={3}
            onClick={selectItem}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

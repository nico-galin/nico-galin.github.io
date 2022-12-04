'use client';

import { useRouter } from 'next/navigation';
import type { LegacyRef, MutableRefObject } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import HexGrid from '../../../components/HexGrid';
import { project_hexagons } from '../../../constants/hexagons';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import validations from '../../../utils/validations';
import styles from '../Portfolio.module.scss';

export default function DevelopmentPortfolio() {
  const router = useRouter();
  const ref = useRef() as MutableRefObject<HTMLElement>;
  const { width } = useWindowDimensions();
  const { events } = useDraggable(ref, { decayRate: 0.8 });

  useEffect(() => {
    if (ref) {
      ref.current.scrollTop =
        ref.current.scrollHeight / (!!width && width > 650 ? 5 : 4);
      ref.current.scrollLeft =
        ref.current.scrollWidth / (!!width && width > 650 ? 6 : 3);
    }
  }, [width]);

  const selectItem = (id: string) => {
    if (validations.isNotBlank(id)) {
      router.push(`/portfolio/dev/${id}`);
    }
  };

  return (
    <div
      className={styles.scrollableArea}
      ref={ref as LegacyRef<HTMLDivElement>}
      {...events}
    >
      <div className={styles.gridPadding}>
        <div className={styles.grid}>
          <HexGrid
            size={!!width && width > 850 ? 300 : 250}
            length={4}
            width={5}
            horizontalOffset={3}
            data={project_hexagons}
            start={[2, 1]}
            delayFraction={2}
            onClick={selectItem}
          />
        </div>
      </div>
    </div>
  );
}

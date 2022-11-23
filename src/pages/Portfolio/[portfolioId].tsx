import styles from "./Portfolio.module.scss";
import type { LegacyRef, MutableRefObject } from "react";
import { useEffect, useRef } from "react";
import HexGrid from "../../components/HexGrid/HexGrid";
import {
  iconography_hexagons,
  project_hexagons,
} from "../../constants/hexagons";
import { useDraggable } from "react-use-draggable-scroll";
import validations from "../../utils/validations";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useRouter } from "next/router";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { Hexagon } from "../../models/Hexagon";
import type { ParsedUrlQuery } from "querystring";
import Navigation from "../../components/Navigation";

interface Portfolio_Props {
  hexagons: Hexagon[];
}

const Portfolio = ({ hexagons = iconography_hexagons }: Portfolio_Props) => {
  const router = useRouter();
  if (!hexagons) router.push("/");
  const ref = useRef() as MutableRefObject<HTMLElement>;
  const paths = router.asPath.split("/");
  const tab = paths[paths.length - 1];
  const { width } = useWindowDimensions();
  const { events } = useDraggable(ref, { decayRate: 0.8 });
  let iconography_class;
  let proj_class;
  if (tab == "iconography") {
    iconography_class = styles.selected;
    proj_class = styles.unselected;
  } else if (tab == "projects") {
    iconography_class = styles.unselected;
    proj_class = styles.selected;
  }

  useEffect(() => {
    if (ref) {
      ref.current.scrollTop =
        ref.current.scrollHeight / (!!width && width > 650 ? 5 : 4);
      ref.current.scrollLeft =
        ref.current.scrollWidth / (!!width && width > 650 ? 6 : 3);
    }
  }, [router.pathname, width]);

  const selectItem = (id: string) => {
    if (validations.isNotBlank(id)) {
      router.push(`/item/${id}`);
    }
  };

  return (
    <>
      <title>Nico Galin | Portfolio</title>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.menu}>
          <button
            className={iconography_class}
            onClick={() => router.push("/portfolio/iconography")}
          >
            Iconography
          </button>
          <button
            className={proj_class}
            onClick={() => router.push("/portfolio/projects")}
          >
            Projects
          </button>
        </div>
        <div className={styles.vignette} />
        <div
          className={styles.scrollableArea}
          ref={ref as LegacyRef<HTMLDivElement>}
          {...events}
        >
          <div className={styles.gridPadding}>
            <div className={styles.grid}>
              {tab == "iconography" ? (
                <HexGrid
                  size={!!width && width > 850 ? 150 : 90}
                  length={6}
                  width={9}
                  data={hexagons}
                  start={[3, 2]}
                  delayFraction={3}
                  onClick={selectItem}
                />
              ) : (
                <HexGrid
                  size={!!width && width > 850 ? 300 : 250}
                  length={4}
                  width={5}
                  horizontalOffset={3}
                  data={hexagons}
                  start={[2, 1]}
                  delayFraction={2}
                  onClick={selectItem}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = ["projects", "iconography"];
  return {
    paths: paths.map((portfolioId: string) => ({
      params: { portfolioId },
    })),
    fallback: false,
  };
};

interface QueryParams extends ParsedUrlQuery {
  portfolioId: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { portfolioId } = params as QueryParams;
  if (portfolioId == "projects") {
    return { props: { hexagons: project_hexagons } };
  } else if (portfolioId == "iconography") {
    return { props: { hexagons: iconography_hexagons } };
  }
  return { props: { hexagons: null } };
};

export default Portfolio;

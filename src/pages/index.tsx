import styles from "./index.module.scss";
import Button from "../components/Button";
import Hexagon from "../components/Hexagon";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Navigation from "../components/Navigation";
import Image from "next/image";
import { useRouter } from "next/router";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();

  return (
    <>
      <title>Nico Galin</title>
      <Navigation />
      <div className={styles.wrapper}>
        <div className={styles.edgeLine} />
        <div className={styles.edgeLine} />
        <div className={styles.edgeLine} />
        <div className={styles.edgeLine} />
        <div className={styles.container}>
          <div className={styles.dummy} />
          <div className={styles.content}>
            <div className={styles.title}>Hey, I&apos;m Nico.</div>
            <div className={styles.subtitle}>
              I create modern websites, apps, and tools with Human-Centered
              Design principles. Oh, and I love minimalism.
            </div>
            <div className={styles.buttonContainer}>
              <div className={styles.button_left}>
                <div className={styles.button_lineSmall} />
                <div className={styles.button_lineLarge} />
                <div className={styles.button_lineInvisible} />
              </div>
              <Button
                label={"Work with me"}
                onClick={() => router.push("/contact")}
              />
              <div className={styles.button_right}>
                <div className={styles.button_lineInvisible} />
                <div className={styles.button_lineLarge} />
                <div className={styles.button_lineSmall} />
              </div>
            </div>
            <div className={styles.subtitleBottom}>
              I love meeting interesting people. If you&apos;re in the Bay Area
              and want to grab coffee, don&apos;t hesitate to reach out.
            </div>
          </div>
          <div>
            <div
              className={styles.hexagons}
              style={{
                marginBottom: `-${!!width && width >= 850 ? 110 : 55}px`,
              }}
            >
              <Hexagon
                size={!!width && width >= 850 ? 200 : 100}
                color={"colored"}
                animationDelay={1.5}
              />
              {!!width && width >= 850 && (
                <Hexagon
                  size={width >= 850 ? 200 : 100}
                  color={"colored"}
                  animationDelay={1.5}
                />
              )}
            </div>
            <Image
              className={styles.watermark}
              src={require("../assets/icons/watermark_white.png")}
              alt={"logo"}
              width={!!width && width >= 850 ? 130 : 90}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

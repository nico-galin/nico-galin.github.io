import { useEffect, useState } from "react";
import styles from "./Navigation.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import MenuIcon from "../MenuIcon/MenuIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Navigation = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const location = router.pathname;
  const topTab = location.split("/")[1];
  const [fullscreenNavOpen, setFullscreenNavOpen] = useState(false);

  useEffect(() => {
    // runs on location, i.e. route, change
  }, [location]);

  const toggleFullscreenNav = () => {
    setFullscreenNavOpen((prev) => !prev);
  };

  const goTo = (url: string) => {
    router.push(url);
    if (fullscreenNavOpen) toggleFullscreenNav();
  };

  let selBarWidth = "100%";
  if (topTab === "portfolio" || topTab === "item") {
    selBarWidth = "81%";
  } else if (topTab === "resume") {
    selBarWidth = "54%";
  } else if (topTab === "contact") {
    selBarWidth = "27%";
  }

  return (
    <>
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
          style={!!width && width > 850 ? { display: "none" } : {}}
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
          style={!!width && width <= 850 ? { display: "none" } : {}}
        >
          <motion.div
            className={styles.selBar}
            initial={{ width: "100%" }}
            animate={{ width: selBarWidth }}
            transition={{
              x: { duration: 0.4 },
              default: { ease: "easeInOut" },
            }}
            layoutId="nav-selBar"
          />
          <li className={styles.link} onClick={() => goTo("/")}>
            Home
          </li>
          <li
            className={styles.link}
            onClick={() =>
              goTo(
                topTab == "iconography"
                  ? "/portfolio/projects"
                  : "/portfolio/iconography"
              )
            }
          >
            Portfolio
          </li>
          <li className={styles.link} onClick={() => goTo("/resume")}>
            Resume
          </li>
          <li className={styles.link} onClick={() => goTo("/contact")}>
            Contact
          </li>
        </ul>
      </nav>
      <div
        className={`${styles.fullpageNav_container} ${
          !fullscreenNavOpen ? styles.fullpageNav_hidden : null
        }`}
      >
        <ul className={styles.fullpageNav}>
          <li className={styles.link} onClick={() => goTo("/")}>
            Home
          </li>
          <li
            className={styles.link}
            onClick={() =>
              goTo(topTab === "portfolio" ? location : "/portfolio")
            }
          >
            Portfolio
          </li>
          <li className={styles.link} onClick={() => goTo("/resume")}>
            Resume
          </li>
          <li className={styles.link} onClick={() => goTo("/contact")}>
            Contact
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;

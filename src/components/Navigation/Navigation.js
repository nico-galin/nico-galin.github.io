import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navigation.module.scss';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import MenuIcon from '../MenuIcon/MenuIcon';

const Navigation = () => {
    const navigate = useNavigate();
    const { width } = useWindowDimensions();
    const location = useLocation().pathname;
    const topTab = location.split("/")[1];
    const [fullscreenNavOpen, setFullscreenNavOpen] = useState(false);

    useEffect(() => {
        // runs on location, i.e. route, change
    }, [location])
    
    const toggleFullscreenNav = () => {
        setFullscreenNavOpen(prev => !prev);
    }

    const goTo = (url) => {
        navigate(url);
        if (fullscreenNavOpen) toggleFullscreenNav();
    }

    let selbarClass = styles.selBar;
    if (topTab === "portfolio" || topTab === "itemspotlight") {
        selbarClass = styles.selBar_tq;
    } else if (topTab === "resume") {
        selbarClass = styles.selBar_half;
    } else if (topTab === "contact") {
        selbarClass = styles.selBar_quarter;
    }
    return (
        <>
            <div className={styles.dummyNav} />
            <nav>
                <div className={styles.leftNavigation}>
                    <div className={styles.leftBlock} />
                    <li>
                        <Link to="/" className={styles.link}>Nico Galin</Link>
                    </li>
                </div>
                <ul className={styles.navigation} style={width > 850 ? { display: "none" }: null}>
                    <li>
                        <MenuIcon onClick={toggleFullscreenNav} checked={fullscreenNavOpen}/>
                    </li>
                </ul>
                <ul className={styles.navigation} style={width <= 850 ? { display: "none" }: null}>
                    <div className={selbarClass} />
                    <li className={styles.link} onClick={() => goTo("/")}>Home</li>
                    <li className={styles.link} onClick={() => goTo(topTab === "portfolio" ? location : "/portfolio")}>Portfolio</li>
                    <li className={styles.link} onClick={() => goTo("/resume")}>Resume</li>
                    <li className={styles.link} onClick={() => goTo("/contact")}>Contact</li>
                </ul>
            </nav>
            <div className={`${styles.fullpageNav_container} ${!fullscreenNavOpen ? styles.fullpageNav_hidden : null}`}>
                <ul className={styles.fullpageNav}>
                    <li className={styles.link} onClick={() => goTo("/")}>Home</li>
                    <li className={styles.link} onClick={() => goTo(topTab === "portfolio" ? location : "/portfolio")}>Portfolio</li>
                    <li className={styles.link} onClick={() => goTo("/resume")}>Resume</li>
                    <li className={styles.link} onClick={() => goTo("/contact")}>Contact</li>
                </ul>
            </div>
        </>
    );
  }
  
export default Navigation;
  
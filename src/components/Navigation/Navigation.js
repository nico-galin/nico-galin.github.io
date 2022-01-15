import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => {
    const location = useLocation().pathname
    const topTab = location.split("/")[1]
    useEffect(() => {
        // runs on location, i.e. route, change
    }, [location])
    
    let selbarClass = styles.selBar;
    if (topTab === "portfolio" || topTab === "itemspotlight") {
        selbarClass = styles.selBar_tq;
    } else if (topTab === "resume") {
        selbarClass = styles.selBar_half;
    } else if (topTab === "contact") {
        selbarClass = styles.selBar_quarter;
    }
    return (
        <nav>
            <div className={styles.leftNavigation}>
                <div className={styles.leftBlock} />
                <li>
                    <Link to="/" className={styles.link}>Nico Galin</Link>
                </li>
            </div>
            <ul className={styles.navigation}>
                <div className={selbarClass} />
                <li>
                    <Link to="/" className={styles.link}>Home</Link>
                </li>
                <li>
                    <Link to={topTab === "portfolio" ? location : "/portfolio"} className={styles.link}>Portfolio</Link>
                </li>
                <li>
                    <Link to="/resume" className={styles.link}>Resume</Link>
                </li>
                <li>
                    <Link to="/contact" className={styles.link}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
  }
  
export default Navigation;
  
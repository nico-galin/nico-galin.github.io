import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => {
    const location = useLocation().pathname
    useEffect(() => {
        // runs on location, i.e. route, change
    }, [location])
    
    let selbarClass = styles.selBar;
    if (location === "/portfolio" || location === "/itemspotlight") {
        selbarClass = styles.selBar_tq;
    } else if (location === "/resume") {
        selbarClass = styles.selBar_half;
    } else if (location === "/contact") {
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
                    <Link to="/portfolio" className={styles.link}>Portfolio</Link>
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
  
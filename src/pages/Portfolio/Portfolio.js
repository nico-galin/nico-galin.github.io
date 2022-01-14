import styles from './Portfolio.module.scss';
import React, { useState } from 'react';
import Hexagon from '../../components/Hexagon/Hexagon';
import HexGrid from '../../components/HexGrid/HexGrid';
import hexagons from '../../data/hexagons';

const Portfolio = () => {
    const [menuChoice, setMenuChoice] = useState(0)
    const [selectedHexagon, setSelectedHexagon] = useState()
    let [iconography_class, proj_class] = menuChoice === 0 ?
        [styles.selected, styles.unselected] :
        [styles.unselected, styles.selected]

    const toggleMenuChoice = () => {
        setMenuChoice(cur => cur === 0 ? 1 : 0)
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <button className={iconography_class} onClick={toggleMenuChoice}>Iconography</button>
                <button href="#" className={proj_class} onClick={toggleMenuChoice}>Projects</button>
            </div>
            <div className={styles.vignette} />
            <HexGrid size={130} length={5} width={8} data={hexagons}/>
        </div>
    );
}

export default Portfolio;
//                     <div style={`background-image: url('../../../public/logo512.png');`} />
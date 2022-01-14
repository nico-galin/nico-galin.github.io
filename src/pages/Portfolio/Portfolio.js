import styles from './Portfolio.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import HexGrid from '../../components/HexGrid/HexGrid';
import hexagons from '../../data/hexagons';
import ScrollDrag from '../../components/ScrollDrag/ScrollDrag';
import { useDraggable } from 'react-use-draggable-scroll';

const Portfolio = () => {
    const ref = useRef();
    const gridRef = useRef();
    const { events } = useDraggable(ref, 0.8);
    const [menuChoice, setMenuChoice] = useState(0)
    const [selectedHexagon, setSelectedHexagon] = useState()
    let [iconography_class, proj_class] = menuChoice === 0 ?
        [styles.selected, styles.unselected] :
        [styles.unselected, styles.selected]

    const toggleMenuChoice = () => {
        setMenuChoice(cur => cur === 0 ? 1 : 0)
    }

    useEffect( () => {
        ref.current.scrollTop = ref.current.scrollHeight/5;
        ref.current.scrollLeft = ref.current.scrollWidth/6;
    }, [gridRef.current]);

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <button className={iconography_class} onClick={toggleMenuChoice}>Iconography</button>
                <button href="#" className={proj_class} onClick={toggleMenuChoice}>Projects</button>
            </div>
            <div className={styles.vignette} />
            <div className={styles.scrollableArea} ref={ref} {...events}>
                <div className={styles.gridPadding}>
                    <HexGrid size={150} length={5} width={8} data={hexagons} start={[3, 2]} ref={gridRef} />
                </div>
            </div>

        </div>
    );
}

export default Portfolio;
//                     <div style={`background-image: url('../../../public/logo512.png');`} />
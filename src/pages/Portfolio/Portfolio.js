import styles from './Portfolio.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import HexGrid from '../../components/HexGrid/HexGrid';
import hexagons from '../../data/hexagons';
import { useDraggable } from 'react-use-draggable-scroll';
import { Navigate, useNavigate } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';

const Portfolio = () => {
    const navigate = useNavigate();
    const ref = useRef();
    const gridRef = useRef();
    const { events } = useDraggable(ref, 0.8);
    const [menuChoice, setMenuChoice] = useState(0)
    let [iconography_class, proj_class] = menuChoice === 0 ?
        [styles.selected, styles.unselected] :
        [styles.unselected, styles.selected]

    useEffect( () => {
        if(ref) {
            ref.current.scrollTop = ref.current.scrollHeight/5;
            ref.current.scrollLeft = ref.current.scrollWidth/6;
        }
    }, []);

    const selectItem = (id) => {
        if (id !== "null") {
            navigate(`/itemspotlight?${id}`)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <button className={iconography_class} onClick={() => setMenuChoice(0)}>Iconography</button>
                <button href="#" className={proj_class} onClick={() => setMenuChoice(1)}>Projects</button>
            </div>
            <div className={styles.vignette} />
            <div className={styles.scrollableArea} ref={ref} {...events}>
                <div className={styles.gridPadding}>
                    <HexGrid size={150} length={6} width={9} data={hexagons} start={[3, 2]} ref={gridRef} onClick={selectItem}/>
                </div>
            </div>

        </div>
    );
}

export default Portfolio;
//                     <div style={`background-image: url('../../../public/logo512.png');`} />
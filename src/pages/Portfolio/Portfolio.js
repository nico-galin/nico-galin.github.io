import styles from './Portfolio.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import HexGrid from '../../components/HexGrid/HexGrid';
import { iconography_hexagons, project_hexagons } from '../../data/hexagons';
import { useDraggable } from 'react-use-draggable-scroll';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const Portfolio = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const ref = useRef();
    const gridRef = useRef();
    const { events } = useDraggable(ref, 0.8);
    const [menuChoice, setMenuChoice] = useState()
    let [iconography_class, proj_class] = [null, null]
    if (menuChoice === 0) {
        iconography_class = styles.selected;
        proj_class = styles.unselected
    } else if (menuChoice === 1) {
        iconography_class = styles.unselected;
        proj_class = styles.selected
    }

    useEffect(() => {
        const menuOption = location.pathname.split("/")[2]
        menuOption === "projects" ? setMenuChoice(1) : setMenuChoice(0);
        if(ref) {
            ref.current.scrollTop = ref.current.scrollHeight/5;
            ref.current.scrollLeft = ref.current.scrollWidth/6;
        }
    }, [navigate]);

    const changeSelection = (ind) => {
        setMenuChoice(ind)
        setTimeout(function () {
            navigate(`/portfolio${ind === 0 ? "" : "/projects"}`);
        }, 800);
    }

    const selectItem = (id) => {
        if (id !== "null") {
            navigate(`/itemspotlight?${id}`)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <button className={iconography_class} onClick={() => changeSelection(0)}>Iconography</button>
                <button href="#" className={proj_class} onClick={() => changeSelection(1)}>Projects</button>
            </div>
            <div className={styles.vignette} />
            <div className={styles.scrollableArea} ref={ref} {...events}>
            <div className={styles.gridPadding}>
                <Routes>
                    <Route path="/" element={
                        <div className={menuChoice === 0 ? styles.grid : styles.grid_hidden}>
                            <HexGrid size={150} length={6} width={9} data={iconography_hexagons} start={[3, 2]} ref={gridRef} delayFraction={3} onClick={selectItem}/>
                        </div>
                        } />
                    <Route path="/projects" element={
                        <div className={menuChoice === 1 ? styles.grid : styles.grid_hidden}>
                            <HexGrid size={300} length={3} width={5} data={project_hexagons} start={[1, 2]} ref={gridRef} delayFraction={1} onClick={selectItem}/>
                        </div>
                        } />
                </Routes>
            </div>
            </div>

        </div>
    );
}

export default Portfolio;
import styles from './Home.module.scss';
import React from 'react';
import Button from '../../components/Button/Button';
import Hexagon from '../../components/Hexagon/Hexagon';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const workWithMe = () => {
        navigate('/contact');
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.edgeLine} />
            <div className={styles.edgeLine} />
            <div className={styles.edgeLine} />
            <div className={styles.edgeLine} />
            <div className={styles.container}>
                <div className={styles.dummy} />
                <div className={styles.content}>
                    <div className={styles.title}>Hey, I'm Nico.</div>
                    <div className={styles.subtitle}>I create modern websites, apps, and tools with Human-Centered Design principles. Oh, and love minimalism.</div>
                    <div className={styles.buttonContainer}>
                        <div className={styles.button_left}>
                            <div className={styles.button_lineSmall} />
                            <div className={styles.button_lineLarge} />
                            <div className={styles.button_lineInvisible} />
                        </div>
                        <Button label={"Work with me"} onClick={workWithMe} />
                        <div className={styles.button_right}>
                            <div className={styles.button_lineInvisible} />
                            <div className={styles.button_lineLarge} />
                            <div className={styles.button_lineSmall} />
                        </div>
                    </div>
                </div>
                <div className={styles.hexagons_wrapper}>
                    <div className={styles.hexagons}>
                        <Hexagon size={200} color={"colored"} animationDelay={1.5}/>
                        <Hexagon size={200} color={"colored"} animationDelay={1.5}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
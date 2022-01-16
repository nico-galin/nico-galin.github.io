import styles from './Contact.module.scss';
import React, { useEffect, useRef } from 'react';
import HexGrid from '../../components/HexGrid/HexGrid';
import { contact_hexagons } from '../../data/hexagons';
import { useDraggable } from 'react-use-draggable-scroll';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const ref = useRef();
    const { events } = useDraggable(ref, 0.8);
    useEffect(() => {
        if(ref) {
            ref.current.scrollTop = ref.current.scrollHeight/5;
            ref.current.scrollLeft = ref.current.scrollWidth/6;
        }
    }, [navigate]);

    const selectItem = (id) => {
        switch(id) {
            case "instagram":
                window.open("https://www.instagram.com/nicogalin/", "_blank");
                break;
            case "linkedin":
                window.open("https://www.linkedin.com/in/nicholas-galin/", "_blank");
                break;
            case "handshake":
                window.open("https://berkeley.joinhandshake.com/users/20653606/", "_blank");
                break;
            case "email":
                window.open("mailto:nico.galin@gmail.com", "_blank");
                break;
            default:
                break;
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.vignette} />
            <div className={styles.scrollableArea} ref={ref} {...events}>
                <div className={styles.gridPadding}>
                    <HexGrid size={270} large length={3} width={5} data={contact_hexagons} start={[1, 1]} delayFraction={3} onClick={selectItem}/>
                </div>
            </div>
        </div>
    );
}

export default Contact;
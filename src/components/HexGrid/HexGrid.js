import styles from './HexGrid.module.scss';
import React from 'react';
import Hexagon from '../Hexagon/Hexagon';
import { euclideanDist } from '../../utils';

const HexGrid = ({ size, length, width, resize = false, start=[0, 0], onClick = () => {}, data }) => {
    const yTrans = -1 * size / 6;
    const xTrans = size / 2;
    return (
        <div className={styles.container} style={resize ? null : {width:"max-content"}}>
            {[...Array(length)].map((_, rowInd) => (
                <div className={styles.row} style={rowInd%2 === 0 ? {"transform": `translateY(${rowInd*yTrans}px)`}: {"transform": `translate(${xTrans}px, ${rowInd*yTrans}px)`}} key={rowInd}>
                    {data.slice(rowInd*width, rowInd*width + width).map((hex, hexInd) => (
                        <Hexagon onClick={() => onClick(hex[0])} key={hexInd} imgUrl={hex[1]} color={hex[2]} size={size} animationDelay={euclideanDist([hexInd, rowInd], start)/5}/>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default HexGrid;
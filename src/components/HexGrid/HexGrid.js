import styles from './HexGrid.module.scss';
import React from 'react';
import Hexagon from '../Hexagon/Hexagon';
import { euclideanDist, notBlank } from '../../utils';
import portfolio from '../../data/portfolio';

const HexGrid = ({ size, length, width, resize = false, start=[0, 0], onClick = () => {}, delayFraction = 3, horizontalOffset = 0, data }) => {
    const yTrans = -1 * size / 6;
    const xTrans = size / 2;
    return (
        <div className={styles.container} style={resize ? null : {width:"max-content"}}>
            {[...Array(length)].map((_, rowInd) => (
                <div className={styles.row} style={rowInd%2 === 0 ? {"transform": `translateY(${rowInd*yTrans}px)`}: {"transform": `translate(${xTrans}px, ${rowInd*yTrans}px)`}} key={rowInd}>
                    {data.slice(rowInd*width, rowInd*width + width).map((hex, hexInd) => (
                        <Hexagon style={{marginLeft: `-${horizontalOffset}px`}}
                            onClick={() => onClick(hex[0])} key={hexInd} imgUrl={hex[1]} color={hex[2]}
                            inlineData={hex[0].split("_")[hex[0].split("_").length - 1] === "project" && portfolio[hex[0]] != null ?
                                {
                                    header: portfolio[hex[0]].title,
                                    description: notBlank(portfolio[hex[0]].description_short) ? portfolio[hex[0]].description_short : portfolio[hex[0]].description,
                                    footer: portfolio[hex[0]].timestamp
                                }
                            : null}
                            size={size}
                            animationDelay={euclideanDist([hexInd, rowInd], start)/delayFraction} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default HexGrid;
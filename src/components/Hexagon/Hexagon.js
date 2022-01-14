import { Link, useLocation } from 'react-router-dom';
import styles from './Hexagon.module.scss';

const Hexagon = ({ imgUrl, color, size }) => {
    let colorClass = "";
    if (color === "dark") {
        colorClass = styles.hexagon_dark
    } else if (color === "colored") {
        colorClass = styles.hexagon_colored
    }
    return (
        <div className={`${styles.hexagon} ${colorClass}`} style={{width: `${size}px`, height: `${size}px`}}>
            {imgUrl &&
                <img alt={"content"} src={imgUrl} width={size} height={size} />
            }
        </div>
    );
  }
  
export default Hexagon;
  
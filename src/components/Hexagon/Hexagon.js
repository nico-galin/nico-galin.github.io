import { Link, useLocation } from 'react-router-dom';
import styles from './Hexagon.module.scss';

const Hexagon = ({ nohover, imgUrl, color, size, animationDelay = 0, onClick = () => {} }) => {
    let colorClass = "";
    if (color === "light") {
        colorClass = styles.hexagon_light
    } else if (color === "dark") {
        colorClass = styles.hexagon_dark
    } else if (color === "colored") {
        colorClass = styles.hexagon_colored
    }
    return (
        <div onClick={() => onClick()} className={`${nohover ? styles.hexagon_large : styles.hexagon_hover} ${colorClass}`}
            style={{width: `${size}px`, height: `${size}px`, animationDelay: `${animationDelay}s`}}>
            {imgUrl &&
                <img alt={"content"} src={imgUrl} width={size} height={size} />
            }
        </div>
    );
  }
  
export default Hexagon;
  
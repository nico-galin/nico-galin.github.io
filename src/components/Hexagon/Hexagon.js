import styles from './Hexagon.module.scss';
import { notBlank } from '../../utils';

const Hexagon = ({ style, nohover, large, imgUrl, color, size, inlineData, animationDelay = 0, onClick = () => {} }) => {
    let colorClass = "";
    if (color === "light") {
        colorClass = styles.hexagon_light
    } else if (color === "dark") {
        colorClass = styles.hexagon_dark
    } else if (color === "colored") {
        colorClass = styles.hexagon_colored
    }
    return (
        <div onClick={() => onClick()} className={`${nohover ? styles.hexagon : styles.hexagon_hover} ${large ? styles.hexagon_large : null} ${colorClass}`}
            style={{width: `${size}px`, height: `${size}px`, animationDelay: `${animationDelay}s`, ...style}}>
            {imgUrl &&
                <img alt={"content"} src={imgUrl} width={size} height={size} />
            }
            {notBlank(inlineData) &&
                 <div onClick={() => onClick()} className={`${styles.hexagon} ${styles.hexagon_dark} ${styles.hexagon_inner}`}
                 style={{width: `${size*0.85}px`, height: `${size*0.85}px`, animationDelay: `${animationDelay}s`, ...style, left: `${size/11.5}px`}}>
                     <div className={styles.hexagon_inner_container}>
                        <div className={styles.hexagon_inner_header}>{inlineData.header}</div>
                        {notBlank(inlineData.description) && <div className={styles.hexagon_inner_desc}>{inlineData.description}</div> }
                        {notBlank(inlineData.footer) && <div className={styles.hexagon_inner_footer}>{inlineData.footer}</div>}
                     </div>
                </div>
            }
        </div>
    );
  }
  
export default Hexagon;
  
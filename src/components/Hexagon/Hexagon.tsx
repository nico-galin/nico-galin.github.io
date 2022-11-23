import styles from "./Hexagon.module.scss";
import validations from "../../utils/validations";
import Image from "next/image";

interface Hexagon_Props {
  style?: Record<string, unknown>;
  nohover?: boolean;
  large?: boolean;
  imgUrl?: string;
  color: string;
  size: number;
  inlineData?: {
    header?: string;
    description?: string;
    footer?: string;
  } | null;
  animationDelay?: number;
  onClick?: () => void;
}

const Hexagon = ({
  style,
  nohover,
  large,
  imgUrl,
  color,
  size,
  inlineData,
  animationDelay = 0,
  onClick = () => null,
}: Hexagon_Props) => {
  let colorClass;
  if (color === "light") {
    colorClass = styles.hexagon_light;
  } else if (color === "dark") {
    colorClass = styles.hexagon_dark;
  } else if (color === "colored") {
    colorClass = styles.hexagon_colored;
  }
  return (
    <div
      onClick={() => onClick()}
      className={`${nohover ? styles.hexagon : styles.hexagon_hover} ${
        large ? styles.hexagon_large : null
      } ${colorClass}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${animationDelay}s`,
        ...style,
        objectFit: "cover",
      }}
    >
      {imgUrl && (
        <Image
          alt="content"
          src={require(`../../assets/${imgUrl}`)}
          width={size}
          height={size}
        />
      )}
      {validations.isNotBlank(inlineData) && (
        <div
          onClick={() => onClick()}
          className={`${styles.hexagon} ${styles.hexagon_dark} ${styles.hexagon_inner}`}
          style={{
            width: `${size * 0.85}px`,
            height: `${size * 0.85}px`,
            animationDelay: `${animationDelay}s`,
            ...style,
            left: `${size / 11.5}px`,
          }}
        >
          <div className={styles.hexagon_inner_container}>
            <div className={styles.hexagon_inner_header}>
              {inlineData?.header}
            </div>
            {validations.isNotBlank(inlineData?.description) && (
              <div className={styles.hexagon_inner_desc}>
                {inlineData?.description}
              </div>
            )}
            {validations.isNotBlank(inlineData?.footer) && (
              <div className={styles.hexagon_inner_footer}>
                {inlineData?.footer}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hexagon;

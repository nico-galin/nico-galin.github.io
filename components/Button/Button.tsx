import styles from "./Button.module.scss";

interface Button_Props {
  href?: string;
  label: string;
  onClick?: () => void;
}

const Button = ({ href, label, onClick }: Button_Props) => {
  if (!!onClick)
    return (
      <div
        className={styles.btn}
        onClick={() => (!!onClick ? onClick() : null)}
      >
        {label}
      </div>
    );
  return (
    <a href={href} target="_blank" className={styles.btn} rel="noreferrer">
      {label}
    </a>
  );
};

export default Button;

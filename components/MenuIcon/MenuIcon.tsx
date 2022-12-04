import styles from "./MenuIcon.module.scss";

interface MenuIcon_Props {
  onClick: () => void;
  checked: boolean;
}

const MenuIcon = ({ onClick, checked }: MenuIcon_Props) => {
  return (
    <label htmlFor="check" className={styles.label}>
      <input type="checkbox" id="check" onChange={onClick} checked={checked} />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default MenuIcon;

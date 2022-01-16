import styles from './Button.module.scss';
import React from 'react';
import { notBlank } from '../../utils';

const Button = ({ href, label, onClick }) => {
    if (notBlank(onClick)) return <div className={styles.btn} onClick={() => onClick()}>{label}</div>
    return <a href={href} target="_blank" className={styles.btn} rel="noreferrer">{label}</a>;
}

export default Button;
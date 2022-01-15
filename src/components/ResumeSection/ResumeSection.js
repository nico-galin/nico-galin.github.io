import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { notBlank } from '../../utils';
import styles from './ResumeSection.module.scss';

const ResumeSection = ({ multi, title, subtitle, subtitles, descriptions}) => {
    return (
        <div className={styles.container}>
            {notBlank(title) && <div className={multi ? styles.title_multi : styles.title}>{title}</div>}
            {multi ?
                <div className={styles.nested}>
                    {[...Array(subtitles.length)].map((_, ind) => (
                        <ResumeSection subtitle={subtitles[ind]} descriptions={descriptions[ind]} />
                    ))}
                </div>
            :
                <>
                    <div className={styles.subtitle}>{subtitle}</div>
                    {notBlank(descriptions) && descriptions.map(desc => (
                        <div className={styles.description}>{desc}</div>
                    ))}
                </>
            }
        </div>
    );
  }
  
export default ResumeSection;
  
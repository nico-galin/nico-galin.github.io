import styles from './Resume.module.scss';
import React from 'react';
import { notBlank } from '../../utils';
import resume from '../../data/resume';
import ResumeSection from '../../components/ResumeSection/ResumeSection';

let experienceRaw = {};
resume.experience.forEach((exp, ind) => {
    if (!experienceRaw[exp.company]) {
        experienceRaw[exp.company] = {
            index: ind,
            data: []
        }
    }
    experienceRaw[exp.company].data.push({...exp})
})

let experience = [];
Object.keys(experienceRaw).forEach((key) => {
    experience.splice(experienceRaw[key].index, 0, experienceRaw[key].data)
})

const getSubtitles = (data) => {
    let ret = [];
    data.forEach(el => {
        ret.push(`${el.title} / ${el.start} - ${el.end}${notBlank(el.paren) ? " (" + el.paren + ")" : null}`);
    })
    return ret;
}

const getDescriptions = (data) => {
    let ret = [];
    data.forEach(el => {
        ret.push(el.descriptions.map(desc => "· " + desc));
    })
    return ret;
}

const combineDegrees = (degrees) => {
    let ret = "";
    degrees.forEach((deg, ind) => {
        ret += deg
        if (ind !== degrees.length - 1) ret += ", "
    })
    return ret;
}

const combineYears = (years) => {
    let ret = "";
    years.forEach((deg, ind) => {
        ret += deg
        if (ind !== years.length - 1) ret += " / "
    })
    return ret;
}

const Resume = () => {
    return (
        <div classname={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.category}>
                    <div className={styles.categoryName}><p>Experience</p></div>
                    <div className={styles.categoryContent}>
                        {experience.map((data => (
                            <>
                                {data.length === 1 ?
                                    <ResumeSection title={data[0].title} subtitle={`${data[0].company} / ${data[0].start} - ${data[0].end}${notBlank(data[0].paren) ? " (" + data[0].paren + ")" : null}`} descriptions={data[0].descriptions.map(desc => "· " + desc)}/>
                                : 
                                    <ResumeSection multi title={data[0].company} subtitles={getSubtitles(data)} descriptions={getDescriptions(data)}/>
                                }
                            </>
                            
                        )))}
                    </div>
                </div> 
                <div>
                    <div className={styles.category}>
                        <div className={styles.categoryName}><p>Education</p></div>
                        <div className={styles.categoryContent}>
                            {resume.education.map((data => (
                                <ResumeSection title={combineDegrees(data.degrees)} subtitle={data.school}/>
                            )))}
                        </div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryName}><p>Projects</p></div>
                        <div className={styles.categoryContent}>
                            {resume.projects.map((data => (
                                <ResumeSection title={data.title + " / " + combineYears(data.years)} descriptions={[data.description]}/>
                            )))}
                        </div>
                    </div> 
                    <div className={styles.category}>
                        <div className={styles.categoryName}><p>Skills</p></div>
                        <div className={styles.categoryContent}>
                            {Object.keys(resume.skills).map((key => (
                                <ResumeSection title={key} descriptions={[resume.skills[key]]}/>
                            )))}
                        </div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryName}><p>Volunteer</p></div>
                        <div className={styles.categoryContent}>
                            {resume.volunteer.map((data => (
                                <ResumeSection title={data.title} subtitle={`${data.company} / ${data.start} - ${data.end}${notBlank(data.paren) ? " (" + data.paren + ")" : null}`} descriptions={[data.description]}/>
                            )))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
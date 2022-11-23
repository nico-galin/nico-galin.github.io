import styles from "./Resume.module.scss";
import React from "react";
import validations from "../../utils/validations";
import resume from "../../constants/resume";
import ResumeSection from "../../components/ResumeSection/ResumeSection";
import Hexagon from "../../components/Hexagon/Hexagon";
import Navigation from "../../components/Navigation";
import type { NextPage } from "next";
import Head from "next/head";

const experienceRaw: { [key: string]: any } = {};
resume.experience.forEach((exp, ind) => {
  if (!experienceRaw[exp.company]) {
    experienceRaw[exp.company] = {
      index: ind,
      data: [],
    };
  }
  experienceRaw[exp.company]?.data.push({ ...exp });
});

const experience: any[] = [];
Object.keys(experienceRaw).forEach((key) => {
  experience.splice(experienceRaw[key].index, 0, experienceRaw[key].data);
});

const getSubtitles = (data: any) => {
  const ret: string[] = [];
  data.forEach((el: any) => {
    ret.push(
      `${el.title} / ${el.start} - ${el.end}${
        validations.isNotBlank(el.paren) ? " (" + el.paren + ")" : ""
      }`
    );
  });
  return ret;
};

const getDescriptions = (data: any) => {
  const ret: string[] = [];
  data.forEach((el: any) => {
    ret.push(el.descriptions.map((desc: string) => "· " + desc));
  });
  return ret;
};

const combineDegrees = (degrees: string[]) => {
  let ret = "";
  degrees.forEach((deg: string, ind: number) => {
    ret += deg;
    if (ind !== degrees.length - 1) ret += ", ";
  });
  return ret;
};

const combineYears = (years: string[]) => {
  let ret = "";
  years.forEach((deg: string, ind: number) => {
    ret += deg;
    if (ind !== years.length - 1) ret += " / ";
  });
  return ret;
};

const Resume: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nico Galin | Resume</title>
        <meta
          name="description"
          content="View Nico's resume in a gorgeous format."
          key="desc"
        />
      </Head>
      <Navigation />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.category}>
            <div className={styles.categoryName}>
              <p>Experience</p>
            </div>
            <div className={styles.categoryContent}>
              {experience.map((data, ind) =>
                data.length === 1 ? (
                  <ResumeSection
                    key={ind}
                    title={data[0].title}
                    subtitle={`${data[0].company} / ${data[0].start} - ${
                      data[0].end
                    }${
                      validations.isNotBlank(data[0].paren)
                        ? " (" + data[0].paren + ")"
                        : null
                    }`}
                    descriptions={data[0].descriptions.map(
                      (desc: string) => "· " + desc
                    )}
                  />
                ) : (
                  <ResumeSection
                    key={ind}
                    multi
                    title={data[0].company}
                    subtitles={getSubtitles(data)}
                    descriptions={getDescriptions(data)}
                  />
                )
              )}
            </div>
          </div>
          <div>
            <div className={styles.category} style={{ animationDelay: "0.3s" }}>
              <div className={styles.categoryName}>
                <p>Education</p>
              </div>
              <div className={styles.categoryContent}>
                {resume.education.map((data, ind) => (
                  <ResumeSection
                    key={ind}
                    title={combineDegrees(data.degrees)}
                    subtitle={data.school}
                  />
                ))}
              </div>
            </div>
            <div className={styles.category} style={{ animationDelay: "0.6s" }}>
              <div className={styles.categoryName}>
                <p>Projects</p>
              </div>
              <div className={styles.categoryContent}>
                {resume.projects.map((data, ind) => (
                  <ResumeSection
                    key={ind}
                    title={data.title + " / " + combineYears(data.years)}
                    descriptions={[data.description]}
                  />
                ))}
              </div>
            </div>
            <div className={styles.category} style={{ animationDelay: "0.9s" }}>
              <div className={styles.categoryName}>
                <p>Skills</p>
              </div>
              <div className={styles.categoryContent}>
                <ResumeSection
                  title="Languages"
                  descriptions={[resume.skills.languages]}
                />
                <ResumeSection
                  title="Project Management"
                  descriptions={[resume.skills.project_management]}
                />
                <ResumeSection
                  title="Technologies"
                  descriptions={[resume.skills.technologies]}
                />
              </div>
            </div>
            <div className={styles.category} style={{ animationDelay: "1.2s" }}>
              <div className={styles.categoryName}>
                <p>Volunteer</p>
              </div>
              <div className={styles.categoryContent}>
                {resume.volunteer.map((data, ind) => (
                  <ResumeSection
                    key={ind}
                    title={data.title}
                    subtitle={`${data.company} / ${data.start} - ${data.end}${
                      validations.isNotBlank(data.paren)
                        ? " (" + data.paren + ")"
                        : null
                    }`}
                    descriptions={[data.description]}
                  />
                ))}
              </div>
            </div>
            <a
              href="/resume.pdf"
              download
              className={styles.footer}
              style={{ animationDelay: "1.5s" }}
            >
              <Hexagon
                size={180}
                color={"colored"}
                imgUrl={"icons/download-icon.png"}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;

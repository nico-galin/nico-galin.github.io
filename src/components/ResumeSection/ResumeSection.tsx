import validations from "../../utils/validations";
import styles from "./ResumeSection.module.scss";

interface ResumeSection_Props {
  multi?: boolean;
  title?: string;
  subtitle?: string | undefined;
  subtitles?: string[];
  descriptions?: string[];
}

const ResumeSection = ({
  multi,
  title,
  subtitle,
  subtitles,
  descriptions,
}: ResumeSection_Props) => {
  return (
    <div className={styles.container}>
      {validations.isNotBlank(title) && (
        <div className={multi ? styles.title_multi : styles.title}>{title}</div>
      )}
      {multi ? (
        <div className={styles.nested}>
          {!!subtitles &&
            !!descriptions &&
            [...Array(Math.min(subtitles.length, descriptions.length))].map(
              (_, ind) => (
                <ResumeSection
                  key={ind}
                  subtitle={subtitles[ind]}
                  descriptions={
                    descriptions[ind] != undefined
                      ? ["" + descriptions[ind]]
                      : undefined
                  }
                />
              )
            )}
        </div>
      ) : (
        <>
          <div className={styles.subtitle}>{subtitle}</div>
          {!!descriptions &&
            descriptions.map((desc: string, ind: number) => (
              <div key={ind} className={styles.description}>
                {desc}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default ResumeSection;

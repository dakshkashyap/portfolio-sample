import styles from "@/styles/Experience.module.css";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.cards}>
        <ExperienceCard
          company="company_name"
          logo="/images/"
          roles={[
            {
              title: "title",
              startDate: "MAY 2022",
              endDate: "AUG 2022",
              description: ["description"]
            }
          ]}
        />
      </div>
    </div>
  );
}

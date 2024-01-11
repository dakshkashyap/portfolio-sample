import styles from "@/styles/Project.module.css";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div className={styles.projects}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.cards}>
        <ProjectCard
          name=""
          startDate="MAY 2023"
          endDate="PRESENT"
          description={[
            ""
          ]}
          tags={["Node.js", "Express", "React", "Next.js", "Typescript", "Firebase", "GPT-4"]}
          link=""
          extra=""
        />
      </div>
    </div>
  );
}

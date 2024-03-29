import styles from "@/styles/ProfileIcons.module.css";
import linkedin from "../../public/images/linkedin.svg";
import github from "../../public/images/github.svg";
import mail from "../../public/images/mail.svg";
import Image from "next/image";

export default function ProfileIcons() {
  return (
    <div className={styles.icons}>
      <a href="https://www.linkedin.com/in/daksh-kashyap/" target="_blank" rel="noreferrer">
        <Image src={linkedin} alt="LinkedIn" />
      </a>
      <a href="https://github.com/dakshkashyap" target="_blank" rel="noreferrer">
        <Image src={github} alt="GitHub" />
      </a>
      <a href="mailto:dakshkashyap30@gmail.com">
        <Image src={mail} alt="Email" />
      </a>
    </div>
  );
}

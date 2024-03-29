import styles from "@/styles/Intro.module.css";
import ProfileIcons from "./ProfileIcons";
import { m } from "framer-motion";
import cartoon from "../../public/images/cartoon.svg";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const descriptions = [
  "a 2nd year CS student.",
  1000,
  "a software developer.",
  1000,
];

export default function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.introText}>
        <h1 className={styles.text}>
          Hi, I&apos;m Daksh
          <m.div
            className={styles.wave}
            animate={{ rotate: [0, 15, 0] }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0,
              type: "tween"
            }}
          >
            👋
          </m.div>
        </h1>

        <TypeAnimation
          className={styles.descriptionText}
          sequence={descriptions}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          speed={25}
        />

        <div className={styles.profileIcons}>
          <ProfileIcons />
        </div>
      </div>

      <Image className={styles.cartoon} src={cartoon} alt="cartoon"></Image>
    </div>
  );
}

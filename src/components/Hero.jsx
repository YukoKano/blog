import styles from "@/styles/Hero.module.css";
import { ImageComponent } from "./ImageComponent";

import eyecatch from "@/images/coffee-barista.png";

export const Hero = ({ title, subtitle, imageOn = false }) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <ImageComponent
          imagePath={eyecatch}
          sizes={"(min-width: 1152px) 576px, 100vw"}
          isPriority
        />
      )}
    </div>
  );
};

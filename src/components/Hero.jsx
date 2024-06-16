import styles from "@/styles/Hero.module.css";
import { ImageComponent } from "./ImageComponent";

import eyecatch from "/public/images/coffee-barista.png";
// import eyecatch from "../../public/images/coffee-barista.png";はOK
// import eyecatch from "/images/coffee-barista.png";は読み込めない

export const Hero = ({ title, subtitle, imageOn = false }) => {
  // const eyecatch = "/images/coffee-barista.png";

  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <ImageComponent
          imagePath={eyecatch}
          imageWidth="1190"
          imageHeight="1190"
          sizes={"(min-width: 1152px) 576px, 100vw"}
          isPriority
        />
      )}
    </div>
  );
};

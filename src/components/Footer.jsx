import { Container } from "./Container";
import { Logo } from "./Logo";
import styles from "@/styles/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          [social]
        </div>
      </Container>
    </footer>
  );
};

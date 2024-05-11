import { Container } from "./Container";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import styles from "@/styles/Header.module.css";

export const Header = () => {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

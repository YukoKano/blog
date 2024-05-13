import styles from "@/styles/Contact.module.css";
import { Social } from "./Social";

export const Contact = () => {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social />
      <address>cube@web.mail.address</address>
    </div>
  );
};

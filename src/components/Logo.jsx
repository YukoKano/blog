import Link from "next/link";

import styles from "@/styles/Logo.module.css";

export const Logo = ({ boxOn = false }) => {
  return (
    <Link href="/" className={boxOn ? styles.box : styles.basic}>
      Cube
    </Link>
  );
};

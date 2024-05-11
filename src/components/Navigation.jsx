import Link from "next/link";
import styles from "@/styles/Navigation.module.css";

export const Navigation = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="about">about</Link>
        </li>
        <li>
          <Link href="blog">blog</Link>
        </li>
      </ul>
    </nav>
  );
};

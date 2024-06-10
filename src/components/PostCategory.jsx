import styles from "@/styles/PostCategory.module.css";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const PostCategory = ({ categories }) => {
  return (
    <div className={styles.flexContainer}>
      <h3 className={styles.heading}>
        <FontAwesomeIcon icon={faFolderOpen} />
        <span className="sr-only">Categories</span>
      </h3>
      <ul className={styles.list}>
        {categories.map(({ name, slug }) => (
          <li key={slug}>
            <Link href={`/blog/category/${slug}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

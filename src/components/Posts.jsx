import styles from "@/styles/Posts.module.css";
import Link from "next/link";
import { ImageComponent } from "./ImageComponent";

export const Posts = ({ posts }) => {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`}>
            <ImageComponent
              imagePath={eyecatch.url}
              imageWidth={eyecatch.width}
              imageHeight={eyecatch.height}
            />
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  );
};

import styles from "@/styles/PostBody.module.css";

export const PostBody = ({ children }) => {
  return <div className={styles.stack}>{children}</div>;
};

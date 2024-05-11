import styles from "@/styles/TwoColumns.module.css";

export const TwoColumns = ({ children }) => {
  return <div className={styles.flexContainer}>{children}</div>;
};

export const TwoColumnsMain = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};

/*
TwoColumns.Main - function Main ({children}) {
  return ...
}
って書いたらTwoColumnsのみインポートで使える
*/

export const TwoColumnsSidebar = ({ children }) => {
  return <div className={styles.sidebar}>{children}</div>;
};

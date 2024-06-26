import styles from "@/styles/Accordion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

export const Accordion = ({ heading, children }) => {
  return (
    <div className={styles.open}>
      <h3 className={styles.heading}>
        {/* h3にbutton……？ */}
        <button>
          {heading}
          <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
        </button>
      </h3>
      t
      <div className={styles.text}>
        <div className={styles.textInner}>{children}</div>
      </div>
    </div>
  );
};

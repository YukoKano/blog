"use client";

import styles from "@/styles/Accordion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Accordion = ({ heading, children }) => {
  const [textIsOpen, setTextIsOpen] = useState(false);

  const toggleText = () => {
    setTextIsOpen((prev) => !prev);
  };
  return (
    <div className={textIsOpen ? styles.open : styles.close}>
      <h3 className={styles.heading}>
        {/* h3にbutton……？ */}
        <button onClick={toggleText}>
          {heading}
          <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
        </button>
      </h3>
      <div className={styles.text}>
        <div className={styles.textInner}>{children}</div>
      </div>
    </div>
  );
};

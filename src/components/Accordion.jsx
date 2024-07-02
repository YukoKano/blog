"use client";

import styles from "@/styles/Accordion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

export const Accordion = ({ heading, children }) => {
  const [textIsOpen, setTextIsOpen] = useState(false);

  const toggleText = () => {
    setTextIsOpen((prev) => !prev);
  };

  const refText = useRef(null);

  return (
    <div className={textIsOpen ? styles.open : styles.close}>
      <div>
        {/* h3にbutton……？ */}
        <button onClick={toggleText} className={styles.heading}>
          {heading}
          <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
        </button>
      </div>
      <div
        className={styles.text}
        ref={refText}
        style={{
          "--text-height": refText.current
            ? `${refText.current.scrollHeight}px`
            : "0px", // 読み込んで最初に↑が処理されるとマウント途中だからrefがなくてエラーになる refの初期値を{scrollHeight: 0}としておくこともできる
        }}
      >
        <div className={styles.textInner}>{children}</div>
      </div>
    </div>
  );
};

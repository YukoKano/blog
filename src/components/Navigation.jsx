"use client";

import Link from "next/link";
import styles from "@/styles/Navigation.module.css";

import { useState } from "react";

export const Navigation = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        // なんだこの書き方……
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">MENU</span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href="/" onClick={closeNav}>
            home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={closeNav}>
            about
          </Link>
        </li>
        <li>
          <Link href="/blog" onClick={closeNav}>
            blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

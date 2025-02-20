"use client";

import { useEffect, useState } from "react";
import styles from "./nav.module.scss";
import Image from "next/image";
import NavLogo from "./../../../public/nav_logo.png";

export default function WebNav() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isFadedOut, setIsFadedOut] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 150); 
      setIsFadedOut(scrollPosition < 100); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.heroSticky} ${hasScrolled ? styles.scrolled : ""} ${isFadedOut ? styles.fadedOut : ""}`}
    >
      <Image
        src={NavLogo}
        width={200}
        height={45}
        alt="Company logo"
        className={isFadedOut ? styles.fadedOut : ""}
      />
      <ol className={styles.menu_button}>
        <li>
          <a>STRONA GŁÓWNA</a>
        </li>
        <span>•</span>
        <li>
          <a>O NAS</a>
        </li>
        <span>•</span>
        <li>
          <a>KONTAKT</a>
        </li>
      </ol>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import styles from "./nav.module.scss";
import Image from "next/image";
import NavLogo from "./../../../public/logo-dominus-small.png";

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${styles.heroSticky} ${hasScrolled ? styles.scrolled : ""} ${
        isFadedOut ? styles.fadedOut : ""
      }`}
    >
      <Image
        src={NavLogo}
        width={275}
        height={45}
        alt="Company logo"
        className={isFadedOut ? styles.fadedOut : ""}
      />
      <ol className={styles.menu_button}>
        <li>
          <a onClick={() => scrollToSection("aboutid")}>STRONA GŁÓWNA</a>
        </li>
        <span>•</span>
        <li>
          <a onClick={() => scrollToSection("servicesid")}>O NAS</a>
        </li>
        <span>•</span>
        <li>
          <a onClick={() => scrollToSection("contactid")}>KONTAKT</a>
        </li>
      </ol>
    </div>
  );
}

"use client";

import Icon from "@mdi/react";
import styles from "./nav.module.scss";
import { mdiEmail, mdiPhone } from "@mdi/js";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavLogo from "./../../../public/nav_logo.png";

export default function WebNav() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.heroSticky} ${hasScrolled ? styles.scrolled : styles.heroStickyTransparent
        }`}
    >
      <Image
        src={NavLogo}
        width={200}
        height={45}
        alt="Company logo"
      />
      <ol>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Gallery</a>
        </li>
      </ol>
      <div style={{ gap: "10px", display: "flex" , width: "200px", justifyContent: "flex-end"}}>
        <button className={styles.nav_button}>
          <Icon path={mdiPhone} size={1} color="black" />
        </button>
        <button className={styles.nav_button}>
          <Icon path={mdiEmail} size={1.1} color="black" />
        </button>
      </div>
    </div>
  );
}

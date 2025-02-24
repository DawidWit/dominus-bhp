
"use client";

import styles from "./footer.module.scss";
import stylesNav from "./../nav/nav.module.scss";
import Image from "next/image";
import NavLogo from "./../../../public/nav_logo.png";

export default function WebFooter() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div id={styles.main_part}>
        <a href="" className={styles.logo_footer}>
          <Image
            src={NavLogo}
            width={250}
            height={55}
            alt="Company logo"
          ></Image>
        </a>
        <div className={`${styles.links} ${stylesNav.menu_button}`}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("aboutid");
            }}
          >
            STRONA GŁÓWNA
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("servicesid");
            }}
          >
            O NAS
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contactid");
            }}
          >
            KONTAKT
          </a>
        </div>
      </div>

      {/* <div className={styles.divider}></div> */}
      <p>
        &copy; 2025 BALIŃSKA MARIA Szkolenia w zakresie BHP &quot;DOMINUS&quot;.
        Wszelkie prawa zastrzeżone.
      </p>
    </footer>
  );
}

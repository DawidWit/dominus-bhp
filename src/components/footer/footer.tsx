"use client";

import styles from "./footer.module.scss";
import Image from "next/image";
import NavLogo from "./../../../public/logo-dominus-small.png";

export default function WebFooter() {
  return (
    <footer className={styles.footer}>
      <div id={styles.main_part}>
        <a href="#" className={styles.logo_footer}>
          <Image src={NavLogo} width={275} height={45} alt="Company logo" />
        </a>
        <div className={styles.links}>
          <a href="#">STRONA GŁÓWNA</a>
          <a href="#">O NAS</a>
          <a href="#">KONTAKT</a>
        </div>
      </div>
      <p>
        &copy; 2025 BALIŃSKA MARIA Szkolenia w zakresie BHP &quot;DOMINUS&quot;.
        Wszelkie prawa zastrzeżone.
      </p>
    </footer>
  );
}

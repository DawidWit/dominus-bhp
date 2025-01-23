import styles from "./footer.module.scss";
import stylesNav from "./../nav/nav.module.scss";
import Image from "next/image";
import NavLogo from "./../../../public/nav_logo.png";

export default function WebFooter() {
  return (
    <footer className={styles.footer} id="dupa">
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
          <a href="">STRONA GŁÓWNA</a>
          <a href="">O NAS</a>
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

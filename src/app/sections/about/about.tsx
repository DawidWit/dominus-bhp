import styles from "./about.module.scss";
import Image from "next/image";

export default function About() {
  return (
    <section className={`${styles.container}`}>
      <div className={styles.text}>
        <p className={styles.salutation}>Szanowni Państwo,</p>
        <p className={styles.paragraph}>
          Nazywam się Maria Balińska i jestem założycielką firmy Dominus BHP.
          Jestem absolwentką Wydziału Prawa i Administracji na Uniwersytecie im.
          Adama Mickiewicza w Poznaniu na kierunku prawo oraz posiadam specjalistyczne
          kwalifikacje w zakresie bezpieczeństwa i higieną pracy.
        </p>
        <p className={styles.paragraph}>
          Nasz zespół tworzą doświadczeni specjaliści, którzy łączą wiedzę
          praktyczną z akademickim podejściem. Zależy nam na świadczeniu
          profesjonalnych usług, zapewniając naszym klientom profesjonalne
          wsparcie w kwestiach BHP i prawnych.
        </p>
        <p className={styles.signature}>Maria Balińska</p>
      </div>
      <div className={styles.photo}>
        {" "}
        <Image
          src="/about_us_photo.jpg"
          alt="About Us"
          width={600}
          height={400}
          className={styles.image}
        />
      </div>
    </section>
  );
}

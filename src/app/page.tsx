import styles from "./page.module.scss";
import Head from "next/head";
import Image from "next/image";
import LogoFull from "./../../public/logo_full_500x500.webp"
import WebFooter from "@/components/footer";

import WebNav from "@/components/nav/nav";
import InfoSection from "@/components/info_stage/info_stage";

export default function Home() {
  return (
    <>
      {/* Head służy do ustawiania tagów <head>, np. <title> */}
      <Head>
        <title>Dominus BHP Szkolenia z zakresu BHP</title>
        <meta
          name="Dominus BHP Polska"
          content="Dominus BHP Polska – kompleksowe usługi z zakresu bezpieczeństwa i higieny pracy na terenie całej Polski. Szkolenia, audyty i doradztwo BHP dla firm w każdej branży."
        />
      </Head>

      {/* Hero Section */}

      <header className={styles.hero}>
        <WebNav />

        <Image
          src={LogoFull}
          width={1000}
          height={1000}
          alt="Picture of the author"
        />
      </header>
      {/* Główna treść */}
      <main className="container">
        <section className={styles.section}>
          <h2>O nas</h2>
          <p>
            Jesteśmy zespołem pasjonatów front-endu. Tworzymy nowoczesne
            rozwiązania dla początkujących programistów.
          </p>
        </section>
        <InfoSection />
        <section className={styles.section}>
          <h2>Co robimy?</h2>
          <p>
            Oferujemy proste przykłady projektów w HTML, CSS i React (Next.js),
            które pomogą Ci nauczyć się podstaw programowania.
          </p>
        </section>
      </main>

      {/* Stopka */}
      <WebFooter />
    </>
  );
}

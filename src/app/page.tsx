import styles from "./page.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* Head służy do ustawiania tagów <head>, np. <title> */}
      <Head>
        <title>Moja OnePage</title>
        <meta
          name="description"
          content="Przykładowa strona OnePage w Next.js + SCSS"
        />
      </Head>

      {/* Hero Section */}
      <header className={styles.hero}>
        <h1>Witaj na mojej stronie!</h1>
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

        <section className={styles.section}>
          <h2>Co robimy?</h2>
          <p>
            Oferujemy proste przykłady projektów w HTML, CSS i React (Next.js),
            które pomogą Ci nauczyć się podstaw programowania.
          </p>
        </section>
      </main>

      {/* Stopka */}
      <footer className={styles.footer}>
        <p>&copy; 2024 Moja OnePage. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </>
  );
}

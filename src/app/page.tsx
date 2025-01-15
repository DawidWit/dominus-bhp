import styles from "./page.module.scss";
import Head from "next/head";
import Image from "next/image";
import LogoFull from "./../../public/logo_full_500x500.webp"
import Logo from "./../../public/logo_500x500.webp"
import WebFooter from "@/components/footer";

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
        <div className={styles.heroSticky}>
          <a >
            DOMINUS
            {/* <Image
            width={200}
            height={200}
            alt="Picture of the author"
              src={Logo}
            /> */}
          </a>
          <ol>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
          </ol>
        </div>
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

        <section className={styles.section}>
          <h2>Co robimy?</h2>
          <p>
            Oferujemy proste przykłady projektów w HTML, CSS i React (Next.js),
            które pomogą Ci nauczyć się podstaw programowania.
          </p>
        </section>
      </main>

      {/* Stopka */}
      <WebFooter/>
    </>
  );
}

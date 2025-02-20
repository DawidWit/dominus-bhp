import styles from "./page.module.scss";
import Head from "next/head";
import Image from "next/image";
import LogoFull from "./../../public/logo_full_500x500.webp";
import WebFooter from "@/components/footer/footer";
import WebNav from "@/components/nav/nav";
import About from "@/app/sections/about/about";
import { Section } from "@/components/section/section";
import Services from "./sections/services/services";
import ContactForm from "@/components/contact_form/contact_form";

export default function Home() {
  return (
    <>
      {/* Head służy do ustawiania tagów <head>, np. <title> */}
      <Head>
        <title>
          Dominus – Ponad 20 lat doświadczenia w doradztwie prawnym i BHP
        </title>
        <meta
          name="Dominus – Ponad 20 lat doświadczenia w doradztwie prawnym i BHP"
          content="Firma Maria Balińska „Dominus” od ponad dwóch dekad wspiera przedsiębiorstwa w realizacji wymogów prawnych oraz w zakresie bezpieczeństwa i higieny pracy. Tworzymy zespół wykwalifikowanych prawników, który zapewnia kompleksowe wsparcie dostosowane do potrzeb klienta."
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

      <main className="container">
        <Section backgroundColor= "#f2f2eb">
          {" "}
          <About />
        </Section>
        <Section backgroundColor="#f2f2eb">
          {" "}
          <Services />
        </Section>
        <Section backgroundColor="#0a1343">
          <h1>sdfghjk</h1>
        </Section>
        <Section backgroundColor="#f2f2eb">
          <ContactForm />
        </Section>
      </main>
      <WebFooter />
    </>
  );
}

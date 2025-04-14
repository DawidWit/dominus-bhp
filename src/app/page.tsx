import styles from "./page.module.scss";
import Head from "next/head";
import Image from "next/image";
//import LogoFull from "./../../public/logo_full_500x500.webp";
import LogoFull from "./../../public/logo-dominus.png";
import WebFooter from "@/components/footer/footer";
import WebNav from "@/components/nav/nav";
import About from "@/app/sections/about/about";
import { Section } from "@/components/section/section";
import Services from "./sections/services/services";
import Contact from "@/components/contact_form/contact";
import Experience from "./sections/experience/experience";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Dominus – Ponad 20 lat doświadczenia w doradztwie prawnym i BHP
        </title>
        <meta
          name="Dominus – Ponad 20 lat doświadczenia w doradztwie prawnym i BHP"
          content="Firma Maria Balińska „Dominus” od ponad dwóch dekad wspiera przedsiębiorstwa w realizacji wymogów prawnych oraz w zakresie bezpieczeństwa i higieny pracy. Tworzymy zespół wykwalifikowanych prawników, który zapewnia kompleksowe wsparcie dostosowane do potrzeb klienta."
        />
      </Head>
      <header className={styles.hero}>
        <WebNav />
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <Image
            src={LogoFull}
            alt="Dominus logo"
            layout="responsive"
            width={500}
            height={500}
            priority
          />
        </div>
      </header>

      <main className="container">
        <Section id="aboutid" backgroundColor="#f2f2eb">
          {" "}
          <About />
        </Section>
        <Section id="servicesid" backgroundColor="#f2f2eb">
          {" "}
          <Services />
        </Section>
        <Section id="" backgroundColor="#f2f2eb">
          <Experience />
        </Section>
        <Section id="contactid" backgroundColor="#f2f2eb">
          <Contact />
        </Section>
      </main>
      <WebFooter />
    </>
  );
}

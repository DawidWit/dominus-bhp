import styles from "./services.module.scss";
import { ServicesBox } from "./services_box";

export default function Services() {
  return (
    <section className={`${styles.container}`}>
      <div className={styles.text}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Kompleksowe usługi BHP i prawne
        </h2>
        <div className={styles.services_list}>
          <ServicesBox
            title={
              <h3
                style={{
                  textAlign: "center",
                  color: "white",
                  textTransform: "uppercase",
                  whiteSpace: "pre-line",
                }}
              >
                {"Szkolenia \n BHP"}
              </h3>
            }
            text="Kompleksowa organizacja szkoleń wstępnych, okresowych oraz pomoc w tworzeniu programów szkoleń stanowiskowych, dostosowanych do specyfiki danego stanowiska i branży"
          />
          <ServicesBox
            title={
              <h3
                style={{
                  textAlign: "center",
                  color: "white",
                  textTransform: "uppercase",
                  whiteSpace: "pre-line",
                }}
              >
                {"Dokumentacja \n BHP"}
              </h3>
            }
            text="Tworzenie projektów zarządzeń, instrukcji BHP, ocen ryzyka zawodowego, planów
                BIOZ i innych wymaganych dokumentów"
          />
          <ServicesBox
            title={
              <h3
                style={{
                  textAlign: "center",
                  color: "white",
                  textTransform: "uppercase",
                  whiteSpace: "pre-line",
                }}
              >
                {"Dokumentacja HACCP i RODO"}
              </h3>
            }
            text="Opracowanie dokumentacji zgodnej z RODO, w tym polityki prywatności i procedur ochrony danych, a także przygotowanie księgi HACCP oraz instrukcji zapewniających bezpieczeństwo żywności"
          />
          <ServicesBox
            title={
              <h3
                style={{
                  textAlign: "center",
                  color: "white",
                  textTransform: "uppercase",
                  whiteSpace: "pre-line",
                }}
              >
                {"Dokumentacja powypadkowa"}
              </h3>
            }
            text="Sporządzanie pełnej dokumentacji wypadków, w tym ciężkich i
                śmiertelnych, zarówno w kraju, jak i za granicą"
          />
          <ServicesBox
            title={
              <h3
                style={{
                  textAlign: "center",
                  color: "white",
                  textTransform: "uppercase",
                  whiteSpace: "pre-line",
                }}
              >
                {"Reprezentacja przed organami"}
              </h3>
            }
            text="Zapewnienie wsparcia w kontaktach z Państwową Inspekcją Pracy oraz Państwową Inspekcją Sanitarną oraz innymi organami, obejmujące doradztwo i reprezentację"
          />
          <ServicesBox
            title={
              <h3
                style={{
                  textAlign: "center",
                  color: "white",
                  textTransform: "uppercase",
                  whiteSpace: "pre-line",
                }}
              >
                {"lex Kamilek"}
              </h3>
            }
            text='Zapewnienie pomocy prawnej podmiotom we wdrażaniu standardów ochrony małoletnich w oparciu o ustawę "LEX KAMILEK"'
          />
        </div>
      </div>
    </section>
  );
}

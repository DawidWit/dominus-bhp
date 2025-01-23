import styles from "./about.module.scss";

export default function About() {
  return (
    <section className={`${styles.container}`}>
      <div className={styles.text}>
        <h2>Profesjonalizm, doświadczenie i pasja</h2>
        <p>Założycielka firmy, Maria Balińska, ukończyła Wydział Prawa i Administracji Uniwersytetu im. Adama Mickiewicza w Poznaniu oraz posiada specjalistyczne wykształcenie w zakresie zarządzania BHP. Nasz zespół to specjaliści z wieloletnim doświadczeniem, którzy łączą praktyczną wiedzę z akademickim podejściem.</p>
      </div>
      <div className={styles.photo}></div>
    </section>
  );
}

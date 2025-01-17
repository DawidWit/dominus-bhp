import styles from "./info_stage.module.scss";

export default function InfoSection() {
  return (
    <section
      className={`${styles.container}`}
    >
      <div className={styles.text}></div>
      <div className={styles.photo}></div>
    </section>
  );
}

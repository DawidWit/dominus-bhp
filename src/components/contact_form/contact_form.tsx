"use client";
import React from "react";
import styles from "./commant_form.module.scss";

export default function ContactForm() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Kontakt</h2>
      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <p>
            Piotroniowice 41a <br />
            56-100 Wołów, Polska
          </p>
        </div>

        {/* Phone numbers in a column */}
        <div className={styles.infoItemColumn}>
          <p>
            <a href="tel:+48692731924">+48 692 731 924</a>
          </p>
          <p>
            <a href="tel:+48123456789">+48 123 456 789</a>
          </p>
        </div>

        <div className={styles.infoItem}>
          <p>
            <a href="mailto:bmaria131@gmail.com">bmaria131@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}

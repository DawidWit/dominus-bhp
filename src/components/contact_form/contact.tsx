"use client";
import React from "react";
import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Kontakt</h2>
      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Piotroniowice+41a,+56-100+Wołów,+Polska"
              target="_blank"
              rel="noopener noreferrer"
            >
              Piotroniowice 41a <br />
              56-100 Wołów, Polska
            </a>
          </p>
        </div>
        <div className={styles.infoItem}>
          <p>
            <a href="tel:+48692731924">+48 692 731 924</a>
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

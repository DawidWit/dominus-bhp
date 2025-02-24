import React from "react";
import styles from "./experience.module.scss";

const Experience = () => {
  return (
    <section>
      <h2 className={styles.heading}>Nasza działalność</h2>
      <p className={styles.paragraph}>
        Nasza firma obsługuje zakłady działające w różnych branżach, w tym:
      </p>
      <ul className={styles.list}>
        <li>paliwowej, budowlanej, chemicznej</li>
        <li>obróbki drewna i metalu</li>
        <li>ubojni, zakładów spożywczych</li>
        <li>Lasów Państwowych i Nadleśnictw</li>
        <li>oczyszczalni ścieków, stacji uzdatniania wody</li>
        <li>przerobu odpadów, biogazowni, fabryk styropianu, betoniarni</li>
        <li>transportowej, edukacyjnej</li>
      </ul>
      <p className={styles.paragraph}>
        Braliśmy udział w nadzorze prac przy budowie Stadionu we Wrocławiu na
        EURO 2012, modernizacji Dworca Głównego we Wrocławiu oraz nadzorze prac
        ziemnych na Autostradowej Obwodnicy Wrocławia. Mieliśmy także swój wkład
        w budowę basenu krytego przy ulicy Wejherowskiej we Wrocławiu. Obecnie
        nadzorujemy liczne inwestycje na terenie całego kraju.
      </p>
    </section>
  );
};

export default Experience;

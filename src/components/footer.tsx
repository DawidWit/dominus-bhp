import styles from "./footer.module.scss";
export default function WebFooter(){
    return <footer className={styles.footer} id="dupa">
        <div id={styles.main_part}>
        <a href="" className={styles.logo_footer}>DOMINUS</a>
        <div className={styles.links}>
            <a href="">HOME</a>
            <a href="">GALLERY</a>
        </div>
        </div>
        
        {/* <div className={styles.divider}></div> */}
    <p>&copy; 2024 BALIŃSKA MARIA Szkolenia w zakresie BHP &quot;DOMINUS&quot;. Wszelkie prawa zastrzeżone.</p>
  </footer>
}
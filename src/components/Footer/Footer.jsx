import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`${styles.footText}`}>
                <p><strong>Il Pork-Edotto (C)</strong></p>
                <p>Via Pippo 67 - Piano 15 (Settore Orbitale)</p>
            </div>
        </footer>
    );
}

export default Footer;
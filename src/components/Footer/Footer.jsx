import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={`${styles.footer}`}>
            <div className="footer-info">
                <p><strong>Il Pork-Edotto (C)</strong></p>
                <p>Via Pippo 67 - Piano 15 (Settore Orbitale)</p>
            </div>
            <div className="footer-circle"></div>
        </footer>
    );
}

export default Footer;
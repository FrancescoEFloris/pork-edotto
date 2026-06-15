import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.customFooter}>
            <div className={styles.footerContainer}>

                {/* Column 1: Brand & Info */}
                <div className={`${styles.footerCol} ${styles.brandCol}`}>
                    <div className={styles.brandText}>
                        <h2 className={styles.footerTitle}>IL PORK-EDOTTO</h2>
                        <p>Porchetta, scienza e follia.<br />La combinazione perfetta.</p>
                    </div>
                    {/* Pig Image Placeholder */}
                    <div className={`${styles.placeholder} ${styles.pigPlaceholder}`}><img src="/images/pork.png" alt="Pig" className="img-fluid"/></div>
                </div>

                <div className={styles.divider}></div>

                {/* Column 2: Quick Links */}
                <div className={`${styles.footerCol} ${styles.linksCol}`}>
                    <h3 className={styles.colHeading}>LINK RAPIDI</h3>
                    <div className={styles.linksGrid}>
                        <ul className={styles.footerLinks}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Chi Siamo</a></li>
                        </ul>
                        <ul className={styles.footerLinks}>
                            <li><a href="#">Laboratorio</a></li>
                            <li><a href="#">Contatti</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.divider}></div>

                {/* Column 3: Contact/Lab */}
                <div className={`${styles.footerCol} ${styles.contactCol}`}>
                 
                    <div className={`${styles.placeholder} ${styles.beakerPlaceholder}`}><img src="/images/potion.png" alt="Potion" className="img-fluid"/></div>
                    <div className={styles.contactInfo}>
                        <h3 className={styles.colHeading}>LABORATORIO</h3>
                        <ul className={styles.contactList}>
                            <li><i className="fa-solid fa-location-dot"></i> Via della Porchetta, 42<br />00100 Roma (RM)</li>
                            <li><i className="fa-solid fa-phone"></i> 06 1234567</li>
                            <li><i className="fa-solid fa-envelope"></i> info@porkedotto.it</li>
                        </ul>
                    </div>
                </div>

                {/* Column 4: Socials */}
                <div className={`${styles.footerCol} ${styles.socialCol}`}>
                    <h3 className={styles.colHeading}>SEGUICI</h3>
                    <div className={styles.socialIcons}>
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-tiktok"></i></a>
                    </div>
                </div>

                {/* Column 5: Stamp */}
                <div className={`${styles.footerCol} ${styles.stampCol}`}>
                    {/* Stamp Image Placeholder */}
                    <div className={`${styles.placeholder} ${styles.stampPlaceholder}`}>
                        RICERCA QUOTIDIANA<br />DAL 2015
                    </div>
                    <div className={styles.signature}>Il Maestro</div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
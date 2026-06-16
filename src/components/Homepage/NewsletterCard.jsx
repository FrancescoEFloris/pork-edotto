import styles from "./NewsletterCard.module.css";

function NewsletterCard({ isVisible, onClose }) {
   if (!isVisible) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <button
                    className={styles.closeBtn}
                    onClick={onClose}
                >
                    ✕
                </button>

                <h2>🧪 Entra nel Pork-Lab!</h2>

                <p>
                    Iscriviti alla newsletter del Pork-edotto per
                    ricevere nuovi esperimenti di gusto, offerte e
                    novità dal nostro laboratorio.
                </p>

                <input
                    type="email"
                    placeholder="La tua email"
                    className={styles.input}
                />

                <button className={styles.subscribeBtn}>
                    Iscriviti
                </button>
            </div>
        </div>
    );
}

export default NewsletterCard;
import { Link } from "react-router-dom";
import styles from "./AboutUs.module.css";

function AboutUs() {

    return (
        <div className={`${styles.aboutPage} p-5`}>
            {/* Hero */}
            <section className={styles.hero}>
                <h1>Pork-<span className={styles.red}>edotto</span></h1>
                <p className="lead">
                    Dove la scienza incontra la porchetta.
                </p>
            </section>

            {/* Chi siamo */}
            <section className={`row align-items-center mb-5 ${styles.storySection}`}>
                <div className="col-md-6">
                    <img
                        src="/images/team.png"
                        alt="Pork-edotto team"
                        className={styles.storyImage}
                    />
                </div>
                <div className="col-md-6">
                    <div className={styles.storyCard}>
                        <h2>Chi Siamo</h2>
                        <p>
                            Al Pork-edotto non ci limitiamo a preparare panini e porchetta: conduciamo ricerche avanzate nel campo della Scienza Applicata alla Fame. Nato dall'incontro tra tradizione gastronomica e genio discutibile,
                            Pork-edotto è una porchetteria-laboratorio dove ogni ricetta viene sviluppata seguendo rigorosi protocolli scientifici: assaggi ripetuti, calcoli approssimativi e un numero imprecisato di tovaglioli sporchi.
                            I nostri esperti del gusto lavorano ogni giorno per rispondere a una delle più grandi domande dell'umanità:
                            "E se ci mettessimo ancora un po' di porchetta?" La risposta, dopo anni di ricerca, è sempre la stessa: "Sì."
                        </p>

                        <p>
                            Da anni studiamo il delicato equilibrio tra croccantezza,
                            sapidità e felicità del cliente.
                        </p>
                    </div>
                </div>
            </section>

            {/* Metodo scientifico */}
            <section className={styles.methodSection}>
                <h2 className={styles.sectionTitle}>
                    Il Nostro Metodo Scientifico
                </h2>

                <div className="row">
                    <div className="col-md-4">
                        <div className={styles.methodCard}>
                            <div className={styles.methodNumber}>1</div>
                            <h3>Ipotesi</h3>
                            <p>"E se aggiungessimo altra porchetta?"</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className={styles.methodCard}>
                            <div className={styles.methodNumber}>2</div>
                            <h3>Esperimento</h3>
                            <p> Assaggi ripetuti e verifiche sul campo.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className={styles.methodCard}>
                            <div className={styles.methodNumber}>3</div>
                            <h3>Risultato</h3>
                            <p>  Un panino approvato dalla comunità scientifica.</p>
                        </div>
                    </div>

                </div>
            </section >

            {/* Valori */}
            < section className="row mb-5" >
                <div className="col-md-6">
                    <div className={styles.missionBox}>
                        <h2>La Nostra Missione</h2>
                        <p>
                            Diffondere la conoscenza scientifica della porchetta attraverso esperimenti culinari memorabili,
                            dimostrando che il confine tra gastronomia e genio è molto più sottile di quanto si pensi.
                        </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className={styles.warningBox}>
                        <h2>Attenzione</h2>
                        <ul>
                            <li>Impossibilità di tornare ai panini normali.</li>
                            <li>Forte desiderio di fare il bis</li>
                            <li>Dipendenza da crosta croccante</li>
                        </ul>
                    </div>
                </div>
            </section >

            {/* CTA finale */}
            < section className={`${styles.cta}`}>

                <div className={styles.stamp}>
                    Approvato dal Maestro Porchettiere
                </div>

                <h2>Partecipa all'esperimento</h2>
                <p>
                    Vieni a testare di persona i risultati delle nostre ricerche.
                </p>

                <button className={styles.ctaButton}>
                    <Link to="/products" className="text-decoration-none text-white">
                        Scopri il Menù
                    </Link>
                </button>
            </section >

        </div >
    );
}


export default AboutUs;
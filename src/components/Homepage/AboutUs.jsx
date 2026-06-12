import { Link } from "react-router-dom";

function AboutUs() {

    return (
        <div className="container py-5">

            {/* Hero */}
            <section className="text-center mb-5">
                <h1>Pork-edotto</h1>
                <p className="lead">
                    Dove la scienza incontra la porchetta.
                </p>
            </section>

            {/* Chi siamo */}
            <section className="row align-items-center mb-5">
                <div className="col-md-6">
                    <img
                        src="/images/about-us.jpg"
                        alt="Pork-edotto"
                        className="img-fluid rounded"
                    />
                </div>

                <div className="col-md-6">
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
            </section>

            {/* Metodo scientifico */}
            <section className="mb-5">
                <h2 className="text-center mb-4">
                    Il Nostro Metodo Scientifico
                </h2>

                <div className="row">
                    <div className="col-md-4 text-center">
                        <h3>1. Ipotesi</h3>
                        <p>
                            "E se aggiungessimo altra porchetta?"
                        </p>
                    </div>

                    <div className="col-md-4 text-center">
                        <h3>2. Esperimento</h3>
                        <p>
                            Assaggi ripetuti e verifiche sul campo.
                        </p>
                    </div>

                    <div className="col-md-4 text-center">
                        <h3>3. Risultato</h3>
                        <p>
                            Un panino approvato dalla comunità scientifica.
                        </p>
                    </div>
                </div>
            </section>

            {/* Valori */}
            <section className="row mb-5">
                <div className="col-md-6">
                    <h2>La Nostra Missione</h2>
                    <p>
                        Diffondere la conoscenza scientifica della porchetta attraverso esperimenti culinari memorabili,
                         dimostrando che il confine tra gastronomia e genio è molto più sottile di quanto si pensi.
                    </p>
                </div>

                <div className="col-md-6">
                    <h2>Attenzione</h2>
                    <ul>
                        <li>Impossibilità di tornare ai panini normali.</li>
                        <li>Forte desiderio di fare il bis</li>
                        <li>Dipendenza da crosta croccante</li>
                    </ul>
                </div>
            </section>

            {/* CTA finale */}
            <section className="text-center">
                <h2>Partecipa all'esperimento</h2>
                <p>
                    Vieni a testare di persona i risultati delle nostre ricerche.
                </p>

                <button className="btn btn-warning mb-3">
                    <Link to="/products" className="text-decoration-none text-white">
                        Scopri il Menù
                    </Link>
                </button>
            </section>

        </div>
    );
}


export default AboutUs;
import styles from "../Homepage/LastProducts.module.css"; // Usa lo stesso file CSS oppure rinominalo in modo più generico
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFetch from "../../hooks/useFetch";

function RandomProducts({ title }) {
    // Rimuoviamo i limiti dalla fetch per ottenere abbastanza prodotti da mescolare.
    // Se la tua API ha un endpoint specifico per i random, puoi usare quello.
    const { data, loading, error } = useFetch('/products');
    
    const [dishes, setDishes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Effetto per mescolare e selezionare 6 prodotti casuali quando i dati arrivano
    useEffect(() => {
        if (data && data.length > 0) {
            const shuffledDishes = [...data].sort(() => 0.5 - Math.random());
            setDishes(shuffledDishes.slice(0, 6));
        }
    }, [data]);

    const currentDish = dishes[currentIndex];

    function nextDish() {
        setCurrentIndex((index) =>
            index === dishes.length - 1 ? 0 : index + 1
        );
    }
    
    function prevDish() {
        setCurrentIndex((index) =>
            index === 0 ? dishes.length - 1 : index - 1
        );
    }

    if (error) return <p>Errore nel caricamento: {error}</p>;

    return (
        <>
            <div className={`${styles.restaurantCard}`}>
                {/* Il titolo ora è dinamico e viene passato tramite le props */}
                <h2>{title}</h2>

                {loading ? (
                    <p>Caricamento piatti...</p>
                ) : dishes.length > 0 && currentDish ? (
                    <div className={`${styles.carouselContainer}`}>
                        <div className="d-flex justify-content-around">
                            <button onClick={prevDish} className={`${styles.prevBtn} btn btn-outline-secondary`}> 
                                <span className="arrow">&larr;</span> Prev 
                            </button>
                            <button onClick={nextDish} className={`${styles.nextBtn} btn btn-outline-secondary`}> 
                                Next <span className="arrow">&rarr;</span>
                            </button>
                        </div>

                        <div className={`${styles.carouselTrack}`}>
                            <div key={currentDish.id} className={`${styles.carouselItem}`}>
                                <Link to={`/products/${currentDish.id}`}>
                                    <img src={currentDish.image} alt={currentDish.name} />
                                </Link>
                                <h3>{currentDish.name}</h3>
                                <p>€ {currentDish.price.toFixed(2).replace('.', ',')}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Nessun piatto trovato.</p>
                )}
            </div>
        </>
    );
}

export default RandomProducts;
import styles from "./LastProducts.module.css";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFetch from "../../hooks/useFetch";


function LastProducts() {

    const { data, loading, error } = useFetch('/products?sortBy=recent&limit=5')
    const [currentIndex, setCurrentIndex] = useState(0);

    const dishes = data ?? [];

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
                <h2>Ultimi piatti</h2>

                {loading ? (
                    <p>Caricamento piatti recenti...</p>
                ) : dishes.length > 0 && currentDish ? (
                    <div className={`${styles.carouselContainer}`}>
                        <div className="d-flex justify-content-around">
                            <button onClick={prevDish} className={`${styles.prevBtn} btn btn-outline-secondary`}> <span class="arrow">&larr;</span> Prev </button>
                            <button onClick={nextDish} className={`${styles.nextBtn} btn btn-outline-secondary`}> Next <span class="arrow">&rarr;</span></button></div>

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
                    <p>Nessun piatto recente trovato.</p>
                )}
            </div>
        </>
    );
}

export default LastProducts;
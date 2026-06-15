import styles from "./DishCarousel.module.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useFetch from "../../hooks/useFetch.js";


function DishCarousel({ title, endpoint }) {

    const { data, loading, error } = useFetch(endpoint);
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

    if (error) return <p>Errore nel caricamento di {title}: {error}</p>;

    return (
        <div className={`${styles.restaurantCard}`}>
            <h2>{title}</h2>

            {loading ? (
                <p>Caricamento {title.toLowerCase()}...</p>
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
                <p>Nessun elemento trovato per {title}.</p>
            )}
        </div>
    );
}

export default DishCarousel;
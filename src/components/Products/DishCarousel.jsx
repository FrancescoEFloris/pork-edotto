import styles from "./DishCarousel.module.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useFetch from "../../hooks/useFetch.js";

function DishCard({ dish }) {
    if (!dish) return null;
    const formattedPrice = dish.price.toFixed(2).replace('.', ',');

    return (
        <div className={styles.carouselItem}>
            <Link to={`/products/${dish.id}`}>
                <img src={dish.image} alt={dish.name} />
            </Link>
            <div className="d-flex align-items-center justify-content-around">
                <h3 className="fs-4 fw-bold">{dish.name}</h3>
                <p>€ {formattedPrice}</p>
            </div>
        </div>
    );
}

function DishCarousel({ title, endpoint }) {

    const { data, loading, error } = useFetch(endpoint);
    const [currentIndex, setCurrentIndex] = useState(0);
    const dishes = data ?? [];

    const prevIndex = (currentIndex - 1 + dishes.length) % dishes.length;
    const nextIndex = (currentIndex + 1) % dishes.length;

    const leftDish = dishes[prevIndex];
    const currentDish = dishes[currentIndex];
    const rightDish = dishes[nextIndex];


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
        <div>
            <h2 className="text-center fw-bold fs-1 text-decoration-underline">{title}</h2>
            <div className="d-flex justify-content-around mt-5">
                <button onClick={prevDish} className={`${styles.selectBtn} btn`}>
                    <span className="arrow">&larr;</span> Prev
                </button>
                <button onClick={nextDish} className={`${styles.selectBtn} btn`}>
                    Next <span className="arrow">&rarr;</span>
                </button>
            </div>
            {loading ? (
                <p>Caricamento {title.toLowerCase()}...</p>
            ) : dishes.length > 0 && currentDish ? (
                <div className={`${styles.carouselContainer}`}>
                    <div className={styles.carouselInner}>
                        <div className={`${styles.restaurantCard} ${styles.sideCard}`}>
                            <div className={styles.carouselTrack}>
                                <DishCard dish={leftDish} />
                            </div>
                        </div>
                        <div className={styles.restaurantCard}>
                            <div className={styles.carouselTrack}>
                                <DishCard dish={currentDish} />
                            </div>
                        </div>
                        <div className={`${styles.restaurantCard} ${styles.sideCard}`}>
                            <div className={styles.carouselTrack}>
                                <DishCard dish={rightDish} />
                            </div>
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
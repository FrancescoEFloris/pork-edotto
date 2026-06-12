import styles from "./LastProducts.module.css";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getRecentDishes from "../../handlers/getRecentDishes";

function LastProducts() {
    const [dishes, setDishes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentDish = dishes[currentIndex];

    useEffect(() => {
        const fetchDishes = async () => {
            const recentDishes = await getRecentDishes();
            setDishes(recentDishes);
        };
        fetchDishes();
    }, []);

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

    return (
        <>
            <div className={`${styles.restaurantCard}`}>
                <h2>Ultimi piatti</h2>
                {dishes.length > 0 ? (
                    <div className={`${styles.carouselContainer}`}>
                        <button onClick={prevDish}> Prev </button>
                        <button onClick={nextDish}> Next </button>
                        <div className={`${styles.carouselTrack}`}>
                            <div key={currentDish.id} className={`${styles.carouselItem}`}>
                                <Link to={`/products/${currentDish.id}`}>
                                    <img src={currentDish.image} alt={currentDish.name} />
                                </Link>
                                <h3>{currentDish.name}</h3>
                                <p>€ {currentDish.price}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Caricamento piatti recenti...</p>
                )}
            </div>
        </>
    );
}

export default LastProducts;
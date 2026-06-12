import styles from "./LastProducts.module.css";
import { useState, useEffect } from 'react';
import getRecentDishes from "../../handlers/getRecentDishes";

function LastProducts() {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        const fetchDishes = async () => {
            const recentDishes = await getRecentDishes();
            setDishes(recentDishes);
        };
        fetchDishes();
    }, []);
    return (
        <>
            <div className={`${styles.restaurantCard}`}>
                <h2>Ultimi piatti</h2>

                <div className={`${styles.carouselTrack}`}>
                    {dishes.length > 0 ? (
                        dishes.map((dish) => (
                            <div className={`${styles.carouselItem}`}>
                                <img src={dish.image} alt={dish.name} />
                                <h3>{dish.name}</h3>
                                <p>€ {dish.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>Caricamento piatti recenti...</p>
                    )}
                </div>
            </div >
        </>
    );
}

export default LastProducts;
import styles from "./LastProducts.module.css";
import { Link } from 'react-router-dom';
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
                        dishes.map((dish) => {

                            const formattedPrice = Number(dish.price).toFixed(2).replace('.', ',');

                            return (
                                <div className={`${styles.carouselItem}`} key={dish.id}>
                                    <Link to={`/products/${dish.id}`} >
                                        <img src={dish.image} alt={dish.name} />
                                    </Link>
                                    <h3>{dish.name}</h3>
                                    <p>€ {formattedPrice}</p>
                                </div>
                            );
                        })
                    ) : (
                        <p>Caricamento piatti recenti...</p>
                    )}
                </div>
            </div >
        </>
    );
}

export default LastProducts;
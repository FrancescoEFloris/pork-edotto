import styles from "./LastProducts.module.css";

function LastProducts() {
    return (
        <>
            <div className={`${styles.restaurantCard}`}>
                <h2>Ultimi piatti</h2>
                
                <div className={`${styles.carouselTrack}`}>
                    <div className={`${styles.carouselItem}`}>
                        <img src="" alt="" />
                        <h3>PIATTO 1</h3>
                        <p>€ 12.00</p>
                    </div>
                    <div className={`${styles.carouselItem}`}>
                        <img src="" alt="" />
                        <h3>PIATTO 2</h3>
                        <p>€ 8.00</p>
                    </div>
                    <div className={`${styles.carouselItem}`}>
                        <img src="" alt="" />
                        <h3>PIATTO 3</h3>
                        <p>€ 6.00</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LastProducts;
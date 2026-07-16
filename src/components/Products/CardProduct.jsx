import styles from './CardProduct.module.css';

function CardProduct({ product }) {

    if (!product.id) {
        return <p>Caricamento prodotto...</p>;
    }

    const formattedPrice = product.price.toFixed(2).replace('.', ',');

    return (
        <div className="container mt-5 pt-2 mb-4 ">
            <div className={`${styles.border} ${styles.customCard} card`}>

                <div className={`card-header my-2 text-center ${styles.titleO}`}>
                    <h2 className="mb-0">{product.name}</h2>
                </div>

                <div className="row g-0">

                    <div className="text-center mb-4 col-md-5">
                        <img src={product.image} alt={product.name} className={`${styles.productImage} img-fluid h-100`} />
                    </div>

                    <div className="col-md-7">
                        <div className="card-body h-100 d-flex flex-column">

                            <h5 className={styles.descriptionTitle}>
                                <i className="bi bi-clipboard2-pulse me-2"></i>
                                Scheda tecnica
                            </h5>
                            <p className={styles.description}>
                                {product.description}
                            </p>

                            <div className="mb-3">
                                <h5 className={styles.descriptionTitle}>
                                    🧪 Laboratorio:
                                </h5>
                                <p className={styles.description}>
                                    {product.place_of_origin}
                                </p>
                            </div>

                            <div className="mt-auto d-flex justify-content-end">

                                <div className="mb-3">
                                    <span className={styles.price}>
                                        € {formattedPrice}
                                    </span>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CardProduct;
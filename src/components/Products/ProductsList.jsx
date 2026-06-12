import { Link } from 'react-router-dom';
import ProductDetail from './ProductDetail.jsx';
import styles from './ProductsList.module.css';
import useFetch from '../../hooks/useFetch.js';


function ProductsList() {
    const { data: products, loading, error } = useFetch('/products');

    if (error) return <p>Errore: {error}</p>;


    if (loading || !products) {
        return <main><p>Caricamento prodotti...</p></main>;
    }
    // console.log(products);
    if (error) return <p>Errore: {error}</p>;

    return (
        <main>
            <div className="container">
                <div className="row row-cols-2">

                    {products.map((thisProduct) => (
                        <div key={thisProduct.id} className={`${styles.productCard}`}>
                            <h3>{thisProduct.name}</h3>
                            <p>{thisProduct.description}</p>
                            <Link to={`/products/${thisProduct.id}`} >
                                <img src={thisProduct.image} alt={thisProduct.title} className='product-img' />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default ProductsList;


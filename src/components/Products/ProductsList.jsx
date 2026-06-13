import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductsList.module.css';
import ProductsFilter from './ProductsFilter.jsx';
import useFetch from '../../hooks/useFetch.js';

function ProductsList() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const endpoint = selectedCategory
        ? `/products?category=${selectedCategory}`
        : '/products';
    const { data: products, loading, error } = useFetch(endpoint);

    function handleFilter(activeFilters) {
        setSelectedCategory(activeFilters.category);
    }
    if (error) return <p>Errore: {error}</p>;

    let contenutoProdotti;

    if (loading || !products) {
        contenutoProdotti = <p>Caricamento prodotti...</p>;
    } else {
        contenutoProdotti = products.map((thisProduct) => (
            <div key={thisProduct.id} className={`${styles.productCard}`}>
                <h3>{thisProduct.name}</h3>
                <p>{thisProduct.description}</p>
                <Link to={`/products/${thisProduct.id}`} >
                    <img src={thisProduct.image} alt={thisProduct.title} className='product-img' />
                </Link>
            </div>
        ));
    }


    return (
        <main>
            <div className="container">
                <ProductsFilter onFilter={handleFilter} />

                <div className="row row-cols-2">
                    {contenutoProdotti}
                </div>
            </div>
        </main>
    );
}
export default ProductsList;


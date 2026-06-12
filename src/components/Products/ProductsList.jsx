import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Internal Imports:
import styles from './ProductsList.module.css'
import ProductDetail from './ProductDetail.jsx';
import ProductsFilter from './ProductsFilter.jsx';
import getProductsByCategory from '../../handlers/getProductsByCategory.js';

function ProductsList() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);


    async function loadProducts(category = '') {
        try {
            const data = await getProductsByCategory(category);
            setProducts(data);
        } catch (error) {
            setError("Could not load the products");
        }
    }

    useEffect(() => {
        loadProducts();
    }, []);

    function handleFilter(activeFilters) {
        loadProducts(activeFilters.category);
    }

    if (error) return <p>Errore: {error}</p>;

    const wrapper = (
        <div className="container">
            <ProductsFilter onFilter={handleFilter} />
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
    );

    return (
        <main>
            <div className="">
                {products.length === 0 ? (
                    <p>Caricamento prodotti</p>
                ) : wrapper}
            </div>
        </main>
    );
}

export default ProductsList;


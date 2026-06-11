import React, { useState, useEffect } from 'react';
import fetchProducts from '../handlers/fetchHandler.js';

function ProductsList() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadData() {
            try {
                const dataResponse = await fetchProducts();
                setProducts(dataResponse.data);
            } catch (error) {
                setError("Could not load the products");
            }
        }
        loadData();
    }, []);
    console.log("Contenuto attuale di products:", products);
    if (error) return <p>Errore: {error}</p>;

    return (
        <div className="products-container">
            {products.length === 0 ? (
                <p>Caricamento prodotti</p>
            ) : (
                <ul className="products-list">
                    {products.map((product) => (
                        <li key={product.id} className="product-item">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ProductsList;
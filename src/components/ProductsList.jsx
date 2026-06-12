import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchProducts from '../handlers/fetchHandler.js';
import ProductDetail from './ProductDetail.jsx';


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
    // console.log(products);
    if (error) return <p>Errore: {error}</p>;

const wrapper = (
                    <div className='products-wrapper'>
                        {products.map((thisProduct) => (
                            <div key={thisProduct.id} className="product-item">
                                <h3>{thisProduct.name}</h3>
                                <p>{thisProduct.description}</p>
                                <Link to={`/products/${thisProduct.id}`} >
                                    <img src={thisProduct.image} alt={thisProduct.title} className='product-img' />
                                </Link>
                            </div>
                        ))}
                    </div>
                );

    return (
        <main>
            <div className="products-container">
                <Link to="/">Torna alla Home</Link>
                {products.length === 0 ? (
                    <p>Caricamento prodotti</p>
                ) : wrapper}
            </div>
        </main>
    );
}

export default ProductsList;


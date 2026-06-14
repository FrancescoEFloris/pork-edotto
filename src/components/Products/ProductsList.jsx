import { useState } from 'react';
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
    if (loading || !products) {
        return (
            <main>
                <div className="container">
                    <ProductsFilter onFilter={handleFilter} />
                    <p className="text-center mt-4">Caricamento prodotti...</p>
                </div>
            </main>
        );
    }
    let mainContent;
    if (selectedCategory === 'vegana') {
        mainContent = (
            <div className="alert text-center mt-4">
                <img src="./imgs/maiale_anti_vegani.png" alt="maialino anti-vegani" />
                <h3>Sezione Vegana in Porchetteria? Fa già ridere così</h3>
                <p>Apprezziamo il coraggio! Ma qui dentro l'unica cosa "vegana" che troverai è il rosmarino sulla porchetta. Dai un'occhiata alle nostre delizie tradizionali, non te ne pentirai!</p>
            </div>
        );
    } else if (products.length === 0) {
        mainContent = (
            <div className="alert alert-warning text-center mt-4">
                <h3>Nessun prodotto trovato</h3>
                <p>Non ci sono prodotti disponibili per la categoria selezionata.</p>
            </div>
        );
    } else {
        mainContent = (
            <div className="row row-cols-2">
                {products.map((thisProduct) => (
                    <div key={thisProduct.id} className={`${styles.productCard}`}>
                        <h3>{thisProduct.name}</h3>
                        <p>{thisProduct.description}</p>
                        <Link to={`/products/${thisProduct.id}`}>
                            <img src={thisProduct.image} alt={thisProduct.title} className="product-img" />
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
    return (
        <main>
            <div className="container">
                <ProductsFilter onFilter={handleFilter} />
                {mainContent}
            </div>
        </main>
    );
}

export default ProductsList;



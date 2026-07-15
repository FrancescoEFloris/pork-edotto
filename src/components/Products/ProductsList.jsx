import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductsList.module.css';
import ProductsFilter from './ProductsFilter.jsx';
import useFetch from '../../hooks/useFetch.js';

function ProductsList() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const endpoint = `/products?category=${selectedCategory}&search=${searchQuery}`;

    const { data: products, loading, error } = useFetch(endpoint);


    function handleFilter(activeFilters) {
        setSelectedCategory(activeFilters.category);
        setSearchQuery(activeFilters.search);
    }

    if (error) return <p>Errore: {error}</p>;

    if (loading || !products) {
        return (
            <main>
                <div className="container">
                    <ProductsFilter
                        onFilter={handleFilter}
                        currentCategory={selectedCategory}
                    />
                    <p className="text-center mt-4">Caricamento prodotti...</p>
                </div>
            </main>
        );
    }

    return (
        <main>
            <div className="container">
                <div className='mb-3 mt-5'>
                    <h1>Sperimentazioni Gastronomiche</h1>
                    <h5>Cerca il tuo Pork-odotto:</h5>
                </div>

                <ProductsFilter
                    onFilter={handleFilter}
                    currentCategory={selectedCategory}
                />
                {selectedCategory === 'vegana' ? (
                    <div className="alert text-center mt-2 mb-0 img-fluid">
                        <img src="/images/maiale_anti_vegani.png" alt="maialino anti-vegani" className="img-fluid mb-2" />
                        <h3>Sezione Vegana in Porchetteria? Fa già ridere così...</h3>
                        <p>Apprezziamo il coraggio! Ma qui dentro l'unica cosa "vegana" che troverai è il rosmarino sulla porchetta. Dai un'occhiata alle nostre delizie tradizionali, non te ne pentirai!</p>
                    </div>
                ) : products.length === 0 ? (
                    <div className="alert alert-warning text-center mt-4">
                        <h3>Nessun prodotto trovato</h3>
                        <p>Non ci sono prodotti disponibili per i filtri selezionati.</p>
                    </div>
                ) : (
                    <div>
                        <div className={`${styles.prodFoundTxt}`}>
                            {products.length}
                            {products.length === 1 ? ' prodotto trovato' : ' prodotti trovati'}
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                            {products.map((thisProduct) => (
                                <div key={thisProduct.id} className={`${styles.productCard}`}>
                                    <div className={`${styles.prodTextContent}`}>
                                        <div className='d-flex justify-content-end'>
                                            <h3 className='fw-bold'>{thisProduct.name}</h3>
                                            <div className={styles.priceTag}>€ {thisProduct.price.toFixed(2).replace('.', ',')}</div>
                                        </div>
                                        <p>{thisProduct.description}</p>
                                    </div>
                                    <Link to={`/products/${thisProduct.id}`} >
                                        <img src={thisProduct.image} alt={thisProduct.title} className='product-img' />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

export default ProductsList;
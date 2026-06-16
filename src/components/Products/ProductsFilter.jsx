import { useState, useEffect } from 'react';
import styles from './ProductsList.module.css';

function ProductsFilter({ onFilter, currentCategory }) {
    const [category, setCategory] = useState(currentCategory || '');
    const [search, setSearch] = useState('');

    useEffect(() => {
        setCategory(currentCategory || '');
    }, [currentCategory]);

    function submitHandler(event) {
        event.preventDefault();

        const activeFilters = {
            category: category,
            search: search
        };

        if (onFilter) {
            onFilter(activeFilters);
        }
    }

    function categoryHandler(event) {
        setCategory(event.target.value);
    }

    function searchHandler(event) {
        setSearch(event.target.value);
    }

    return (
        <form
            onSubmit={submitHandler}
            className={`row g-3 align-items-end rounded bg-white p-1 mt-3 ${styles.form}`}
        >
            <div className="col-12 col-md-4">
                <label
                    htmlFor="search-input"
                    className="form-label fw-bold"
                >
                    Cerca per nome
                </label>
                <input
                    type="text"
                    id="search-input"
                    value={search}
                    onChange={searchHandler}
                    placeholder="Nome del piatto..."
                    className={`${styles.color} form-control`}
                />
            </div>

            <div className="col-12 col-md-4">
                <label
                    htmlFor="categories"
                    className="form-label fw-bold"
                >
                    Categorie
                </label>
                <select
                    value={category}
                    onChange={categoryHandler}
                    id="categories"
                    className={`${styles.color} form-select`}
                >
                    <option value="">Tutte</option>
                    <option value="drink">Drink</option>
                    <option value="piatto">Piatto</option>
                    <option value="contorno">Contorno</option>
                    <option value="vegana">Vegana</option>
                    <option value="digitale">Digitale</option>
                    <option value="parallela">Parallela</option>
                    <option value="chimica">Chimica</option>
                    <option value="fisica quantistica">Fisica Quantistica</option>
                    <option value="biologia">Biologia</option>
                    <option value="astronomia">Astronomia</option>
                    <option value="matematica">Matematica</option>
                    <option value="paleontologia">Paleontologia</option>
                </select>
            </div>

            <div className="col-12 col-md-3">
                <button
                    type="submit"
                    className={`btn btn-warning text-white fw-bold ${styles.searchBtn}`}
                >
                    Cerca
                </button>
            </div>
        </form>
    );
}

export default ProductsFilter;
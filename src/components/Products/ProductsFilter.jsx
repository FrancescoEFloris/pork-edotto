import { useState, useEffect } from 'react';

function ProductsFilter({ onFilter, currentCategory }) {
    const [category, setCategory] = useState(currentCategory || '');

    useEffect(() => {
        setCategory(currentCategory || '');
    }, [currentCategory]);

    function submitHandler(event) {
        event.preventDefault();

        const activeFilters = {
            category: category
        };

        if (onFilter) {
            onFilter(activeFilters);
        }
    }
    function categoryHandler(event) {
        setCategory(event.target.value);
    }


    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="categories">Categorie</label>
            <select value={category} onChange={categoryHandler} id='categories'>
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
            <button type="submit">Cerca</button>
        </form>
    );
}

export default ProductsFilter;
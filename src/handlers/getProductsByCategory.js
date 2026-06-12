async function getProductsByCategory(categorySelected = "") {
    try {
        let url = "http://localhost:3000/products";
        
        if (categorySelected) {
            url += `?category=${encodeURIComponent(categorySelected)}`;
        }
        const response = await fetch(url);
        const result = await response.json();

        if (result.success) {
            return result.data;
        }
        return [];

    } catch (error) {
        console.error("Errore durante la fetch dei prodotti:", error);
        return [];
    }
}

export default getProductsByCategory;
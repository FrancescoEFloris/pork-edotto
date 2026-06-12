const DB_URL = "http://localhost:3000/products?sortBy=recent&limit=4"

async function getRecentDishes() {
    try {
        const response = await fetch(DB_URL);
        const result = await response.json();

        if (result.success) {
            return result.data;
        }

        return [];

    } catch (error) {
        console.error("Errore durante la fetch dei prodotti recenti:", error);
        return [];
    }
};

export default getRecentDishes;
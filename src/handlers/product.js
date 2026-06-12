const API_URL = "http://localhost:3000";

async function getProduct(id) {
    const url = `${API_URL}/products/${id}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Errore ${response.status}`);
    }

    const data = await response.json();

    return data.data;
}

export default getProduct;

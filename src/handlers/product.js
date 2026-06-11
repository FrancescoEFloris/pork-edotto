const API_URL = "http://localhost:3000";

function getProduct(id) {

    const url = `${API_URL}/products/${id}`;

    return fetch(url)
        .then((response) => {

            if (!response.ok) {
                throw new Error(`Errore ${response.status}`);
            }

            return response.json();
        })
        .then((data) => {
            return data.results[0];
        });
}

export default getProduct;

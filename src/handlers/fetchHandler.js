const DB_URL = 'http://localhost:3000/products';

async function fetchProducts() {
  try {
    const data = await fetch(DB_URL);

    return await data.json();

  } catch (error) {
    console.error("Errore durante la fetch:", error);
    throw error;
  }
};

export default fetchProducts;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import getProduct from "../handlers/product";

function ProductDetail() {

    const { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {

        getProduct(id)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            });

    }, [id]);
    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <Link to={`/products`} > Torna a tutti i prodotti </Link>
            <Link to="/"> Torna alla Home </Link>
        </div>
    );
}


export default ProductDetail;
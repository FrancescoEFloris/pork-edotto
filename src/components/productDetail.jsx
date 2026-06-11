import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import getProduct from "../handlers/product";
import CardProduct from "./cardProduct";

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
           <CardProduct product={product} />
        </div>
    );
}


export default ProductDetail;
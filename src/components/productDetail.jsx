import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getProduct from "../handlers/product";

function ProductDetail() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {

        getProduct(id)
            .then(product => {
                setProduct(product);
            })
            .catch(error => {
                console.error(error);
            });

    }, [id]);
}

export default ProductDetail;
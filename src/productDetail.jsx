import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from './product';
import CardProduct from './components/CardProduct';

function ProductDetail() {

    const { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {

        getProduct(id)
            .then(product => {
                setProduct(product);
            })
            .catch(error => {
                console.error(error);
            });

    }, [id]);

    return (
    <div>
        <CardProduct product ={product} />
    </div>
    )
}

export default ProductDetail;
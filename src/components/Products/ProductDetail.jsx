import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getProduct from '../../handlers/product'
import CardProduct from './CardProduct'
import ReviewsListSingleProduct from "./ReviewsListSingleProduct"


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

            <div className="container my-4">
                <h3>Recensioni ({product.reviewsCount})</h3>
                <ReviewsListSingleProduct reviews={product.reviews} />
            </div>
        </div>
    );
}


export default ProductDetail;
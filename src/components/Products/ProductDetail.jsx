import { useParams } from 'react-router-dom';
import CardProduct from './CardProduct'
import ReviewsListSingleProduct from "../Reviews/ReviewsListSingleProduct"
import useFetch from '../../hooks/useFetch';
import styles from "./ProductsList.module.css";
import NotFound from '../NotFound.jsx';
import useReview from '../../hooks/useReview.js';
import { useState, useEffect } from 'react';


function ProductDetail() {
    const [reviews, setReviews] = useState([]);

    const { id } = useParams();

    if (isNaN(Number(id)) || Number(id) <= 0) {
        return <NotFound />;
    }

    const { data: product, loading, error } = useFetch(`/products/${id}`);

    const { addReview } = useReview();

    useEffect(() => {
        if (product?.reviews) {
            setReviews(product.reviews);
        }
    }, [product]);

    const handleReviewSubmit = async (formData) => {
        try {
            const reviewWithProduct = {
                ...formData,
                product_id: id
            };

            const newReview = await addReview(reviewWithProduct, id);

            setReviews((prevReviews) => [...prevReviews, newReview]);
        } catch (error) {
            console.error("Errore durante il salvataggio della recensione:", error);
        }
    };

    if (loading) {
        return <div className="container my-4">Caricamento del prodotto in corso...</div>;
    }

    if (error) {
        return <div className="container my-4 text-danger">Errore: {error}</div>;
    }
    return (
        <main>
            <CardProduct product={product} />

            <div className={` container`}>
                <h3>Recensioni ({reviews.length || 0})</h3>
                <ReviewsListSingleProduct
                    reviews={reviews}
                    onAddReview={handleReviewSubmit} />
            </div>
        </main>
    );
}


export default ProductDetail;
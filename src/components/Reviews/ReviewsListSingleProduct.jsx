import RenderStars from "./RenderStar.jsx";
import styles from "../Products/ProductsList.module.css";
import { useState } from "react";
import useReview from "../../hooks/useReview.js";
import ReviewForm from "./Review.form.jsx";

function ReviewsListSingleProduct({ reviews, onAddReview }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleSaveReview = (formData) => {
        onAddReview(formData);
        setIsOpen(false);
    };

    return (
        <div className="reviews-list list-group">

            <div className="text-center mb-4">
                <button
                    type="button"
                    className="btn btn-success fw-bold"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "Annulla" : "Aggiungi una recensione"}
                </button>

                {isOpen && <ReviewForm onAddReview={handleSaveReview} />}
            </div>

            {reviews && reviews.length > 0 ? (
                reviews.map((review) => (
                    <div key={review.id} className={`list-group-item card mb-3 ${styles.border}`}>
                        <div className="card-body">
                            <h5 className="mb-1">{review.title}</h5>
                            <p className="mb-1">{review.name}</p>
                            <small className="mb-1">
                                {new Date(review.date).toLocaleDateString('it-IT')}
                            </small>
                            <p className="mb-1">{review.review_content}</p>
                            <p>{RenderStars(review.rating)}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-muted text-center mt-3">Non ci sono ancora commenti per questo prodotto.</p>
            )}
        </div>
    );
}

export default ReviewsListSingleProduct;
import { useState } from 'react';
import styles from "../Products/ProductsList.module.css";

function ReviewForm({ onAddReview }) {
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [rating, setRating] = useState(5);
    const [reviewContent, setReviewContent] = useState("");
    const [formError, setFormError] = useState("");

    const ratingArray = [1, 2, 3, 4, 5]

    const handleSubmit = (event) => {
        event.preventDefault();

        if (title.trim() === "" || name.trim() === "" || reviewContent.trim() === "")
            setFormError("Tutti i campi (Titolo, Nome e Commento) sono obbligatori!");
        return;

        setFormError("");

        const newReview = {
            title,
            name,
            rating: Number(rating),
            review_content: reviewContent,
            date: new Date().toISOString()
        };

        onAddReview(newReview);

        setTitle("");
        setName("");
        setRating(5);
        setReviewContent("");
    };

    return (
        <form onSubmit={handleSubmit} className={`mt-4 p-4 bg-light border rounded shadow-sm text-start ${styles.formRev}`}>
            {formError && (
                <div className="alert alert-danger py-2 mb-3">
                    {formError}
                </div>
            )}
            <div className="mb-3">
                <label className="form-label fw-bold">Titolo:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Es. Volo perfetto!"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label fw-bold">Nome:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Es. User_Aerodinamico"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label fw-bold d-block">Valutazione:</label>
                <div className="d-flex align-items-center flex-wrap gap-2">
                    <div
                        className="d-flex fs-3">
                        {ratingArray.map((number) => (
                            <span
                                key={number}
                                onClick={() => setRating(number)}>
                                {number <= rating ? <i className="bi bi-star-fill text-warning"></i> : <i className="bi bi-star text-secondary"></i>}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label fw-bold">Commento:</label>
                <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Es. Mi è volata dritta in bocca..."
                    value={reviewContent}
                    onChange={(event) => setReviewContent(event.target.value)}
                ></textarea>
            </div>
            <button type="submit" className="btn fw-bold w-100">Salva recensione</button>
        </form>
    );
}

export default ReviewForm;
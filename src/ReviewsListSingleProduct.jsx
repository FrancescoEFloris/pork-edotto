import RenderStars from "./handlers/RenderStar";


function ReviewsListSingleProduct({ reviews }) {

    return (
        <div className="reviews-list list-group">
            {reviews.map((review) => (
                <div key={review.id} className="list-group-item card mb-3">
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
            ))}
        </div>
    );

}

export default ReviewsListSingleProduct;
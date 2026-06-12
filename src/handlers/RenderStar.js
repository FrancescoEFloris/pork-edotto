function RenderStars(rating = 0) {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        stars.push(
            <i key={i} 
            className={ i < rating ? "bi bi-star-fill text-warning" : "bi bi-star text-warning" }/>
        );
    }

    return stars;
}

export default RenderStars;
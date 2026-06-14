function RenderStars(rating = 0) {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars.push(<i key={i} className="bi bi-star-fill text-warning" />);
        } else if (i === fullStars && halfStar) {
            stars.push(<i key={i} className="bi bi-star-half text-warning" />);
        }
        else {
            stars.push(<i key={i} className="bi bi-star text-warning" />);
        }
    }

    return stars;
}

export default RenderStars;
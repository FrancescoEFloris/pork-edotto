import { useParams } from 'react-router-dom';
import CardProduct from './CardProduct'
import ReviewsListSingleProduct from "../Reviews/ReviewsListSingleProduct"
import useFetch from '../../hooks/useFetch';


function ProductDetail() {

    const { id } = useParams();

    const { data: product, loading, error } = useFetch(`/products/${id}`);

    if (loading) {
        return <div className="container my-4">Caricamento del prodotto in corso...</div>;
    }

    if (error) {
        return <div className="container my-4 text-danger">Errore: {error}</div>;
    }
    return (
        <main>
            <CardProduct product={product} />

            <div className="container my-4">
                <h3>Recensioni ({product.reviewsCount || 0})</h3>
                <ReviewsListSingleProduct reviews={product?.reviews || []} />
            </div>
        </main>
    );
}


export default ProductDetail;
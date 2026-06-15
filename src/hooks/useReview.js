import { useState } from "react";
import { apiFetch } from "../utils/DB_utilities";

function useReview() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addReview = async (reviewData, productId) => {
        setLoading(true);
        setError(null);

        try {
            const data = await apiFetch(`/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reviewData),
            });

            return data;
        } catch (error) {
            setError(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };
    return { addReview, loading, error };
}

export default useReview;
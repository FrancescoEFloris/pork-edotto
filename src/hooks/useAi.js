import { useState } from 'react';
import { apiFetch } from '../utils/DB_utilities';

function useAI(endpoint) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendMessage = async (messageText) => {
        setLoading(true);
        setError(null);
        try {
            const responseData = await apiFetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ messaggio: messageText }),
            });
            setData(responseData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, data, loading, error };
}
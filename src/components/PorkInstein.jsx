import { useState } from 'react';
import useAI from '../hooks/useAi.js';
import styles from './PorkInstein.module.css';

export function PorkInstein() {
    const [userMessage, setUserMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const { sendMessage, data, loading, error } = useAI('/ai/chat');

    const handleSend = () => {
        if (!userMessage.trim()) return;
        sendMessage(userMessage);
        setUserMessage('');
    };

    return (
        <>
            {isOpen && (
                <div className={styles.porkinsteinChatBox}>
                    <h2>🎓 Chiedi a Pork-instein</h2>
                    <p><em>Il genio del gusto che ti salva la sessione di studio!</em></p>

                    <div className={styles.porkinsteinInputSection}>
                        <input
                            type="text"
                            value={userMessage}
                            onChange={(event) => setUserMessage(event.target.value)}
                            placeholder="Chiedi pure..."
                            disabled={loading}
                        />
                        <button
                            onClick={handleSend}
                            disabled={loading || !userMessage}
                        >
                            Invia
                        </button>
                    </div>

                    <div className={styles.porkinsteinResponseBox}>
                        {loading ? (
                            <p><em>Pork-instein sta consultando i suoi appunti scientifici...</em></p>
                        ) : (
                            <p>{data || "Hai qualche problema? Tranquillo ci penso io"}</p>
                        )}
                    </div>

                    {error && (
                        <div className={styles.porkinsteinErrorBox}>
                            {error}
                        </div>
                    )}
                </div>
            )}

            <button
                className={styles.porkinsteinFab}
                onClick={() => setIsOpen(!isOpen)}
                title="Apri la chat con Pork-instein"
            >
                <img
                    src={'images/mascotte.png'}
                    alt="Pork-instein Mascot"
                />
            </button>
        </>
    );
}

export default PorkInstein;
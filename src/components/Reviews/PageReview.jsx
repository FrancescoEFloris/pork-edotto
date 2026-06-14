import React from 'react';
import styles from './StyleReview.module.css';

export default function PageReview() {
    return (
        <div className={styles.container + " my-4"}>
            <div className={styles.podiumSection + " p-4 rounded mb-5"}>
                <h2 className={styles.podiumTitle + " text-center text-white mb-4"}>The best science sandwich👑</h2>
                <div className="row justify-content-center mb-4">
                    <div className="col-md-4 col-sm-6">
                        <div className={styles.podiumCard + " card gold-border text-center shadow"}>
                            <div className="card-body">
                                <span className={styles.badge + " badge bg-warning text-dark mb-2"}>1° Posto</span>

                                <img src="imgs/rev-img/podio panini.png" alt="1° Posto" className={styles.foodImg + " img-fluid my-2"} />
                                <h5 className="card-title">Nome Panino 1</h5>
                                <p className="card-text text-muted">Recensione del primo classificato...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PageReview;

import styles from './StyleReview.module.css';

function PageReview() {
    return (
        <div className="container-fluid p-0">
            <div className={styles.container + "my-0"}>
                <div className={styles.panino + " p-4 rounded mb-5"}>
                    <h2 className={styles.paninoTitle + " text-center fw-bold text-black mb-4"}>
                        The best science sandwich 1#
                    </h2>
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-4 col-sm-6">
                            <div className={styles.revCard + " card gold-border text-center shadow"}>
                                <div className="card-body">
                                    <span className={styles.badge + " badge bg-warning text-dark mb-2"}>1° Posto</span>
                                    <img src="imgs/img-panini/panino prova.webp" alt="1° Posto" className={styles.foodImg + " img-fluid my-2"} />
                                    <div className="mb-2 text-warning fs-4">⭐⭐⭐⭐⭐</div>
                                    <h5 className="card-title fw-bold">Panino panino</h5>
                                    <p className="card-text text-muted">molto buono...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center g-4 mb-5">
                        <div className="col-md-4 col-sm-6">
                            <div className={styles.revCard + " card silver-border text-center shadow"}>
                                <div className="card-body">
                                    <span className={styles.badge + " badge bg-secondary text-white mb-2"}>2° Posto</span>
                                    <img src="imgs/img-panini/panino prova.webp" alt="2° Posto" className={styles.foodImg + " img-fluid my-2"} />
                                    <div className="mb-2 text-warning fs-5">⭐⭐⭐⭐⭐</div>
                                    <h5 className="card-title fw-bold">Panino paninoso</h5>
                                    <p className="card-text text-muted">molto buono...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className={styles.revCard + " card bronze-border text-center shadow"}>
                                <div className="card-body">
                                    <span className={styles.badge + " badge bg-danger text-white mb-2"}>3° Posto</span>
                                    <img src="imgs/img-panini/panino prova.webp" alt="3° Posto" className={styles.foodImg + " img-fluid my-2"} />
                                    <div className="mb-2 text-warning fs-5">⭐⭐⭐⭐</div>
                                    <h5 className="card-title fw-bold">Panino panoso</h5>
                                    <p className="card-text text-muted">molto buono...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="p-4 bg-white rounded shadow-sm border">
                                <h3 className="mb-4 fw-bold text-secondary">Gli altri sfidanti in classifica</h3>
                                <div className="table-responsive">
                                    <table className="table table-hover align-middle m-0">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Posizione</th>
                                                <th>Nome Panino</th>
                                                <th>Valutazione</th>
                                                <th>Commento</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" className="fw-bold">#4</th>
                                                <td className="fw-semibold">Panino finto</td>
                                                <td className="text-warning">⭐⭐⭐</td>
                                                <td className="text-muted">puo' fare di piu' ma non si impegna</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="fw-bold">#5</th>
                                                <td className="fw-semibold">Panino Fallito</td>
                                                <td className="text-warning">⭐</td>
                                                <td className="text-muted">puo' fare di piu' ma non si impegna</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PageReview;









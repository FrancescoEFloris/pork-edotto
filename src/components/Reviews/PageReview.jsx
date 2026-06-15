
import styles from './StyleReview.module.css';
import useFetch from '../../hooks/useFetch';
import RenderStars from './RenderStar';

function PageReview() {
    const { data, loading, error } = useFetch('/products?sortBy=rating&&limit=10');

    const products = data || [];

    const podiumProducts = products.slice(0, 3);
    const otherProducts = products.slice(3);

    if (loading) return <div className="text-center my-5">Caricamento in corso...</div>;
    if (error) return <div className="text-center text-danger my-5">Errore: {error}</div>
    return (
        <div className="container-fluid p-0">
            <div className={styles.container + "my-0"}>
                <div className={styles.panino + " p-4 rounded"}>
                    <h2 className={styles.paninoTitle + " text-center fw-bold text-black mb-4"}>
                        The best science sandwich 1#
                    </h2>
                    {podiumProducts[0] && (
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-4 col-sm-6">
                                <div className={`${styles.revCard} card gold-border text-center shadow`}>
                                    <div className="card-body">
                                        <span className={`${styles.badge} badge bg-warning text-dark mb-2`}>1° Posto</span>
                                        <img
                                            src={podiumProducts[0].image}
                                            alt={podiumProducts[0].name}
                                            className={`${styles.foodImg} img-fluid my-2`}
                                        />
                                        < div className="mb-2 text-warning fs-4 d-flex justify-content-center align-items-center">
                                            {RenderStars(podiumProducts[0].average_rating || 0)}
                                            <span className="text-muted fs-6 fw-semibold ps-2">
                                                {`(${Number(podiumProducts[0].average_rating || 0).toFixed(1)})`}
                                            </span>
                                        </div>
                                        <h5 className="card-title fw-bold">{podiumProducts[0].name}</h5>
                                        <p className="card-text text-muted">{podiumProducts[0].description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="row justify-content-center g-4 mb-5">
                        {podiumProducts.slice(1).map((product, index) => {
                            const isSecond = index === 0;
                            const borderClass = isSecond ? "silver-border" : "bronze-border";
                            const badgeBg = isSecond ? "bg-secondary" : "bg-danger";
                            const label = isSecond ? "2° Posto" : "3° Posto";

                            return (
                                <div key={product.id} className="col-md-4 col-sm-6">
                                    <div className={`${styles.revCard} card ${borderClass} text-center shadow`}>
                                        <div className="card-body">
                                            <span className={`${styles.badge} badge ${badgeBg} text-white mb-2`}>
                                                {label}
                                            </span>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className={`${styles.foodImg} img-fluid my-2`}
                                            />
                                            <div className="mb-2 text-warning fs-4 d-flex justify-content-center align-items-center">
                                                {RenderStars(product.average_rating || 0)}
                                                <span className="text-muted fs-6 fw-semibold ps-2">
                                                    {`(${Number(product.average_rating || 0).toFixed(1)})`}
                                                </span>
                                            </div>
                                            <h5 className="card-title fw-bold">{product.name}</h5>
                                            <p className="card-text text-muted">{product.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
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
                                                <th>Descrizione</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {otherProducts.map((product, index) => (
                                                <tr key={product.id}>
                                                    <th scope="row" className="fw-bold">#{index + 4}</th>
                                                    <td className="fw-semibold">{product.name}</td>
                                                    <td className="text-warning d-flex align-items-center gap-2">
                                                        <div className="d-flex">
                                                            {RenderStars(product.average_rating || 0)}
                                                        </div>
                                                        <span className="text-muted fs-6 fw-semibold">
                                                            {`(${Number(product.average_rating || 0).toFixed(1)})`}
                                                        </span>
                                                    </td>
                                                    <td className="text-muted">{product.description}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default PageReview;









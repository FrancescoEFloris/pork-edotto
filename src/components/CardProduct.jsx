

function CardProduct({product}) {

    return 
     (
        <div className="container my-4">
            <div className="card">

                <div className="card-header">
                    <h2 className="mb-0">{product.name}</h2>
                </div>

                <div className="card-body">

                    <div className="text-center mb-4">
                        <img src={product.image} alt={product.name} className="img-fluid rounded"
                            style={{ maxHeight: "500px", objectFit: "cover" }}
                        />
                    </div>

                    <div className="row g-3">

                        <div className="col-12">
                            <strong>Descrizione:</strong>
                            <p className="mb-0">{product.description}</p>
                        </div>

                        <div className="col-12 col-md-6">
                            <strong>Prezzo:</strong>
                            <p className="mb-0">€ {product.price}</p>
                        </div>

                        <div className="col-12 col-md-6">
                            <strong>Origine:</strong>
                            <p className="mb-0">{product.place_of_origin}</p>
                        </div>

                        <div className="col-12 col-md-6">
                            <strong>Disponibile:</strong>
                            <p className="mb-0">
                                {product.if_available ? "Sì" : "No"}
                            </p>
                        </div>

                        <div className="col-12 col-md-6">
                            <strong>ID:</strong>
                            <p className="mb-0">{product.id}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default CardProduct;
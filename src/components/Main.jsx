import { Link } from 'react-router-dom';
import ProductsList from "./Products/ProductsList.jsx";

function Main() {

    return (
        <main>
            <div className="navigateBtn">
                <Link to={`/products`} >I nostri pork-dotti</Link>
                { /*<ProductsList />*/}
            </div>
        </main>
    );
}

export default Main;


// {`${styles.navigateBtn}`}
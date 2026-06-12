import { Link } from 'react-router-dom';
import ProductsList from "../Products/ProductsList.jsx";
import LastProducts from './LastProducts.jsx';

function Main() {

    return (
        <main>
            <div className="navigateBtn">
                <Link to={`/products`} >I nostri pork-dotti</Link>
                { /*<ProductsList />*/}
            </div>
            <LastProducts />
        </main>
    );
}

export default Main;


// {`${styles.navigateBtn}`}
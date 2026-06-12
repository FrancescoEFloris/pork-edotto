import { Link } from 'react-router-dom';
import ProductsList from "./ProductsList.jsx";

function Main() {

    return (
        <main>
            <Link to={`/products`} >I nostri pork-dotti</Link>
            { /*<ProductsList />*/ }
        </main>
    );
}

export default Main;
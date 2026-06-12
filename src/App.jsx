import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import ProductDetail from "./components/ProductDetail";
import NotFound from './components/NotFound';
import ProductsList from "./components/ProductsList";
import Layout from "./components/Layout";
// import styles from "./index.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsList />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>
    </BrowserRouter >

    </>
  )
}

export default App;

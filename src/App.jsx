import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage/Homepage";
import ProductDetail from "./components/Products/ProductDetail";
import AboutUs from "./components/Homepage/AboutUs";
import ProductsList from "./components/Products/ProductsList";
import Layout from "./components/Layout";
import NotFound from './components/NotFound';
import PageReview from "./components/Reviews/PageReview.jsx";
import ScrollToTop from "./components/ScrollToTop";
import VisitProvider from "./context/visitHandlers/VisitProvider.jsx";
import PorkInstein from "./components/PorkInstein.jsx";

function App() {
  return (
    <VisitProvider >
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsList />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="reviews" element={<PageReview />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <PorkInstein />
      </BrowserRouter >
    </VisitProvider >
  )
}

export default App;

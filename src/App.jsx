import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import ProductDetail from "./components/ProductDetail";
import styles from "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;

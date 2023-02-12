import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/cartPage";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

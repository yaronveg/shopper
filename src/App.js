import * as React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CartContext from "./CartContext";
import Header from "./components/Header/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartShow, setCartShow] = useState(false);

  useEffect(() => {
    fetch("/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart, cartShow, setCartShow }}>
        <Link to="/">Home</Link>
        <Cart />
        <Header />
        <Routes>
          <Route
            path="/"
            element={products.length > 1 && <Home products={products} />}
          />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;

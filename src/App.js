import * as React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CartContext from "../CartContext";
import Header from "./components/Header/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState();
  const [cart, setCart] = useState([]);
  const [cartShow, setCartShow] = useState(false);
  useEffect(() => {
    fetch("/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setPriceRange([
          Math.min(...data.map((product) => product.price)),
          Math.max(...data.map((product) => product.price)),
        ]);
        setCustomerRange([
          Math.min(...data.map((product) => product.price)),
          Math.max(...data.map((product) => product.price)),
        ]);
        setFiltered(data);
        setCategories(
          data
            .map((p) => p.category)
            .filter((value, index, array) => array.indexOf(value) === index)
        );
      });
  }, []);

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart, cartShow, setCartShow }}>
        <Link to="/">Home</Link>
        <Cart cartShow={cartShow} setCartShow={setCartShow} />
        {categories && (
          <Header
            cats={categories}
            handleCatChange={handleCatChange}
            cartShow={cartShow}
            setCartShow={setCartShow}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;

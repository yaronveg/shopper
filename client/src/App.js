import * as React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CartContext from "./CartContext";
import Header from "./components/Header/Header";

function App() {
  const [cart, setCart] = useState([]);
  const [cartShow, setCartShow] = useState(false);

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart, cartShow, setCartShow }}>
        <Link to="/">Home</Link>
        <Cart />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
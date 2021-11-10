import { useState, useEffect } from "react";
import * as React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CartContext from "./CartContext";
// import RangeSlider from "./components/Slider/Slider";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function pricetext(price) {
  return `${price}$`;
}

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const handleCatChange = (categoryChange) => {
    setCategory(categoryChange);
  };
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((response) =>
      response.json().then((data) => setProducts(data))
    );
  }, []);
  const [cartShow, setCartShow] = useState(false);

  function getCategories() {
    return products
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index);
  }

  const maxPrice = Math.max(...products.map((product) => product.price));
  const minPrice = Math.min(...products.map((product) => product.price));

  const [priceRange, setPriceRange] = React.useState([0, 1500]);

  const handleChange = (event, newPriceRange) => {
    setPriceRange(newPriceRange);
  };
  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart }}>
        <Cart cartShow={cartShow} setCartShow={setCartShow} />
        {products && (
          <Header
            cats={getCategories()}
            handleCatChange={handleCatChange}
            cartShow={cartShow}
            setCartShow={setCartShow}
          />
        )}
        <Box sx={{ width: 300 }}>
          <Slider
            getAriaLabel={() => "Price Range"}
            value={priceRange}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={pricetext}
            min={minPrice}
            max={maxPrice}
          />
        </Box>
        {products && (
          <Products
            products={products}
            currentCategory={category}
            priceRange={priceRange}
          />
        )}
      </CartContext.Provider>
    </div>
  );
}

export default App;

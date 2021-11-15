import { useState, useEffect } from "react";
import * as React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CartContext from "./CartContext";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function pricetext(price) {
  return `${price}$`;
}

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [sliderUpdate, setSliderUpdate] = useState(true);
  const handleCatChange = (categoryChange) => {
    setSliderUpdate(false);
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

  const [priceRange, setPriceRange] = React.useState([0, 1500]);
  const [customerRange, setCustomerRange] = React.useState([...priceRange]);
  const handleRangeChange = (event, newPriceRange) => {
    setPriceRange(newPriceRange);
  };
  function setSlider(range) {
    setSliderUpdate(true);
    setCustomerRange(range);
  }
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
            onChange={handleRangeChange}
            valueLabelDisplay="auto"
            getAriaValueText={pricetext}
            min={customerRange[0]}
            max={customerRange[1]}
          />
        </Box>
        {products && (
          <Products
            products={products}
            currentCategory={category}
            priceRange={priceRange}
            sliderUpdate={sliderUpdate}
            setSlider={setSlider}
          />
        )}
      </CartContext.Provider>
    </div>
  );
}

export default App;

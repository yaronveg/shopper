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
  /////// STATES ////////
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [sliderUpdate, setSliderUpdate] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartShow, setCartShow] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [customerRange, setCustomerRange] = useState([...priceRange]);

  /////// GET DATA //////
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((response) =>
      response.json().then((data) => setProducts(data))
    );
  }, []);

  ////// FUNCTIONS //////
  const getCategories = () =>
    products
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index);

  const handleCatChange = (categoryChange) => {
    setSliderUpdate(false);
    setCategory(categoryChange);
  };

  function setSlider(range) {
    setSliderUpdate(true);
    setCustomerRange(range);
  }

  function handleRangeChange(event, newPriceRange) {
    setPriceRange(newPriceRange);
  }
  // const handleRangeChange = (event, newPriceRange) => {
  //   setPriceRange(newPriceRange);
  // };

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

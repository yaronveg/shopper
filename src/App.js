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
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [customerRange, setCustomerRange] = useState(priceRange);

  ///// get data ////
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((response) =>
      response
        .json()
        .then((data) => setProducts(data))
        .then(() =>
          setPriceRange([
            Math.min(...products.map((product) => product.price)),
            Math.max(...products.map((product) => product.price)),
          ])
        )
        .then(() => {
          setCustomerRange(priceRange);
        })
    );
    // setSlider([
    //   Math.min(...products.map((product) => product.price)),
    //   Math.max(...products.map((product) => product.price)),
    // ]);
  }, []);
  const [category, setCategory] = useState("All");
  const [sliderUpdate, setSliderUpdate] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartShow, setCartShow] = useState(false);

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

  // Products for Products component

  const productsRanged = products.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  let filtered = [];
  if (category !== "All") {
    filtered = productsRanged.filter(
      (product) => product.category === category
    );
  } else {
    filtered = productsRanged;
  }
  if (!sliderUpdate)
    setSlider([
      Math.min(...filtered.map((product) => product.price)),
      Math.max(...filtered.map((product) => product.price)),
    ]);

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
        {products && <Products products={filtered} />}
      </CartContext.Provider>
    </div>
  );
}

export default App;

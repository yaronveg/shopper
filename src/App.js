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
  const [priceRange, setPriceRange] = useState([]);
  const [customerRange, setCustomerRange] = useState([]);
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [cartShow, setCartShow] = useState(false);

  ///// get data ////
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
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
      });
  }, []);

  ////// FUNCTIONS //////
  const filterProducts = function (cat) {
    if (cat !== "All") {
      filtered = productsRanged.filter(
        (product) => product.category === category
      );
    } else {
      filtered = productsRanged;
    }
  };
  const getCategories = () =>
    products
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index);

  const handleCatChange = (categoryChange) => {
    setCategory(categoryChange);
    filterProducts(categoryChange);
    // setPriceRange([
    //   Math.min(...filtered.map((product) => product.price)),
    //   Math.max(...filtered.map((product) => product.price)),
    // ]);
    // setCustomerRange(priceRange);
  };

  function handleRangeChange(event, newPriceRange) {
    setCustomerRange(newPriceRange);
  }

  // Products for Products component
  const productsRanged = products.filter(
    (product) =>
      product.price >= customerRange[0] && product.price <= customerRange[1]
  );

  let filtered = [];

  if (category !== "All") {
    filtered = productsRanged.filter(
      (product) => product.category === category
    );
  } else {
    filtered = productsRanged;
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
            value={customerRange}
            onChange={handleRangeChange}
            valueLabelDisplay="auto"
            getAriaValueText={pricetext}
            min={priceRange[0]}
            max={priceRange[1]}
          />
        </Box>
        {/* {products && <Products products={filtered} />} */}
        {priceRange[1] > 0 && <Products products={filtered} />}
      </CartContext.Provider>
    </div>
  );
}

export default App;

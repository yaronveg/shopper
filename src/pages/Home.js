import { useState, useEffect } from "react";
import * as React from "react";
import "./Home.css";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";
// import CartContext from "../CartContext";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function pricetext(price) {
  return `${price}$`;
}

function Home() {
  /////// STATES ////////
  // const [products, setProducts] = useState([]);
  // const [categories, setCategories] = useState();
  const [filtered, setFiltered] = useState(products);
  const [priceRange, setPriceRange] = useState([]);
  const [customerRange, setCustomerRange] = useState([]);
  // const [cart, setCart] = useState([]);
  // const [cartShow, setCartShow] = useState(false);

  ///// get data ////
  // useEffect(() => {
  //   fetch("/products")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //       setPriceRange([
  //         Math.min(...data.map((product) => product.price)),
  //         Math.max(...data.map((product) => product.price)),
  //       ]);
  //       setCustomerRange([
  //         Math.min(...data.map((product) => product.price)),
  //         Math.max(...data.map((product) => product.price)),
  //       ]);
  //       setFiltered(data);
  //       setCategories(
  //         data
  //           .map((p) => p.category)
  //           .filter((value, index, array) => array.indexOf(value) === index)
  //       );
  //     });
  // }, []);

  ////// FUNCTIONS //////
  const filterProducts = function (cat) {
    if (cat !== "All") {
      setFiltered(productsRanged.filter((product) => product.category === cat));
    } else {
      setFiltered(productsRanged);
    }
  };

  const handleCatChange = (categoryChange) => {
    filterProducts(categoryChange);
    setPriceRange([
      Math.min(...filtered.map((product) => product.price)),
      Math.max(...filtered.map((product) => product.price)),
    ]);
    setCustomerRange(priceRange);
  };

  function handleRangeChange(event, newPriceRange) {
    setCustomerRange(newPriceRange);
  }

  // Products for Products component
  const productsRanged = filtered.filter(
    (product) =>
      product.price >= customerRange[0] && product.price <= customerRange[1]
  );

  return (
    <div className="Home">
      {/* <CartContext.Provider value={{ cart, setCart, cartShow, setCartShow }}> */}
      {/* <Cart cartShow={cartShow} setCartShow={setCartShow} />
        {categories && (
          <Header
            cats={categories}
            handleCatChange={handleCatChange}
            cartShow={cartShow}
            setCartShow={setCartShow}
          />
        )} */}
      {priceRange && (
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
      )}
      {priceRange && <Products products={productsRanged} />}
      {/* </CartContext.Provider> */}
    </div>
  );
}

export default Home;

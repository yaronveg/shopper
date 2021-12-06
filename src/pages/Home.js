import { useState, useEffect } from "react";
import * as React from "react";
import "./Home.css";
import Products from "../components/Products/Products";
import ProductsHeader from "../components/ProductsHeader/ProductsHeader";

function Home({ products }) {
  /////// STATES ////////
  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState(products);
  const [priceRange, setPriceRange] = useState([]);
  const [customerRange, setCustomerRange] = useState([]);
  // const [category, setCategory] = useState("All");

  useEffect(() => {
    setCategories(
      products
        .map((p) => p.category)
        .filter((value, index, array) => array.indexOf(value) === index)
    );
  }, [products]);

  ///// on catChange useEffect ////
  useEffect(() => {
    setPriceRange([
      Math.min(...filtered.map((product) => product.price)),
      Math.max(...filtered.map((product) => product.price)),
    ]);
    setCustomerRange([
      Math.min(...filtered.map((product) => product.price)),
      Math.max(...filtered.map((product) => product.price)),
    ]);
  }, [filtered]);

  ////// FUNCTIONS //////
  const handleCatChange = (cat) => {
    if (cat !== "All") {
      setFiltered(products.filter((product) => product.category === cat));
    } else {
      setFiltered(products);
    }
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
      {categories.length > 0 && (
        <ProductsHeader
          categories={categories}
          handleCatChange={handleCatChange}
          priceRange={priceRange}
          customerRange={customerRange}
          handleRangeChange={handleRangeChange}
        />
      )}
      {priceRange && <Products products={productsRanged} />}
    </div>
  );
}

export default Home;

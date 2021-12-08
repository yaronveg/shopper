import "./Home.css";
import { useState, useEffect } from "react";
import * as React from "react";
import Products from "../components/Products/Products";
import ProductsHeader from "../components/ProductsHeader/ProductsHeader";

function Home() {
  /////// STATES ////////
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [priceRange, setPriceRange] = useState();
  const [customerRange, setCustomerRange] = useState();
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  useEffect(() => {
    setCategories(
      products
        .map((p) => p.category)
        .filter((value, index, array) => array.indexOf(value) === index)
    );
    setFiltered(products);
  }, [products]);

  useEffect(() => {
    if (category !== "All") {
      setFiltered(products.filter((product) => product.category === category));
    } else {
      setFiltered(products);
    }
  }, [category, products]);

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
    setCategory(cat);
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
    <div className="Home container">
      {categories.length > 0 && (
        <ProductsHeader
          category={category}
          categories={categories}
          handleCatChange={handleCatChange}
          priceRange={priceRange}
          customerRange={customerRange}
          handleRangeChange={handleRangeChange}
        />
      )}
      {customerRange && <Products products={productsRanged} />}
    </div>
  );
}

export default Home;

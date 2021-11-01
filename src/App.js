import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Blink from "./components/Blink/Blink";

function App() {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState("All");
  const handleCatChange = (categoryChange) => {
    setCategory(categoryChange);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((response) =>
      response.json().then((data) => setProducts(data))
    );
  }, []);

  function getCategories() {
    return products
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index);
  }

  return (
    <div className="App">
      {products && (
        <Header cats={getCategories()} handleCatChange={handleCatChange} />
      )}
      {products && <Blink />}
      {products && <Products products={products} currentCategory={category} />}
    </div>
  );
}

export default App;

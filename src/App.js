import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CartContext from "./CartContext";
// import Counter from "./components/Counter/Counter";

function App() {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState("All");
  const handleCatChange = (categoryChange) => {
    setCategory(categoryChange);
  };
  const [cart, setCart] = useState({ cartShow: false, cartProducts: [] });
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
      {/* <Counter></Counter> */}
      <CartContext.Provider value={{ cart, setCart }}>
        <Cart />
        {products && (
          <Header cats={getCategories()} handleCatChange={handleCatChange} />
        )}
        {products && (
          <Products products={products} currentCategory={category} />
        )}
      </CartContext.Provider>
    </div>
  );
}

export default App;

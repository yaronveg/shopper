import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CartContext from "./CartContext";

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const handleCatChange = (categoryChange) => {
    setCategory(categoryChange);
  };
  // const [cart, setCart] = useState({ cartShow: false, cartProducts: [] });
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
        {products && (
          <Products products={products} currentCategory={category} />
        )}
      </CartContext.Provider>
    </div>
  );
}

export default App;

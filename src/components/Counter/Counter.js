import "./Counter.css";
import { useContext } from "react";
import CartContext from "../../CartContext";

function Counter({ id, title, image, price }) {
  const { cart, setCart } = useContext(CartContext);
  const productInCart = cart.find((product) => product.id === id);
  const productCartIndex = cart.indexOf(productInCart);

  const addProduct = () => {
    if (!productInCart) {
      setCart([...cart, { id, title, price, image, amount: 1 }]);
    } else {
      cart[productCartIndex].amount++;
      setCart([...cart]);
    }
  };

  const removeProduct = () => {
    if (cart[productCartIndex].amount > 1) {
      cart[productCartIndex].amount--;
      setCart([...cart]);
    } else if (cart[productCartIndex].amount === 1) {
      const newCart = cart.filter((product) => product !== productInCart);
      setCart([...newCart]);
    }
  };

  const changeAmount = (e) => {
    let newAmount = e.target.value;
    if (newAmount > 0 && productInCart) {
      cart[productCartIndex].amount = newAmount;
      setCart([...cart]);
    } else if (newAmount > 0 && !productInCart) {
      setCart([...cart, { id, title, price, image, amount: newAmount }]);
    } else {
      e.target.value = 0;
      if (productInCart) {
        const newCart = cart.filter((product) => product !== productInCart);
        setCart([...newCart]);
      }
    }
  };

  return (
    <div className="counter">
      <button onClick={addProduct} className="addItem">
        +
      </button>

      <input
        type="text"
        className="itemAmount"
        value={productInCart ? cart[productCartIndex].amount : 0}
        onChange={changeAmount}
      />
      <button
        onClick={removeProduct}
        className="remItem"
        disabled={!productInCart}
      >
        -
      </button>
    </div>
  );
}

export default Counter;

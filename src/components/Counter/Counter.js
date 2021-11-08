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
    } else {
    }
  };

  const changeAmount = () => {
    console.log(`amount changed to ${cart[productCartIndex].amount}`);
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

import "./Cart.css";
import { useContext } from "react";
import CartContext from "../../CartContext";
import CartProduct from "../CartProduct/CartProduct";

function Cart() {
  const { cart, cartShow, setCartShow } = useContext(CartContext);
  const priceSum = cart.reduce(
    (acc, product) => acc + product.price * product.amount,
    0
  );
  const cartList = cart.map(({ id, title, price, image }) => (
    <CartProduct key={id} id={id} title={title} price={price} image={image} />
  ));
  return (
    <div
      className="cart"
      style={cartShow ? { right: 0 } : { right: -500 + "px" }}
    >
      <button className="close" onClick={() => setCartShow(false)}>
        X
      </button>
      <br />
      <br />
      <h1>My Cart</h1>
      <br />
      <h2>
        <strong>Total: </strong>
        {priceSum} $
      </h2>
      <br />
      {cartList}
    </div>
  );
}

export default Cart;

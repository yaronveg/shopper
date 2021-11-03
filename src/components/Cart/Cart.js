import "./Cart.css";
import { useContext } from "react";
import CartContext from "../../CartContext";
import CartProduct from "../CartProduct/CartProduct";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const { cartShow, cartProducts } = cart;
  const priceSum = cartProducts.reduce(
    (acc, product) => acc + product.price,
    0
  );
  const cartList = cartProducts.map(({ id, title, price, image }) => (
    <CartProduct key={id} id={id} title={title} price={price} image={image} />
  ));
  return (
    <div className="cart">
      <button
        className="close"
        onClick={() =>
          setCart({
            cartShow: !cartShow,
            cartProducts: cart.cartProducts,
          })
        }
      >
        X
      </button>
      <br />
      <br />
      <h1>My Cart</h1>
      <br />
      <h2>
        <strong>Total: </strong>
        {priceSum}
      </h2>
      <br />
      {cartList}
    </div>
  );
}

export default Cart;

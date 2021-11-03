import { useContext } from "react";
import CartContext from "../../CartContext";
import "./CartProduct.css";

function CartProduct({ id, title, price, image }) {
  const { cart, setCart } = useContext(CartContext);
  const { cartShow, cartProducts } = cart;
  return (
    <div className="cart-product-card" id={id}>
      <div className="cart-product-image">
        <img src={image} alt="Img" />
      </div>
      <div className="cart-product-info">
        <h5>{title}</h5>
        <h6>${price}</h6>
      </div>
      <button
        onClick={() =>
          setCart({
            cartShow: cartShow,
            cartProducts: [
              ...cartProducts,
              (cart.cartProducts[id] = { id, image, title, price }),
            ],
          })
        }
      >
        Add To Cart
      </button>
    </div>
  );
}

export default CartProduct;

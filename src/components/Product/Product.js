import { useContext } from "react";
import CartContext from "../../CartContext";
import "./Product.css";

function Product({ id, title, price, image }) {
  const { cart, setCart } = useContext(CartContext);
  const { cartShow, cartProducts } = cart;
  return (
    <div className="product-card" id={id}>
      <div className="product-image">
        <img src={image} alt="Img" />
      </div>
      <div className="product-info">
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

export default Product;

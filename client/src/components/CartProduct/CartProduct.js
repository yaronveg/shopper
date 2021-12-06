import Counter from "../Counter/Counter";
import "./CartProduct.css";

function CartProduct({ id, title, price, image }) {
  return (
    <div className="cart-product-card" id={id}>
      <div className="cart-product-image">
        <img src={image} alt="Img" />
      </div>
      <div className="cart-product-info">
        <h5>{title}</h5>
        <h6>${price}</h6>
      </div>
      <Counter id={id} title={title} price={price} image={image}></Counter>
    </div>
  );
}

export default CartProduct;

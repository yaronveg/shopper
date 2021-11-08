import Counter from "../Counter/Counter";
import "./Product.css";

function Product({ id, title, price, image }) {
  return (
    <div className="product-card" id={id}>
      <div className="product-image">
        <img src={image} alt="Img" />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>${price}</h6>
      </div>
      <Counter id={id} title={title} image={image} price={price} />
    </div>
  );
}

export default Product;

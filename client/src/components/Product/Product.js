import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";
import "./Product.css";

function Product({ id, title, price, image }) {
  return (
    <div className="product-card" id={id}>
      <Link to={`/products/${id}`}>
        <div className="product-image">
          <img src={image} alt="Img" />
        </div>
      </Link>
      <div className="product-info" id="info">
        <h5>{title}</h5>
        <h6>${price}</h6>
      </div>
      <Counter id={id} title={title} image={image} price={price} />
    </div>
  );
}

export default Product;

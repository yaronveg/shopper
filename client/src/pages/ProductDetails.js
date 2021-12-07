import "./ProductDetails.css";
import * as React from "react";
import { useParams } from "react-router";
import Cart from "../components/Cart/Cart";
import CartContext from "../CartContext";
import Counter from "../components/Counter/Counter";

function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = React.useState({});
  React.useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((data) => data.json())
      .then((data) => setProduct(data));
  }, [id]);
  const { title, description, category, price, image } = product;
  const { cartShow, setCartShow } = React.useContext(CartContext);
  return (
    <div className="ProductDetails container">
      <Cart cartShow={cartShow} setCartShow={setCartShow} />
      {product && (
        <>
          <h1 className="title">{title}</h1>
          <p className="category">{category}</p>
          <br />
          <div className="col-2">
            <div className="textSide">
              <p className="description">{description}</p>
              <br />
              <p className="price">{price} $</p>
              <br />
              <Counter id={id} title={title} image={image} price={price} />
            </div>
            <a href={image} className="imgSide">
              <img src={image} width="200px" alt={image}></img>
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetails;

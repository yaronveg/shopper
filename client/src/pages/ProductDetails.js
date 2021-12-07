import * as React from "react";
import { useParams } from "react-router";
import Cart from "../components/Cart/Cart";
import CartContext from "../CartContext";

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
    <div className="ProductDetails">
      <Cart cartShow={cartShow} setCartShow={setCartShow} />
      <h1>Product page! id: {product?.id}</h1>
      {product && (
        <>
          <h3>{title}</h3>
          <br />
          <p>{description}</p>
          <br />
          <p>{category}</p>
          <br />
          <p>{price}</p>
          <br />
          <a href={image}>image</a>
        </>
      )}
    </div>
  );
}

export default ProductDetails;

import "./Products.css";
import Product from "../Product/Product";

function Products(data) {
  console.log(data.data);

  const newList = data.data.map(({ id, title, price, image }) => (
    <Product id={id} title={title} price={price} image={image} />
  ));
  return <section className="products">{newList}</section>;
}

export default Products;

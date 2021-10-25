import "./Products.css";
import Product from "../Product/Product";

function Products(products) {
  const newList = products.products.map(({ id, title, price, image }) => (
    <Product key={id} id={id} title={title} price={price} image={image} />
  ));

  return <section className="products">{newList}</section>;
}

export default Products;

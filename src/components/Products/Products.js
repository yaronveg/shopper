import "./Products.css";
import Product from "../Product/Product";

function Products({ products, currentCategory }) {
  const productList = products
    .filter((product) => product.category === currentCategory)
    .map(({ id, title, price, image }) => (
      <Product key={id} id={id} title={title} price={price} image={image} />
    ));

  return <section className="products">{productList}</section>;
}

export default Products;

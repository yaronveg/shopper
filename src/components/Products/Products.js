import "./Products.css";
import Product from "../Product/Product";

function Products({ products, currentCategory, priceRange }) {
  const productsRanged = products.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  let filtered = [];

  if (currentCategory !== "All") {
    filtered = productsRanged.filter(
      (product) => product.category === currentCategory
    );
  } else {
    filtered = productsRanged;
  }
  const productList = filtered.map(({ id, title, price, image }) => (
    <Product key={id} id={id} title={title} price={price} image={image} />
  ));

  return <section className="products">{productList}</section>;
}

export default Products;

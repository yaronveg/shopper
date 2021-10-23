import "./Products.css";
import Product from "../Product/Product";

function Products() {
  const itemNum = 10;
  const listItems = new Array(itemNum).fill(
    <>
      <Product />
    </>
  );

  return <section className="products">{listItems}</section>;
}

export default Products;

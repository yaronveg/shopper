import Product from "../Product/Product";
import "../Product/Product.css";

function Products() {
  const itemNum = 10;
  const listItems = [];
  for (let i = 0; i < itemNum; i++) {
    listItems.push(
      <li>
        <Product />
      </li>
    );
  }

  return (
    <section className="products">
      {/* <ul>{listItems}</ul> */}
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </section>
  );
}

export default Products;

import "./Products.css";
import Product from "../Product/Product";

function Products() {
  const itemNum = 10;
  const listItems = [];
  for (let i = 0; i < itemNum; i++) {
    listItems.push(
      <>
        <Product />
      </>
    );
  }

  return <section className="products">{listItems}</section>;
}

export default Products;

import "./Products.css";
import Product from "../Product/Product";

function Products() {
  const itemNum = 6;
  const listItems = new Array(itemNum).fill(<Product />);
  let i = -1;
  const newList = listItems.map((prod) => {
    i++;
    return <Product key={i} />;
  });

  return <section className="products">{newList}</section>;
}

export default Products;

import "./Header.css";
import { useContext } from "react";
import CartContext from "../../CartContext";

function Header({ cats, handleCatChange }) {
  const { cart, setCart } = useContext(CartContext);
  const { cartShow } = cart;
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select onChange={(e) => handleCatChange(e.target.value)}>
            <option value="All">All</option>
            {cats.map((cat) => {
              return (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              );
            })}
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
        <button
          onClick={() =>
            setCart({
              cartShow: !cartShow,
              cartProducts: cart.cartProducts,
            })
          }
        >
          My Cart
        </button>
      </div>
    </nav>
  );
}
export default Header;

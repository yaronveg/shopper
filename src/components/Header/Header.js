import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Header({ cats, handleCatChange, cartShow, setCartShow }) {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select
            className="dropdown"
            onChange={(e) => handleCatChange(e.target.value)}
          >
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
          <select className="dropdown">
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
        <button className="cartBtn" onClick={() => setCartShow(!cartShow)}>
          <FontAwesomeIcon className="cartIcon" icon={faShoppingCart} />
        </button>
      </div>
    </nav>
  );
}
export default Header;

import "./ProductsHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import CartContext from "../../CartContext";

function pricetext(price) {
  return `${price}$`;
}

function ProductsHeader({
  categories,
  handleCatChange,
  priceRange,
  customerRange,
  handleRangeChange,
}) {
  const { cart, cartShow, setCartShow } = useContext(CartContext);
  const productsNum = cart.reduce((acc, product) => acc + product.amount, 0);
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        {priceRange && (
          <Box sx={{ width: 300 }}>
            <Slider
              getAriaLabel={() => "Price Range"}
              value={customerRange}
              onChange={handleRangeChange}
              valueLabelDisplay="auto"
              getAriaValueText={pricetext}
              min={priceRange[0]}
              max={priceRange[1]}
            />
          </Box>
        )}

        <div className="collection-sort">
          <label>Filter by:</label>
          <select
            className="dropdown"
            onChange={(e) => handleCatChange(e.target.value)}
          >
            <option value="All">All</option>
            {categories.map((cat) => {
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
          {productsNum > 0 && (
            <div className="products-counter">{productsNum}</div>
          )}
        </button>
      </div>
    </nav>
  );
}
export default ProductsHeader;

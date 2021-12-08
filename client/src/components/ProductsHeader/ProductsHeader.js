import "./ProductsHeader.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function pricetext(price) {
  return `${price}$`;
}

function ProductsHeader({
  category,
  categories,
  handleCatChange,
  priceRange,
  customerRange,
  handleRangeChange,
}) {
  return (
    <nav className="product-filter">
      <h1>{category}</h1>
      <div className="sort">
        {priceRange && (
          <div className="slideBox">
            <p>PRICE</p>
            <Box sx={{ width: 200 }}>
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
            <div className="min-max">
              <span>min</span>
              <span>max</span>
            </div>
          </div>
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
      </div>
    </nav>
  );
}
export default ProductsHeader;

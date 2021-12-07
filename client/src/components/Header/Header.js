// import * as React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CartContext from "../../CartContext";
import { Link } from "react-router-dom";

function Header() {
  const { cart, cartShow, setCartShow } = useContext(CartContext);
  const productsNum = cart.reduce((acc, product) => acc + product.amount, 0);
  return (
    <div className="Header">
      <Link to="/">
        <h1>
          Shop<strong>per</strong>
        </h1>
      </Link>
      <button className="cartBtn" onClick={() => setCartShow(!cartShow)}>
        <FontAwesomeIcon className="cartIcon" icon={faShoppingCart} />
        {productsNum > 0 && (
          <div className="products-counter">{productsNum}</div>
        )}
      </button>
    </div>
  );
}

export default Header;

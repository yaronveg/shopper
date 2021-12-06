// import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CartContext from "../../CartContext";

function Header() {
  const { cart, cartShow, setCartShow } = useContext(CartContext);
  const productsNum = cart.reduce((acc, product) => acc + product.amount, 0);
  return (
    <div className="Header">
      <h1>Shopper</h1>
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

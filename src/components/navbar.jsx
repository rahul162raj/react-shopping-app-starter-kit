import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./../style/navbar.css";

const NavbarComponent = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-primary ">
        <div className="container">
          <Link className="navbar-brand mr-auto" to="/" title="Home">
            Shopify.ly
          </Link>
          <form
            style={{
              display:
                props.productItems.length !== 0 && props.pageUrl === "/"
                  ? "flex"
                  : "none",
            }}
          >
            <input
              title="Search"
              className="form-control mr-2 "
              type="search"
              onChange={props.onSearchValueChange}
              placeholder="Search"
              value={props.searchField}
            />
          </form>
          <Link to="/orders">
            <button
              type="button"
              className="btn btn-primary mr-2"
              title="My Orders"
            >
              <span>
                <FontAwesomeIcon icon={faShoppingBag} />
              </span>
            </button>
          </Link>
          <Link to="/cart">
            <button type="button" className="btn btn-primary" title="Cart">
              <span className="mr-1">
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
              <span
                className="badge badge-warning"
                style={{
                  display:
                    getTotalCartItems(props.productItems) === 0 ? "none" : "",
                }}
              >
                {getTotalCartItems(props.productItems)}
              </span>
            </button>
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );

  function getTotalCartItems(productItems) {
    return productItems.filter((item) => item.quantity > 0).length;
  }
};

export default NavbarComponent;

import React, { Component } from "react";
import { allCategories } from "../../const/productConst";
import "./../../style/subNavbar.css";

class SubNavbarComponent extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display:
            this.props.searchField || this.props.productList.length === 0
              ? "none"
              : "",
        }}
      >
        <ul className="nav mt-4 mb-4">
          {Object.values(allCategories).map((navItem) => (
            <li key={navItem} className="nav-item">
              <h6
                onClick={() => this.props.onSelectItem(navItem)}
                className={
                  this.props.selectedItem === navItem
                    ? "nav-link active"
                    : "nav-link"
                }
                style={
                  this.props.selectedItem === navItem
                    ? { cursor: "pointer", color: "#007bff" }
                    : { cursor: "pointer" }
                }
              >
                {navItem}
              </h6>
            </li>
          ))}
        </ul>
        <div
          className="image-slider"
          style={{
            display:
              this.props.selectedItem === allCategories.ALL_PRODUCTS
                ? "inline-flex"
                : "none",
          }}
        >
          {Array(4)
            .fill(0)
            .map((value, index) => (
              <div
                key={index}
                className="card mr-4 d-flex"
                style={{ width: 15.8 + "rem" }}
              >
                <img
                  className="card-img-top"
                  src={process.env.PUBLIC_URL + "/assets/url" + index + ".jpg"}
                  alt="product"
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default SubNavbarComponent;

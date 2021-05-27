import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductCartItemComponent extends Component {
  render() {
    const { Items } = this.props;
    return (
      <div className="card mr-4 mb-4" style={{ width: 15.8 + "rem" }}>
        <img className="card-img-top" src={Items.imgUrl} alt="product" />
        <div className="card-body">
          <h5 className="card-title">{Items.details}</h5>
          <p className="card-text">price : &#x20b9;{Items.price}</p>
          <div className="d-flex">
            <Link to={"/product/" + Items.id}>
              <button className="btn btn-success btn-sm mr-2">Buy Now</button>
            </Link>
            <button
              onClick={() => this.props.onAddItem(Items)}
              className="btn btn-warning btn-sm mr-2 d-flex"
            >
              <span>Add to Cart</span>
              <span
                className="ml-2"
                style={{ display: Items.quantity === 0 ? "none" : "" }}
              >
                {Items.quantity}
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductCartItemComponent;

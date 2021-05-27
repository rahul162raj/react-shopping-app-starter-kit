import React, { Component } from "react";
import CartItemComponent from "./cartItem";
import BootstrapModal from "../../common/bootstrapModel";
import "./../../style/cartItems.css";
import "./../../style/noResult.css";
class CartItemsComponent extends Component {
  render() {
    const { productItems } = this.props;
    let filteredItems = productItems.filter((item) => item.quantity > 0);
    return (
      <div>
        <div
          className="justify-content-center align-items-center no-result-container"
          style={{ display: filteredItems.length === 0 ? "flex" : "none" }}
        >
          <div className="d-flex flex-column">
            <i className={"no-result-icon mb-3 fa fa-shopping-cart"}></i>
            <h5 className="no-result-text">Cart is Empty</h5>
          </div>
        </div>
        <div
          className="mt-5 table-responsive table-fix-head"
          style={{ display: filteredItems.length !== 0 ? "" : "none" }}
        >
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Details</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>{this.renderItems(filteredItems)}</tbody>
          </table>
        </div>
        <div className="d-flex flex-row-reverse mt-5 mb-5">
          <BootstrapModal
            onBuyItem={() => this.props.onBuyItem(filteredItems)}
            totalPrice={this.getTotalPrice(filteredItems)}
          />
        </div>
      </div>
    );
  }

  renderItems(filteredItems) {
    const { onIncrement, onDecrement } = this.props;
    return filteredItems.map((Item) => (
      <CartItemComponent
        key={Item.id}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        cartItems={Item}
      />
    ));
  }

  getTotalPrice(filteredItems) {
    let totalSum = 0;
    filteredItems.forEach((Item) => {
      totalSum += Item.quantity * Item.price;
    });
    return totalSum;
  }
}

export default CartItemsComponent;

import React, { Component } from "react";
import "./../../style/noResult.css";

class ProductOrdersComponent extends Component {
  state = {};
  render() {
    const { productOrders } = this.props;
    return (
      <React.Fragment>
        <div
          className="container mt-5 mb-5 justify-content-center align-items-center no-result-container"
          style={{
            display: Object.keys(productOrders).length === 0 ? "flex" : "none",
          }}
        >
          <div className="d-flex flex-column">
            <i className="no-result-icon mb-3 fa fa-shopping-basket"></i>
            <h5 className="no-result-text"> No Orders found</h5>
          </div>
        </div>
        <div
          style={{
            display: Object.keys(productOrders).length !== 0 ? "" : "none",
          }}
          className="container mt-5 mb-5"
        >
          <div className="row">
            <h3>Order Details</h3>
          </div>
          <div className="mt-5">
            {Object.keys(productOrders).map((key) => {
              return (
                <div key={key} className="mb-5">
                  <div className="row mb-4" key={key}>
                    <h6>Ordered this item on date ({key})</h6>
                  </div>
                  <div className="mt-4 table-responsive">
                    <table className="table">
                      <thead>
                        <tr className="mb-4">
                          <th className="text-center">Product</th>
                          <th className="text-center">Details</th>
                          <th className="text-center">Price</th>
                          <th className="text-center">Quantity</th>
                          <th className="text-center">Total Price</th>
                          <th className="text-center">Ordered at</th>
                        </tr>
                      </thead>
                      <tbody>
                        {productOrders[key].map((item, index) => (
                          <tr key={index} className="mb-4">
                            <td className="text-center">
                              <img src={item.imgUrl} height="72" />
                            </td>
                            <td className="text-center">{item.details}</td>
                            <td className="text-center">
                              &#x20b9;{item.price}
                            </td>
                            <td className="text-center">{item.quantity}</td>
                            <td className="text-center">
                              &#x20b9;{item.quantity * item.price}
                            </td>
                            <td className="text-center">{item.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductOrdersComponent;

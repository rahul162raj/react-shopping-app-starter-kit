import React, { Component } from "react";

class NotFoundComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          style={{ height: "65vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <h1>404 not found</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default NotFoundComponent;

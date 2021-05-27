import React from "react";

import { Button, Modal } from "react-bootstrap";

class BootstrapModal extends React.Component {
  constructor() {
    super();

    this.state = {
      showHide: false,
    };
  }

  handleModalShowHide() {
    if (this.state.showHide) this.props.onBuyItem();
    this.setState({ showHide: !this.state.showHide });
  }

  showText() {
    if (this.props.totalPrice === undefined) {
      return <span>Proceed to Pay</span>;
    } else {
      return <span>Proceed to Pay : &#x20b9; {this.props.totalPrice}</span>;
    }
  }

  render() {
    return (
      <div>
        <Button
          variant="success"
          onClick={() => this.handleModalShowHide()}
          style={{ display: this.props.totalPrice === 0 ? "none" : "" }}
        >
          {this.showText()}
        </Button>

        <Modal show={this.state.showHide} centered>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Review Order</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Thank you for shopping with us, you can review your orders in My
            Orders tab.
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.handleModalShowHide()}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default BootstrapModal;

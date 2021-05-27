import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/navbar";
import NotFoundComponent from "./components/404";
import CartItemsComponent from "./components/cart/cartItems";
import ProductCartItemsComponent from "./components/home/productItems";
import ProductOrdersComponent from "./components/orders/productOrders";
import ProductDetailsComponent from "./components/details/productDetails";
import { fakeData } from "./services/fakeData";
import "./App.css";
class App extends Component {
  state = {
    productItems: fakeData,
    productOrders: {},
    searchField: "",
    pageUrl: "/",
  };

  render() {
    return (
      <React.Fragment>
        <NavbarComponent
          productItems={this.state.productItems}
          searchField={this.state.searchField}
          onSearchValueChange={this.onSearchValueChange}
          pageUrl={this.state.pageUrl}
        />
        <div className="container" style={{ overflowX: "hidden" }}>
          <Switch>
            <Route
              path="/product/:id"
              render={(props) => (
                <ProductDetailsComponent
                  productItems={this.state.productItems}
                  onBuyItem={this.handleBuyItem}
                  {...props}
                />
              )}
            />
            <Route
              path="/"
              exact
              render={(props) => (
                <ProductCartItemsComponent
                  searchField={this.state.searchField}
                  productItems={this.state.productItems}
                  onAddItem={this.handleAddCartItem}
                  {...props}
                />
              )}
            />
            <Route
              path="/cart"
              render={(props) => (
                <CartItemsComponent
                  productItems={this.state.productItems}
                  onBuyItem={this.handleBuyItem}
                  onIncrement={this.onQuantityIncrement}
                  onDecrement={this.onQuantityDecrement}
                  {...props}
                />
              )}
            />
            <Route
              path="/orders"
              render={(props) => (
                <ProductOrdersComponent
                  productOrders={this.state.productOrders}
                  {...props}
                />
              )}
            />

            <Route path="/not-found" component={NotFoundComponent}></Route>
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    const pageUrl = this.props.location.pathname;
    this.setState({ pageUrl });
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      const pageUrl = this.props.location.pathname;
      this.setState({ pageUrl });
    }
  }

  // search field value change
  onSearchValueChange = (e) => {
    this.setState({ searchField: e.currentTarget.value });
  };

  // Add new item to orders list
  handleBuyItem = (item) => {
    let productOrders = { ...this.state.productOrders };
    const currentTime = new Date().toLocaleTimeString("en-US").toString();
    const currentDate = new Date().toLocaleDateString("en-US").toString();
    if (Array.isArray(item)) {
      let data = [...item];
      data.forEach((data) => {
        data["time"] = currentTime;
      });
      if (this.state.productOrders.hasOwnProperty(currentDate)) {
        productOrders[currentDate] = productOrders[currentDate].concat(data);
      } else {
        productOrders[currentDate] = data;
      }
      this.setState({ productOrders });
      this.handleReset(item);
    } else {
      let data = { ...item };
      data.quantity = 1;
      data["time"] = currentTime;
      if (this.state.productOrders.hasOwnProperty(currentDate)) {
        productOrders[currentDate].push(data);
      } else {
        let orderlist = [];
        orderlist.push(data);
        productOrders[currentDate] = orderlist;
      }
      this.setState({ productOrders });
    }
  };

  handleReset(item) {
    let currentItems = [...this.state.productItems];
    item.forEach((value) => {
      let index = currentItems.indexOf(value);
      currentItems[index] = { ...value };
      currentItems[index].quantity = 0;
    });
    this.setState({ productItems: currentItems });
  }

  // cart item functionalities
  onQuantityIncrement = (Item) => {
    const productItems = [...this.state.productItems];
    const index = this.state.productItems.indexOf(Item);
    productItems[index] = { ...Item };
    productItems[index].quantity++;
    this.setState({ productItems });
  };

  onQuantityDecrement = (Item) => {
    const productItems = [...this.state.productItems];
    const index = this.state.productItems.indexOf(Item);
    productItems[index] = { ...Item };
    productItems[index].quantity--;
    this.setState({ productItems });
  };

  handleAddCartItem = (product) => {
    const productItems = [...this.state.productItems];
    let itemIndex = -1;
    this.state.productItems.forEach((value, index) => {
      if (value.id === product.id) itemIndex = index;
    });
    productItems[itemIndex].quantity++;
    this.setState({ productItems });
  };
}

export default withRouter((props) => <App {...props} />);

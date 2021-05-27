import React, { Component } from "react";
import ProductCartItemComponent from "./productItem";
import PaginationComponent from "../../common/pagination";
import SubNavbarComponent from "./subNavbar";
import { paginate } from "../../utils/paginate";
import { allCategories } from "../../const/productConst";
import "./../../style/noResult.css";

class ProductCartItemsComponent extends Component {
  state = {
    pageSize: 12,
    currentIndex: 1,
    selectedItem: allCategories.ALL_PRODUCTS,
  };

  render() {
    const { currentIndex, pageSize, selectedItem } = this.state;
    let productList = this.getProductList();
    return (
      <React.Fragment>
        <SubNavbarComponent
          searchField={this.props.searchField}
          productList={productList}
          selectedItem={selectedItem}
          onSelectItem={this.handleSelectItem}
        />
        <div className="d-flex flex-wrap mt-5 b-4 justify-content-center">
          {this.renderFilteredItems(productList)}
        </div>
        <div className="d-flex justify-content-center">
          <PaginationComponent
            Items={productList}
            pageSize={pageSize}
            currentIndex={currentIndex}
            onPageChange={this.handlePageChange}
          />
        </div>
      </React.Fragment>
    );
  }

  handlePageChange = (page) => {
    this.setState({ currentIndex: page });
  };

  handleSelectItem = (navItem) => {
    this.setState({ selectedItem: navItem });
    this.setState({ currentIndex: 1 });
  };

  getProductList() {
    const { selectedItem } = this.state;
    const { productItems, searchField } = this.props;
    if (searchField === "") {
      return selectedItem === allCategories.ALL_PRODUCTS
        ? productItems
        : productItems.filter((item) => item.categories === selectedItem);
    } else {
      return productItems.filter((item) =>
        item.details.toString().toLowerCase().startsWith(searchField)
      );
    }
  }

  getNoResultIcon() {
    const { searchField } = this.props;
    let icon = "no-result-icon mb-3 fa ";
    return searchField === ""
      ? icon + "fa-shopping-basket"
      : icon + "fa-search";
  }

  renderFilteredItems(productList) {
    const { currentIndex, pageSize } = this.state;
    const { searchField } = this.props;
    if (productList.length === 0) {
      return (
        <div className="d-flex justify-content-center align-items-center no-result-container">
          <div className="d-flex flex-column">
            <i className={this.getNoResultIcon()}></i>
            <h5 className="no-result-text">
              {searchField === ""
                ? "Product List is empty"
                : "No search result found"}
            </h5>
          </div>
        </div>
      );
    } else {
      const filteredItems = paginate(productList, currentIndex, pageSize);
      return filteredItems.map((item) => (
        <ProductCartItemComponent
          key={item.id}
          Items={item}
          onAddItem={this.props.onAddItem}
        />
      ));
    }
  }
}

export default ProductCartItemsComponent;

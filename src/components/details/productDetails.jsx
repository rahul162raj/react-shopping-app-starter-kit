import React, { Component } from "react";
import ReactImageZoom from "react-image-zoom";
import BootstrapModal from "../../common/bootstrapModel";
import "./../../style/productDetails.css";

class ProductDetailsComponent extends Component {
  render() {
    let selectedItem = this.getSelectedItem();
    let imgUrl = selectedItem.imgUrl.split(".")[0] + "web.jpg";
    const imageZoomProps = {
      height: 300,
      img: imgUrl,
      zoomWidth: 575,
      zoomLensStyle: "opacity: 0.7;background-color: rgb(255, 235, 59)",
    };
    return (
      <div>
        <div className="row mt-5 mb-5">
          <div className="col-12 col-lg-7 col-xl-6">
            <img
              src={selectedItem.imgUrl}
              className="w-100 d-flex d-lg-none d-xl-none justify-content-center"
            />
            <span className="d-none d-lg-flex d-xl-flex">
              <ReactImageZoom {...imageZoomProps} />
            </span>
            <div className="justify-content-center d-flex mt-5 mb-5">
              <BootstrapModal
                onBuyItem={() => this.props.onBuyItem(selectedItem)}
              />
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-6 product-detail-container">
            <h2 className="mb-3">{selectedItem.details}</h2>
            <p className="product-detail-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vestibulum ante eu enim tincidunt, quis ultricies orci elementum.
              Nulla facilisi. Ut et ante quis lacus dictum sodales ut in libero.
              Ut et ante quis lacus dictum sodales ut in libero.Nulla facilisi.
              Ut et ante quis.
            </p>
            <div className="d-flex">
              <p className="mr-3">Price : &#x20b9; {selectedItem.price}</p>
              <span className="product-detail-rating">
                <span>Rating : </span>
                {Array(4)
                  .fill(null)
                  .map((value, index) => (
                    <i key={index} className="fa fa-star mr-1 "></i>
                  ))}
                <i className="fa fa-star-o  mr-1"></i>
              </span>
              <span>(6)</span>
            </div>
            <div>
              <h6 className="mt-2">Specification</h6>
              <ul>
                <li>4 GB RAM | 64 GB ROM | Expandable Upto 512 GB</li>
                <li>16.59 cm (6.53 inch) HD+ Display</li>
                <li>13MP Rear Camera | 5MP Front Camera</li>
                <li>5000 mAh Lithium Polymer Battery</li>
                <li>4 GB RAM | 64 GB ROM | Expandable Upto 512 GB</li>
                <li>16.59 cm (6.53 inch) HD+ Display</li>
                <li>13MP Rear Camera | 5MP Front Camera</li>
                <li>5000 mAh Lithium Polymer Battery</li>
              </ul>
              <h6 className="mt-3">Customer Review</h6>
              <p>
                It is an good phone ever i see, but it have only one problem For
                safety the network will be slow,but ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  getSelectedItem() {
    const { productItems, match } = this.props;
    productItems.filter((item) => item.id === match.params.id);
    return productItems.filter((item) => item.id === match.params.id)[0];
  }
}

export default ProductDetailsComponent;

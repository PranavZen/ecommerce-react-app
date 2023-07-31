import React from "react";
import PageBreadCrum from "../components/Breadcrum/PageBreadCrum";
import SyncSlider from "../components/Slider/SyncSlider";
import ProductSummery from "../components/ProductsDetailsBox/ProductSummery";

function ProductDetails() {
  return (
    <>
      <section id="productDetails">
        <div className="container">
            <PageBreadCrum/>
            <div className="product_itemDetails_wrapper">
                <SyncSlider/>
                <ProductSummery/>
            </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;

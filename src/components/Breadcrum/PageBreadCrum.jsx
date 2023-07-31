import React from "react";
import { Link } from "react-router-dom";

function PageBreadCrum() {
  return (
    <div className="continue_shoppingBtnWrap">
      <Link to="/" className="backBtn">
        &lt; Back
      </Link>
      <span>Home</span>
      <span>/ Chain Set </span>
      <span>/ The Fish Heart Chain set</span>
      
    </div>
  );
}

export default PageBreadCrum;

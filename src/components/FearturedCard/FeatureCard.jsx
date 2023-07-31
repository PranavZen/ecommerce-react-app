import React from "react";
import { Link } from "react-router-dom";

function FeatureCard() {
  return (
    <div className="col-md-4 collection_Card px-3">
      <Link to="">
        <div className="collectionImgWrap">
          <img
            src="https://root.utssavjewels.com/admin/template/assets/images/collections/97312305043738.jpg"
            alt=""
            data-aos="flip-right"
            data-aos-duration="3000"
            className="aos-init aos-animate"
          />
        </div>
        <div className="collectionNameWrap">
          <h3>Butterfly Collection</h3>
          <p>Experience the Joy of Fluttering with Our Butterfly Collection</p>
        </div>
      </Link>
    </div>
  );
}

export default FeatureCard;

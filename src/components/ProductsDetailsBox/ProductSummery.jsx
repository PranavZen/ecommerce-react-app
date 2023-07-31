import React from "react";
import { Link } from "react-router-dom";

function ProductSummery() {
  return (
    <div className="col-lg-7 col-md-12 col-12 right_itemDetailBox px-3">
      <div className="productDetails_dataWrap">
        <div className="item_Details">
          <h3>The Lucie Ring</h3>
          <p>Rings</p>
        </div>
        <form
          method="POST"
          name="checkout_form"
          id="checkout_form"
          data-gtm-form-interact-id="0"
        >
          <div className="item_selectionOptionsWrap">
            <div className="col-md-12 ">
              <div className="selectionBox">
                <div className="col-lg-3 col-md-4 myWidth">
                  <div className="sizeSelect">
                    <label htmlFor="product_size">Ring Size</label>
                    <select
                      name="product_size"
                      id="product_size"
                      fdprocessedid="32kazc"
                      data-gtm-form-interact-field-id="0"
                    >
                      <option value="6@@0.55@@42">6</option>
                      <option value="7@@0.5@@41">7</option>
                      <option value="8@@0.45@@40">8</option>
                      <option value="9@@0.4@@39">9</option>
                      <option value="10@@0.35@@38">10</option>
                      <option value="11@@0.3@@37">11</option>
                      <option value="12@@0.25@@36">12</option>
                      <option value="13@@0.2@@35">13</option>
                      <option value="14@@0.15@@34">14</option>
                      <option value="15@@0.1@@33">15</option>
                      <option value="16@@0.05@@32">16</option>
                      <option value="17@@0@@31">
                        17
                      </option>
                      <option value="18@@0.05@@43">18</option>
                      <option value="19@@0.1@@44">19</option>
                      <option value="20@@0.15@@45">20</option>
                    </select>
                    <span>
                      <i className="material-icons">keyboard_arrow_down</i>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 myWidth">
                  <div className="carateSelect">
                    <label htmlFor="caratage">Caratage</label>
                    <select
                      name="caratage"
                      id="caratage"
                      fdprocessedid="rpgbqh"
                    >
                      <option value="3 ">18 k</option>
                    </select>
                    <span>
                      <i className="material-icons">keyboard_arrow_down</i>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 myWidth">
                  <div className="colorSelect">
                    <label htmlFor="" className="colorLabel">
                      Gold Colour
                    </label>
                    <div className="outer_ColorPickerWrap">
                      <div className="colorWrap">
                        <input
                          data-id="685"
                          value="1"
                          className="color_checkbox gold_color "
                          id="1"
                          name="metal"
                          type="checkbox"
                          readOnly
                        />
                        <label htmlFor="1">Gold</label>
                      </div>
                      <div className="colorWrap">
                        <input
                          data-id="686"
                          value="2"
                          className="color_checkbox rosegold_color checked_colors"
                          id="2"
                          name="metal"
                          type="checkbox"
                          checked=""
                          readOnly
                        />
                        <label htmlFor="2">Rose Gold</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4>
                Gross Weight: <span className="metal_weight">1.63</span>
                gms
              </h4>
            </div>
          </div>
        </form>
        <div className="check_availabilityWrap">
          <div className="avail_wrap">
            <div className="col-12 col-lg-6 col-md-6 pad_right noPad">
              <div className="itemPriceDetailsWrap">
                <h4>
                  <span className="discount_price">₹10,540</span>
                  <span className="actual_price">
                    <del>₹13,040</del>
                  </span>
                </h4>

                <div className="wrapBox">
                  <div className="check_inputWrap">
                    <input
                      type="number"
                      name=""
                      placeholder="6 digit pincode"
                      id="checkInputID"
                      fdprocessedid="18z8nc"
                    />
                    <button className="check_pinCodBtn" fdprocessedid="7o3kte">
                      Check
                    </button>
                  </div>
                  <div className="checkMessageWrap">
                    <p className="unserviceable">Please enter Pincode</p>
                  </div>
                  <div className="addToCartBtnWrap" id="add_to_cart_btn">
                    <Link className="addtocartBtn btn addtocartBtnCheck">
                      <span>
                        <img
                          src="https://www.utssavjewels.com/assets/utssav/images/Body/Product-cart/cartsvg.svg"
                          alt="cart icon"
                          width="80%"
                          height="80%"
                        />
                      </span>
                      <h6 id="add_btn">Add To Cart</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product_accrdianWrap">
            <div className="col-md-11 col-12">
              <div className="accordion accordion-flush" id="product_accordianID">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-productDesc">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-proDesc"
                      aria-expanded="false"
                      aria-controls="flush-proDesc"
                      fdprocessedid="yxqgi"
                    >
                      PRODUCT DETAILS
                    </button>
                  </h2>
                  <div
                    id="flush-proDesc"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-productDesc"
                    data-bs-parent="#product_accordianID"
                  >
                    <div className="accordion-body">
                      <div className="left_decpBox">
                        <div className="desctTextWrap">
                          <div className="descParaWrap">
                            <p>kjadsbckas ajsjc as jasc as kjs c</p>
                          </div>
                        </div>
                      </div>
                      <div className="right_descBox">
                        <div className="item_DescriptionsWrapBox">
                          <div className="metal_detailsWrap">
                            <h3>METAL DETAILS</h3>
                          </div>
                          <ul>
                            <li>
                              <div className="descList">
                                <div className="item_s">
                                  <h4>Metal</h4>
                                </div>
                                <div className="undlinDiv col"></div>
                                <div className="item_s ">
                                  <h4 className="qt_amt">Rose Gold</h4>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="descList">
                                <div className="item_s">
                                  <h4>Purity</h4>
                                </div>
                                <div className="undlinDiv col"></div>
                                <div className="item_s">
                                  <h4 className="qt_amt">18 k</h4>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="descList">
                                <div className="item_s">
                                  <h4>Stone</h4>
                                </div>
                                <div className="undlinDiv col"></div>
                                <div className="item_s">
                                  <h4 className="qt_amt">AAA+ Cubic Zirconia</h4>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="descList">
                                <div className="item_s">
                                  <h4>Product Weight</h4>
                                </div>
                                <div className="undlinDiv col"></div>
                                <div className="item_s">
                                  <h4 className="qt_amt">
                                    <span className="metal_weight">1.63</span>
                                    gms
                                  </h4>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="descList">
                                <div className="item_s">
                                  <h4>Gold Weight</h4>
                                </div>
                                <div className="undlinDiv col"></div>
                                <div className="item_s">
                                  <h4 className="qt_amt">
                                    <span className="gold_weight">1.51</span>
                                    gms
                                  </h4>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="descList">
                                <div className="item_s">
                                  <h4>Stone Weight</h4>
                                </div>
                                <div className="undlinDiv col"></div>
                                <div className="item_s">
                                  <h4 className="qt_amt">
                                    <span className="stone_weight">0.12</span>
                                    gms
                                  </h4>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="closeBtnWrap">
                            <p>
                              close{" "}
                              <span>
                                <img
                                  src="./images/Body/Product-Details/up_icon.png"
                                  alt=""
                                />
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-spo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-speceial-offer"
                      aria-expanded="false"
                      aria-controls="flush-speceial-offer"
                      fdprocessedid="ahrpx"
                    >
                      PRICE BREAKUP
                    </button>
                  </h2>
                  <div
                    id="flush-speceial-offer"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-spo"
                    data-bs-parent="#product_accordianID"
                  >
                    <div className="accordion-body">
                      <div className="offerListWrap">
                        <ul className="offerList">
                          <li>
                            <h6>Gold Value</h6>
                            <p className="gold_value">₹7,022</p>
                          </li>
                          <li>
                            <h6>Stone Value</h6>
                            <p className="stone_value">₹748</p>
                          </li>
                          <li>
                            <h6>Making Value</h6>
                            <p className="making_value">
                              ₹2,463&nbsp;&nbsp;&nbsp;<del>4,963</del>
                            </p>
                          </li>
                          <li>
                            <h6>GST</h6>
                            <p className="gst">₹307</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-tremsS">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-tersmsS"
                      aria-expanded="true"
                      aria-controls="flush-tersmsS"
                      fdprocessedid="4mohzl"
                    >
                      SHIPPING AND RETURN POLICY
                    </button>
                  </h2>
                  <div
                    id="flush-tersmsS"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-tremsS"
                    data-bs-parent="#product_accordianID"
                  >
                    <div className="accordion-body">
                      <div className="termsParaBox">
                        <ul className="termsLists">
                          <li className="termsPara">
                            Free Shipping throughout India{" "}
                          </li>
                          <li className="termsPara">14 day return policy</li>
                          <li className="termsPara">Free Return Shipping</li>
                          <li className="termsPara">
                            100% refund&nbsp;on&nbsp;all&nbsp;returns
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSummery;

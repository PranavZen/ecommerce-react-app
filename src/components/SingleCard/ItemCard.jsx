import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
function groupProductsByCategory(products) {
  const groupedProducts = {};

  products.forEach((product) => {
    if (!groupedProducts[product.category]) {
      groupedProducts[product.category] = [];
    }
    groupedProducts[product.category].push(product);
  });

  return groupedProducts;
}
function ItemCard() {
  const [slidesPerView, setSlidesPerView] = useState(4); // Initial number of slides per view

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of slides per view based on screen size
      if (window.innerWidth < 576) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 992) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [allProducts, setAllProducts] = useState([]);

  console.log(allProducts);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setAllProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);
  function formatPriceWithCommas(price) {
    return price.toLocaleString("en-IN");
  }
  return (
    <>
      {Object.entries(groupProductsByCategory(allProducts)).map(
        ([category, categoryProducts]) => (
          <div key={category} className="category-container">
            <div className="cat_section">
              <div className="cat_sectionTitle">
                <h3>{category}</h3>
              </div>
            </div>
            <div
              className="product_Card_Section homeSliderProduct"
              id="deskViewCardSection"
            >
              <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={30}
                slidesPerView={slidesPerView}
                freeMode={true}
                navigation
                className="productCard_Wrap"
              >
                {categoryProducts.map((product) => (
                  <SwiperSlide
                    className="item Deskcard_slideProduct"
                    key={product.id}
                  >
                    <div className="deskCardBox">
                      <div className="card_mainWrap">
                        <div className="card_outerBox">
                          <div className="likeBtnWrap">
                            <span className="pricingTagSpan black">
                              {product.category}
                            </span>
                            <span className="add_wish" data-id="692">
                              <i className="fa fa-heart-o afterIconClick"></i>
                            </span>
                          </div>
                          <div className="proImg_mobileCardImg main_image_div">
                            <Link to="" className="main_image">
                              <img
                                className="image_file"
                                src={product.image}
                                alt={product.title}
                              />
                            </Link>

                            <div className="imgOverlayColorsWrap">
                              <a
                                href="https://utssavjewels.com/productDetails/Chains/18inch-Chain-mt-708"
                                data-id="691"
                                className="imge_color_circle"
                              >
                                <div className="imgOverlayColorCircle">
                                  <img
                                    src="https://utssavjewels.com/assets/utssav/images/Body/Product-Details/gold_img.webp"
                                    alt="Silver"
                                  />
                                </div>
                              </a>
                              <a
                                href="https://utssavjewels.com/productDetails/Chains/18inch-Chain-mt-709"
                                data-id="692"
                                className="imge_color_circle"
                              >
                                <div className="imgOverlayColorCircle">
                                  <img
                                    src="https://utssavjewels.com/assets/utssav/images/Body/Product-Details/gold_rose_img.webp"
                                    alt="Silver"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="product_details_wrap">
                          <div className="productNameWrap">
                            <h4>{product.title.slice(0, 30) + "..."}</h4>
                            <h6>{product.description.slice(0, 20) + "..."}</h6>
                          </div>
                          <div className="productPriceWrap">
                            <h4>
                            ₹ {formatPriceWithCommas(product.price * 100)}{" "}
                              <span>
                                <del>₹ {formatPriceWithCommas(product.price * 100 - 700)} </del>
                              </span>
                            </h4>
                          </div>
                          <div className="addHoverBtn">
                            <div className="add_cartBtnWrap">
                              <Link to="">
                                <div
                                  className="addCartBtnBox productImgWrapper"
                                  data-id="357"
                                >
                                  <span className="cartImgWrap">
                                    <img
                                      src="https://www.utssavjewels.com/assets/utssav/images/Body/Product-cart/cartsvg.svg"
                                      alt="cart icon"
                                      width="80%"
                                      height="80%"
                                    />
                                  </span>
                                  <h6>Choose</h6>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default ItemCard;

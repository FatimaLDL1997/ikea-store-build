import React, { useEffect } from "react";
import Wrapper from "../../assets/wrappers/Main";
import Wrapper2 from "../../assets/wrappers/sub-wrappers/AllNewProducts";

import girlsShopping from "../../assets/images/twogirls.jpg";
import { useAppContext } from "../../context/appContext";
import { PopUp } from "../../components";
import products from "../../utils/products";
import cards from "../../utils/cards";
import NewProduct from "../subProducts/NewProduct";
import { useNavigate } from "react-router-dom";

import {
  Navigation,
  Scrollbar,
  Pagination,
  Keyboard,
  Mousewheel,
} from "swiper/modules";
import SwiperCore from "swiper";
// import {Keyboard} from 'swiper/core'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
SwiperCore.use([Navigation, Pagination, Scrollbar, Mousewheel]);

const Main = () => {
  const {
    showInfo,
    toggleInfoPopUp,
    search,
    displaySearched,
    setDisplaySearched,
    prods,
    user,
    getSearchedItems,
  } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    getSearchedItems();
  }, [displaySearched]);

  console.log(search.length);
  if (search.length > 0) {
    setDisplaySearched(true);
    console.log(displaySearched);
  } else {
    setDisplaySearched(false);
    console.log(displaySearched);
  }
  console.log(prods);
  console.log(products);
  return (
    <Wrapper>
      <div className="main-content">
        <div className="popup-container">
          {/* <div className="popup">{<PopUp />}</div> */}
        </div>
        {displaySearched ? (
          <>
            {prods.length > 0 ? (
              <h1>
                Showing matches for
                <a style={{ fontWeight: "bold" }}> "{search}"</a>
              </h1>
            ) : (
              <h1>
                There are no results for
                <a style={{ fontWeight: "bold" }}> "{search}"</a>
              </h1>
            )}
            <h5>
              {prods.length != 0 ? (
                <h5>
                  We found{" "}
                  <a style={{ textDecoration: "underline" }}>
                    {" "}
                    {prods.length} product{prods.length > 1 ? "s" : ""}
                  </a>
                </h5>
              ) : (
                "Try again using a different spelling or keywords."
              )}
            </h5>
            <Wrapper2>
              <div className="container-all-products">
                {products.map((prod) => {
                  return prods.map((p) => {
                    return (
                      prod.text.includes(p.text) && (
                        <div className="product-box">
                          <NewProduct key={prod.id} {...prod}></NewProduct>
                        </div>
                      )
                    );
                  });
                })}
              </div>
            </Wrapper2>
          </>
        ) : (
          <>
            <h1 className="welcome">Welcome to IKEA Canada</h1>
            <div className="top-container">
              <div className="img-container">
                <img className="twogirls" src={girlsShopping} />
              </div>
              <div className="yellow-box">
                <h2>IKEA SALE</h2>
                <h3> March 7 - 27, 2024.</h3>
                <h4>
                  What better way to celebrate summer than with a sale? Explore
                  our wide selection of fresh savings! Find more products{" "}
                  <a>in-store</a>.
                </h4>
                <h4 className="offer-container">
                  <a>*offer details</a>
                </h4>
                <h3>IKEA Family members get an extra 10% off SALE products.</h3>
                <h4>
                  <a className="join-link">Join IKEA Family </a>– it's quick,
                  easy, and free!
                </h4>
                <button
                  className="shop-sale-btn"
                  onClick={() => navigate("/all-new-products")}
                >
                  Shop now
                </button>
              </div>
            </div>
            <div>
              <h2 className="second-heading">Happening right now</h2>
              <Swiper
                className="swiper-slider-container"
                grabCursor={true}
                spaceBetween={25}
                slidesPerView={3}
                centeredSlides={false}
                keyboard={{ enabled: true }}
                direction="horizontal"
                // mousewheel={{ forceToAxis: true }}
                scrollbar={{ draggable: true }}
                modules={[Keyboard, Mousewheel, Pagination]}
              >
                {cards.map(({ id, img, title, text, color }) => {
                  return (
                    <div key={id} className="slide">
                      <SwiperSlide key={id}>
                        <div
                          style={{
                            backgroundColor: color,
                            padding: "2rem",
                            marginBottom: "2rem",
                            height: "40rem",
                          }}
                        >
                          <img src={img} style={{width:'2rem', height:'2rem'}} alt="" className="image-card" />
                          <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                            {title}
                          </h1>
                          <h3
                            style={{
                              fontSize: "1.2rem",
                              fontWeight: "200",
                              paddingBottom: "2rem",
                            }}
                          >
                            {text}
                          </h3>
                        </div>
                      </SwiperSlide>
                    </div>
                  );
                })}
              </Swiper>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Main;

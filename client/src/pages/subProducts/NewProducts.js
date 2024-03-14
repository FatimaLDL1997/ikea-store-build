import React, { useEffect } from "react";
import Wrapper from "../../assets/wrappers/sub-wrappers/NewProducts";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Scrollbar,
  Pagination,
  Keyboard,
  Mousewheel,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import products from "../../utils/products";
import NewProduct from "./NewProduct";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

SwiperCore.use([Navigation, Pagination, Scrollbar, Mousewheel]);


const NewProducts = () => {
  const { windowWidth, search } = useAppContext();
  const navigate = useNavigate();

  return (
    // eslint-disable-line no-eval

    <Wrapper>
      <h4 className="title-top">What’s new in the IKEA range</h4>
      <div className="top-section-container">
        <div className="text-container ">
          <h3>Get inspired with the latest news</h3>
          <h2>Brighten your home with vibrant updates in just a few clicks.</h2>
        </div>
        <div className="see-all-btn-container">
          <button
            className="see-all-btn"
            onClick={() => navigate("/all-new-products")}
          >
            See all new products
          </button>
        </div>
      </div>
      <div className="product-box">
        <Swiper
          className="swiper-slider-container"
          modules={[Keyboard, Scrollbar, Mousewheel, Pagination]}
          // effect={"coverflow"}
          grabCursor={true}
          spaceBetween={50}
          slidesPerView={windowWidth > 600 ? 2 : 1}
          centeredSlides={false}
          loop={false}
          keyboard={true}
          scrollbar={{ draggable: true,snapOnRelease:true}}          
          
          // pagination={{ type: "fraction" }}
          direction="horizontal"
          mousewhel={{ forceToAxis: true}}

        >
          {products.slice(0, 5).map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <NewProduct {...product}></NewProduct>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default NewProducts;

import React from "react";
import Wrapper from "../../assets/wrappers/sub-wrappers/NewProducts";

import { Navigation, Scrollbar, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import products from "../../utils/products";
import NewProduct from "./NewProduct";
import {useNavigate} from 'react-router-dom'

SwiperCore.use([Navigation, Pagination, Scrollbar]);
const NewProducts = () => {
  const navigate = useNavigate()
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
          <button className="see-all-btn" onClick={()=>navigate('/all-new-products')}>See all new products</button>
        </div>
      </div>
      <div className="product-box">
        <Swiper
          className="swiper-slider-container"
          // effect={"coverflow"}
          grabCursor={true}
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={false}
          keyboard={true}
          scrollbar={{ draggable: true }}
        >
          {products.slice(0,5).map((product) => {
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

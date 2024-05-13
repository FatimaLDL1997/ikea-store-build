import React, { useEffect, useState } from "react";
import Wrapper from "../../assets/wrappers/sub-wrappers/AllNewProducts";

import products from "../../utils/products";
import filter from "../../utils/filter";
import { useAppContext } from "../../context/appContext";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import NewProduct from "./NewProduct";

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

const AllNewProducts = () => {
  const { windowWidth } = useAppContext();
  const [clicked, setClicked] = useState(false);
  const [activeProd, setActiveProd] = useState(false);
  const [activeRm, setActiveRm] = useState(false);

  const allUpArrows = document.getElementsByClassName("up-arrow");
  const allDownArrows = document.getElementsByClassName("down-arrow");

  const allUpArrowsArray = Array.from(allUpArrows);
  const allDownArrowsArray = Array.from(allDownArrows);

  const allBoxes = document.getElementsByClassName("box");
  const allBoxesArray = Array.from(allBoxes);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const locationClicked = event.toElement.parentElement.parentElement;

      // console.log(event.toElement.parentElement.parentElement);
      if (locationClicked.className != "filter-container") {
        allBoxesArray.forEach((element, index) => {
          element.style.display = "none";
          element.parentElement.children[0].style.border = "0px solid red";
          // console.log(element.parentElement.children[0].children[0]);
          let up = element.parentElement.children[0].children[0];
          let down = element.parentElement.children[0].children[1];
          // console.log(up);
          if (up.style.display == "block") {
            // console.log(up)
            up.style.display = "none";
            down.style.display = "block";
          }
        });
        // console.log("outside");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [clicked]);

  const clickChange = (e) => {
    const containerClicked = e.currentTarget.parentElement;
    const containers = Array.from(
      e.currentTarget.parentElement.parentElement.children
    );
    // console.log(containers);

    const sortBoxSelected = e.currentTarget.parentElement.children[1];
    const upArrow = e.currentTarget.children[0];
    const downArrow = e.currentTarget.children[1];

    if (clicked) {
      allBoxesArray.forEach((element, index) => {
        if (element.style.display == "block") {
          element.style.display = "none";
          allUpArrowsArray[index].style.display = "none";
          allDownArrowsArray[index].style.display = "block";

          // console.log("second");
        }
      });

      sortBoxSelected.style.display = "block";

      upArrow.style.display = "block";
      downArrow.style.display = "none";
      // console.log("third");
    } else {
      allBoxesArray.forEach((element, index) => {
        if (element.style.display == "block") {
          element.style.display = "none";

          allUpArrowsArray[index].style.display = "none";
          allDownArrowsArray[index].style.display = "block";
          // console.log("fourth");
        }
      });

      //goes here first time
      sortBoxSelected.style.display = "block";

      upArrow.style.display = "block";
      downArrow.style.display = "none";
      // console.log("first");
    }

    containers.forEach((element) => {
      element.children[0].style.border = "0px solid red";
      console.log(element.style.border);
    });
    containerClicked.children[0].style.border = "2px solid black";

    setClicked(!clicked);
  };

  const changeActiveRoom = () => {
    if (activeRm) {
      setActiveProd(true);
      setActiveRm(false);
    } else {
      setActiveProd(false);
      setActiveRm(true);
    }
  };
  const changeActiveProd = () => {
    if (activeProd) {
      setActiveProd(false);
      setActiveRm(true);
    } else {
      setActiveProd(true);
      setActiveRm(false);
    }
  };
  const radioClicked = (e) => {
    const allRadioBtnsArray = Array.from(
      document.getElementsByClassName("checkmark")
    );
    console.log(allRadioBtnsArray);
    allRadioBtnsArray.forEach((element) => {
      element.style.backgroundColor = "white";
    });

    e.currentTarget.style.backgroundColor = "black";
    console.log("hi");
    // console.log(e.currentTarget.style.)
  };
  return (
    <Wrapper>
      <div className="container-all-products">
        <div className="new-products-title"> New products</div>
        <div className="items-container">
          {windowWidth > 900 && (
            <div className="total-items">{products.length} items</div>
          )}
          <div className="display-btns-container">
            <button
              className={activeProd ? "product-btn-active" : "product-btn"}
              onClick={() => changeActiveProd()}
            >
              Product
            </button>
            <button
              className={activeRm ? "room-btn-active" : "room-btn"}
              onClick={() => changeActiveRoom()}
            >
              Room
            </button>
          </div>
          {windowWidth < 900 && (
            <div className="total-items">{products.length} items</div>
          )}
        </div>
        <div className="filter-container">
          <Swiper
            className="swiper-slider-container"
            grabCursor={true}
            spaceBetween={windowWidth < 900 ? 20: 10  }
            slidesPerView={windowWidth < 400 ? 2: 3  && windowWidth<700? 3:5  && windowWidth<900? 5:7}
            centeredSlides={false}
            keyboard={{ enabled: true }}
            direction="horizontal"
            mousewhel={{ forceToAxis: true }}
            // scrollbar={{ draggable: true }}
            modules={[Keyboard, Mousewheel]}
          >
            {filter.map((item) => {
              return (
                <SwiperSlide>
                  <div className={item.name}>
                    <button
                      className={item.btn}
                      onClick={(e) => {
                        clickChange(e);
                      }}
                    >
                      {item.btnText}
                      <div className="up-arrow">
                        <AiOutlineUp />
                      </div>
                      <div className="down-arrow">
                        <AiOutlineDown />
                      </div>
                    </button>

                    <div className="box">
                      <div className="sort-container ">
                        {item.options.map((option) => {
                          return (
                            <label className={item.labelName}>
                              {option}
                              <input type="radio" name="radio" />
                              <span
                                className="checkmark"
                                onClick={(e) => radioClicked(e)}
                              ></span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="product-box">
          {products.map((product) => {
            return <NewProduct key={product.id} {...product}></NewProduct>;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default AllNewProducts;

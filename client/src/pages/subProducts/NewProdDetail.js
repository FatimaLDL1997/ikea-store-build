import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../../assets/wrappers/sub-wrappers/NewProdDetails";
import {
  AiFillStar,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineStar,
  AiOutlineHeart,
} from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { BiStore } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { LiaTruckSolid } from "react-icons/lia";
import loadingDot from "../../assets/images/loadingDots5.gif";

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
import AddedToCartSideMenu from "../../pages/AddedToCartSideMenu.js";
import { useAppContext } from "../../context/appContext";
import products from "../../utils/products";
SwiperCore.use([Navigation, Pagination, Scrollbar, Mousewheel]);

const NewProdDetail = ({ fav }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  const [option, setOption] = useState(0);
  const [loading, setLoading] = useState(false);

  const { productId } = useParams();
  const product = products.find((product) => product.id == productId);
  const {
    id,
    desc,
    articleNum,
    text,
    type,
    size,
    rating,
    reviews,
    price,
    img,
    options,
    availability,
    amount,
    optionSelected,
  } = product;
  const { examples } = options[option];

  const [foundFavItem, setFoundFavItem] = useState(false);
  const [itemAmount, setItemAmount] = useState(amount);
  const minus = document.getElementsByClassName("minus");
  const [hover, setHover] = useState(false);
  const {
    windowWidth,
    cartItems,
    favItems,
    setCartItems,
    setFavItems,
    addCartItemsToLocalStorage,
    addFavItemsToLocalStorage,
    togglePopUp,
    sendCartItems,
    updateCartItems,
    sendFavItems,
    updateFavItems,
    getCartItems,
    getFavItems,
    found,
    foundFav,
  } = useAppContext();

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function makeDelay() {
    // setLoading(true);
    // console.log("before");
    await delay(3000);
    // console.log("after");
    setLoading(false);
  
  }

  async function timeNotification (){
    await delay(5000)
    setFoundFavItem(false)
  }
  const handleExitNotification = () => {
    setFoundFavItem(false);
  };
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  const increment = () => {
    // console.log("up");
    setItemAmount((prevAmount) => {
      let newAmount = parseInt(prevAmount) + 1;
      return newAmount;
    });
    minus[0].style.color = "black";
    minus[0].style.cursor = "pointer";
  };

  const decrement = () => {
    // console.log("down");
    minus[0].style.color = "lightgrey";
    minus[0].style.cursor = "auto";

    if (itemAmount > 1) {
      minus[0].style.color = "black";
      minus[0].style.cursor = "pointer";

      setItemAmount((prevAmount) => {
        let newAmount = parseInt(prevAmount) - 1;
        return newAmount;
      });
    }
  };
  const changeOption = (e) => {
    console.log(e.currentTarget.id);
    setOption(e.currentTarget.id);
    let buttons = Array.from(document.getElementsByClassName("option"));
    buttons.forEach((btn) => {
      btn.style.border = "2px solid white";
    });
    buttons[e.currentTarget.id].style.border = "2px solid black";
  };

  const centsIndex = price.indexOf(".") + 1;
  const dollars = price.slice(0, centsIndex - 1);
  const cents = price.slice(centsIndex - 1, price.length);

  useEffect(() => {
    // console.log(cartItems.length);
    if (cartItems.length > 1) {
      // console.log("changes");
      getCartItems();
      // console.log(retrievedItems);
    }
    if (favItems.length > 1) {
      // console.log("changes");
      getFavItems();
      // console.log(retrievedItems);
    }
  }, [cartItems.length, favItems.length]);

  useEffect(() => {
    getCartItems();
    getFavItems();
  }, []);

  const addToFav = () => {
    console.log("addtofav");
    setFavItems((prevItems) => {
      let tempItem = [
        {
          id: id, //need item
          text: text,
          type: type,
          size: size,
          price: price,
          articleNum: articleNum,
          availability: availability,
          optionSelected: option,
          options: options[option], //includes color and img
          img: options[option].img1,
          color: options[option].color,
          amount: itemAmount,
        },
      ];
      // check for duplicate items in cartItems
      let foundIndex = favItems.findIndex(
        (el) => el[0].id == id && el[0].options.color == options[option].color
      );

      //if no same item found:
      if (foundIndex < 0 || !foundFav) {
        setFoundFavItem(false);
        prevItems.push(tempItem);
        makeDelay();
        //if at least 1 item is found
        if (favItems.length > 1) {
          //add item to the same cartItems list
          updateFavItems({ favItems });
          //if no items exist in the array
        } else {
          //post a brand new list of cartItems
          sendFavItems();
        }
        // togglePopUp();
        return prevItems;

        // if same item found
      } else {
        console.log("found fav item");
        setFoundFavItem(true);
        timeNotification()
        //modify that particular element in the list
        prevItems.splice(foundIndex, 1, tempItem);
        makeDelay();

        updateFavItems({ favItems });
        addFavItemsToLocalStorage({ favItems });

        // togglePopUp();
        return prevItems;
      }

      // prevItems.push(tempItem);

      // return prevItems;
    });
  };
  const addToCart = (e) => {
    //adds first item here

    setCartItems((prevItems) => {
      let tempItem = [
        {
          id: id, //need item
          text: text,
          type: type,
          size: size,
          price: price,
          articleNum: articleNum,
          availability: availability,
          optionSelected: option,
          options: options[option], //includes color and img
          img: options[option].img1,
          color: options[option].color,
          amount: itemAmount,
        },
      ];
      // console.log(cartItems)

      // check for duplicate items in cartItems
      let foundIndex = cartItems.findIndex(
        (el) => el[0].id == id && el[0].options.color == options[option].color
      );

      // console.log(cartItems);
      // console.log(foundIndex);

      //if no same item found:
      if (foundIndex < 0 || !found) {
        prevItems.push(tempItem);
        makeDelay();
        //if at least 1 item is found
        if (cartItems.length > 1) {
          //add item to the same cartItems list
          updateCartItems({ cartItems });

          //if no items exist in the array
        } else {
          //post a brand new list of cartItems
          sendCartItems();
        }
        togglePopUp();
        return prevItems;

        // if same item found
      } else {
        //modify that particular element in the list
        prevItems.splice(foundIndex, 1, tempItem);
        makeDelay();

        updateCartItems({ cartItems });
        addCartItemsToLocalStorage({ cartItems });

        togglePopUp();
        return prevItems;
      }
    });
  };
  return (
    <Wrapper>
      <>
        <AddedToCartSideMenu data={{ itemAmount, text }} />
        {windowWidth < 900 ? (
          <div className="details-container">
            {foundFavItem && (
              <div
                className="notification"
                style={{
                  position: "absolute",
                  background: "#000000c2",
                  width: "80%",
                  left: "10%",
                  display: "flex",
                  color: "white",
                }}
              >
                <div
                  className="text-notification"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Item already added!
                </div>
                <div
                  className="exit-notification"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "10%",
                    paddingRight:'0.3rem',
                    alignItems:'center', 
                  }}
                  onClick={() => handleExitNotification()}
                >
                  <RxCross2/>
                </div>
              </div>
            )}
            <div className="add-to-fav-container" onClick={() => addToFav()}>
              <AiOutlineHeart className="add-to-fav" />
            </div>
            <Swiper
              className="swiper-slider-container"
              grabCursor={true}
              spaceBetween={100}
              slidesPerView={1}
              pagination={{ type: "fraction" }}
              onSwiper={setSwiperRef}
              centeredSlides={false}
              keyboard={{ enabled: true }}
              direction="horizontal"
              mousewhel={{ forceToAxis: true }}
              scrollbar={{ draggable: true }}
              modules={[Keyboard, Mousewheel, Pagination]}
            >
              {examples.map(({ id2, img2 }) => {
                return (
                  <div key={id2} className="slide">
                    <SwiperSlide key={id2}>
                      <img src={img2} />
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>
            <div className="options-box">
              {options.map(({ img1, id1 }) => {
                return (
                  <button className="option" key={id1}>
                    <img
                      src={img1}
                      id={id1}
                      onClick={(e) => {
                        changeOption(e);
                      }}
                    />
                  </button>
                );
              })}
            </div>
            <div className="bottom-side">
              <div className="text-container">
                <div className="name">{text}</div>
                <div className="type-size">
                  <h4>
                    {type} {size}
                  </h4>
                </div>
                <div className="price" style={{ paddingBottom: "1.5rem" }}>
                  <span>$</span>
                  {dollars}
                  <span style={{ fontSize: ".80rem", paddingBottom: "0.2rem" }}>
                    {cents}
                  </span>
                </div>
                <div className="ratings">
                  {rating >= 1 ? (
                    <div>
                      <AiFillStar />
                    </div>
                  ) : (
                    <div>
                      <AiOutlineStar />
                    </div>
                  )}
                  {rating >= 2 ? (
                    <div>
                      <AiFillStar />
                    </div>
                  ) : (
                    <div>
                      <AiOutlineStar />
                    </div>
                  )}
                  {rating >= 3 ? (
                    <div>
                      <AiFillStar />
                    </div>
                  ) : (
                    <div>
                      <AiOutlineStar />
                    </div>
                  )}
                  {rating >= 4 ? (
                    <div>
                      <AiFillStar />
                    </div>
                  ) : (
                    <div>
                      <AiOutlineStar />
                    </div>
                  )}
                  {rating >= 5 ? (
                    <div>
                      <AiFillStar />
                    </div>
                  ) : (
                    <div>
                      <AiOutlineStar />
                    </div>
                  )}
                  <span className="reviews">({reviews})</span>
                </div>
                <h2>Choose color</h2>
                <div className="getit-container">
                  <h2>How to get it</h2>
                  <div className="getit-options">
                    <button className="delivery-btn">
                      <div className="getit-info">
                        <div className="truck-container">
                          <LiaTruckSolid />
                        </div>
                        <div className="text">
                          <h2 className="getit-type">Delivery</h2>
                          <h4 className="getit-desc">
                            Check delivery availability
                          </h4>
                        </div>
                      </div>
                      <div className="arrow-container">
                        <BsChevronRight />
                      </div>
                    </button>

                    <button className="pickup-btn">
                      <div className="getit-info">
                        <div className="pickup-container">
                          <BiStore />
                        </div>
                        <div className="text">
                          <h2 className="getit-type">In store</h2>
                          <h4 className="getit-desc">Check in-store stock</h4>
                        </div>
                      </div>
                      <div className="arrow-container">
                        <BsChevronRight />
                      </div>
                    </button>
                    <div className="add-to-cart-content">
                      <button className="inc-dec-btn">
                        <div
                          className="minus-container"
                          style={{
                            backgroundColor:
                              itemAmount > 1 && hover ? "lightgrey" : "white",
                          }}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          onClick={() => decrement()}
                        >
                          <AiOutlineMinus className="minus" />
                        </div>
                        {itemAmount}
                        <div
                          className="plus-container"
                          onClick={() => increment()}
                        >
                          <AiOutlinePlus className="plus" />
                        </div>
                      </button>
                      <button
                        className="add-to-cart-btn"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onClick={(e) => addToCart(e)}
                      >
                        {loading ? <img src={loadingDot} /> : "Add to cart"}
                      </button>
                    </div>
                    <div className="description">{desc}</div>
                    <div className="articleNum-container">
                      <h2>Article Number</h2>
                      <div className="articleNum"> {articleNum}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container-desktop">
            {foundFavItem && (
              <div
                className="notification"
                style={{
                  position: "absolute",
                  background: "#000000c2",
                  width: "60%",
                  left: "20%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <div
                  className="text-notification"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Item already added!
                </div>
                <div
                  className="exit-notification"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "10%",
                    paddingRight:'0.3rem',
                    alignItems:'center', 
                  }}
                  onClick={() => handleExitNotification()}
                >
                  <RxCross2/>
                </div>
              </div>
            )}

            <div className="left-side">
              <div className="images-container">
                {examples.map(({ id2, img2 }) => {
                  return (
                    <div key={id2} className="slide">
                      <div className="image" key={id2}>
                        <img src={img2} />
                      </div>
                    </div>
                  );
                })}

                <div className="description">{desc}</div>
              </div>
              <div className="articleNum-container">
                <h2>Article Number</h2>
                <div className="articleNum"> {articleNum}</div>
              </div>
            </div>
            <div className="right-side">
              <div className="text-container">
                <div className="name">{text}</div>
                <div className="type-size">
                  <h4>
                    {type} {size}
                  </h4>
                </div>
                <div className="price" style={{ paddingBottom: "1.5rem" }}>
                  <span>$</span>
                  {dollars}
                  <span style={{ fontSize: ".80rem", paddingBottom: "0.2rem" }}>
                    {cents}
                  </span>
                </div>
                <div className="ratings">
                  {rating >= 1 ? (
                    <div>
                      <AiFillStar />
                    </div>
                  ) : (
                    <div>
                      <AiOutlineStar />
                    </div>
                  )}
                  {rating >= 2 ? (
                    <div>
                      <AiFillStar />
                    </div>
                  ) : (
                    <div>
                      <AiOutlineStar />
                    </div>
                  )}
                  {rating >= 3 ? (
                    <div>
                      <AiFillStar />
                    </div>
                  ) : (
                    <div>
                      <AiOutlineStar />
                    </div>
                  )}
                  {rating >= 4 ? (
                    <div>
                      <AiFillStar />
                    </div>
                  ) : (
                    <div>
                      <AiOutlineStar />
                    </div>
                  )}
                  {rating >= 5 ? (
                    <div>
                      <AiFillStar />
                    </div>
                  ) : (
                    <div>
                      <AiOutlineStar />
                    </div>
                  )}
                  <span className="reviews">({reviews})</span>
                </div>
                <h2>Choose color</h2>
                <div className="options-box">
                  {options.map(({ img1, id1 }) => {
                    return (
                      <button className="option" key={id1}>
                        <img
                          src={img1}
                          id={id1}
                          onClick={(e) => {
                            changeOption(e);
                          }}
                        />
                      </button>
                    );
                  })}
                </div>
                <div className="getit-container">
                  <h2>How to get it</h2>
                  <div className="getit-options">
                    <button className="delivery-btn">
                      <div className="truck-container">
                        <LiaTruckSolid />
                      </div>
                      <div className="text">
                        <h2 className="getit-type">Delivery</h2>
                        <h4 className="getit-desc">
                          Check delivery availability
                        </h4>
                      </div>
                      <div className="arrow-container">
                        <BsChevronRight />
                      </div>
                    </button>

                    <button className="pickup-btn">
                      <div className="pickup-container">
                        <BiStore />
                      </div>
                      <div className="text">
                        <h2 className="getit-type">In store</h2>
                        <h4 className="getit-desc">Check in-store stock</h4>
                      </div>
                      <div className="arrow-container">
                        <BsChevronRight />
                      </div>
                    </button>
                    <div className="add-to-cart-content">
                      <button className="inc-dec-btn">
                        <div
                          className="minus-container"
                          style={{
                            backgroundColor:
                              itemAmount > 0 && hover ? "lightgrey" : "white",
                          }}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <AiOutlineMinus
                            className="minus"
                            onClick={() => decrement()}
                          />
                        </div>
                        {itemAmount}
                        <div className="plus-container">
                          <AiOutlinePlus
                            className="plus"
                            onClick={() => increment()}
                          />
                        </div>
                      </button>
                      <button
                        className="add-to-cart-btn"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onClick={(e) => addToCart(e)}
                      >
                        {loading ? <img src={loadingDot} /> : "Add to cart"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="add-to-fav-container" onClick={() => addToFav()}>
                <AiOutlineHeart className="add-to-fav" />
              </div>
            </div>
          </div>
        )}
      </>
    </Wrapper>
  );
};

export default NewProdDetail;

import React, { useState, useEffect } from "react";
import Wrapper from "../../assets/wrappers/Cart";
import { FaChevronDown } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { TbBuildingStore } from "react-icons/tb";
import { SlOptions } from "react-icons/sl";
import { PiDotOutlineFill } from "react-icons/pi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

import ikeaBag from "../../assets/images/ikea-bag.png";
import { toast } from "react-toastify";
import products from "../../utils/products";

const Cart = () => {
  const navigate = useNavigate();
  const [option, setOption] = useState(0);
  const [hover, setHover] = useState(false);

  const {
    calTotal,
    calTotalProd,
    calTotalFav,
    updateCartItems,
    total,
    cartItems,
    setCartItems,
    addCartItemsToLocalStorage,
    getCartItems,
    emptyCartItems,
    found,
    user,
    setReceiveType,
    receiveType,

    receivePrice,
    setReceivePrice,
  } = useAppContext();
  // let count = 0;

  // const [itemAmount, setItemAmount] = useState();
  const minus = document.getElementsByClassName("minus");
  const [del, setDel] = useState(false);

  useEffect(() => {
    console.log(cartItems);
    calTotal();
    calTotalProd();
    calTotalFav();
    if (user != null) {
      getCartItems();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("here.............");
    // document.addEventListener("DOMContentLoaded", function (e) {
    console.log("dom loaded ");

    let deliveryBtn = document.getElementsByClassName("delivery-btn")[0];
    let collectBtn = document.getElementsByClassName("collect-btn")[0];

    console.log(deliveryBtn);
    if (deliveryBtn != undefined || collectBtn != undefined) {
      console.log("works");
      deliveryBtn.style.borderColor = "lightGray";
      collectBtn.style.borderColor = "lightGray";

      if (receiveType == "Delivery") {
        deliveryBtn.style.borderColor = "black";
        collectBtn.style.borderColor = "lightGray";

        setReceivePrice(50);
      } else {
        collectBtn.style.borderColor = "black";
        deliveryBtn.style.borderColor = "lightGray";

        setReceivePrice(0);
      }
    } else {
      console.log("not yet loaded ");
    }
  }, [receiveType]);

  useEffect(() => {
    //for clearing cart when all items have been deleted
    if (del && cartItems.length > 0) {
      // console.log("GET");
      getCartItems();
      // console.log("PATCH");
      updateCartItems({ cartItems });
      setDel(false);
    }

    if (del && cartItems.length < 1) {
      // console.log("cart EMPTIED.............");
      emptyCartItems();
      setDel(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems.length]);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleRemove = (e) => {
    const item =
      e.currentTarget.parentElement.parentElement.children[0].innerHTML;
    const color =
      e.currentTarget.parentElement.parentElement.children[1].children[1]
        .innerHTML;
    let foundIndex = cartItems.findIndex(
      (element) => element[0].color === color && element[0].text === item
    );

    setCartItems((prevItems) => {
      prevItems.splice(foundIndex, 1);
      addCartItemsToLocalStorage({ cartItems });

      calTotal();
      calTotalProd();

      return prevItems;
    });
    setDel(true);
  };

  const increment = (e) => {
    const item =
      e.currentTarget.parentElement.parentElement.parentElement.children[0]
        .innerHTML;

    const color =
      e.currentTarget.parentElement.parentElement.parentElement.children[1]
        .children[1].innerHTML;

    let foundIndex = cartItems.findIndex(
      // this is not product id but location of it in cart
      (element) => element[0].color === color && element[0].text === item
    );

    console.log(cartItems[foundIndex][0]);

    let numAmount = parseInt(cartItems[foundIndex][0].amount) + 1;

    minus[0].style.color = "black";
    minus[0].style.cursor = "pointer";

    const product = products.find(
      (product) => product.id == cartItems[foundIndex][0].id
    ); //thats the problem

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
      options,
      availability,
      amount, // this amount is still the old amount as the cart is not yet updated
    } = product;

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
          amount: numAmount,
        },
      ];
      //modify that particular element in the list
      prevItems.splice(foundIndex, 1, tempItem);

      updateCartItems({ cartItems });
      addCartItemsToLocalStorage({ cartItems });

      calTotal();
      calTotalProd();

      return prevItems;
    });
  };

  const decrement = (e) => {
    minus[0].style.color = "lightgrey";
    minus[0].style.cursor = "auto";

    const item =
      e.currentTarget.parentElement.parentElement.parentElement.children[0]
        .innerHTML;

    const color =
      e.currentTarget.parentElement.parentElement.parentElement.children[1]
        .children[1].innerHTML;

    // let foundIndex = cartItems.findIndex(
    //   (element) => element[0].color === color && element[0].text === item
    // );

    let foundIndex = cartItems.findIndex(
      // this is not product id but location of it in cart
      (element) => element[0].color === color && element[0].text === item
    );

    if (cartItems[foundIndex][0].amount > 1) {
      console.log(cartItems[foundIndex][0]);

      let numAmount = parseInt(cartItems[foundIndex][0].amount) - 1;

      minus[0].style.color = "black";
      minus[0].style.cursor = "pointer";

      const product = products.find(
        (product) => product.id == cartItems[foundIndex][0].id
      ); //thats the problem

      // let numAmount = parseInt(cartItems[foundIndex][0].amount) - 1;

      // minus[0].style.color = "black";
      // minus[0].style.cursor = "pointer";

      // const product = products.find((product) => product.id == cartItems[0][foundIndex].id);//thats the problem

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
        options,
        availability,
        amount, // this amount is still the old amount as the cart is not yet updated
      } = product;

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
            amount: numAmount,
          },
        ];
        //modify that particular element in the list
        prevItems.splice(foundIndex, 1, tempItem);

        updateCartItems({ cartItems });
        addCartItemsToLocalStorage({ cartItems });

        calTotal();
        calTotalProd();

        return prevItems;
      });
    }
  };

  const handleCheckout = () => {
    console.log("here.....");
    var deliveryBtn = document.getElementsByClassName("delivery-btn")[0];
    var collectBtn = document.getElementsByClassName("collect-btn")[0];

    if (deliveryBtn != undefined || collectBtn != undefined) {
      if (receiveType == "Delivery" || receiveType == "Collect") {
        console.log("checking out ...");
        navigate("/notavailable");
      } else {
        toast.error("please select Collect or Delivery first!");

        setTimeout(() => {
          deliveryBtn.style.borderColor = "lightGray";
          collectBtn.style.borderColor = "lightGray";
        }, 3000);

        deliveryBtn.style.borderColor = "red";
        collectBtn.style.borderColor = "red";
      }
    }
  };
  return (
    <Wrapper>
      {found && cartItems.length > 0 ? (
        <>
          <div className="left-side">
            <div className="top-row">
              <h1>Shopping cart</h1>
              {/* <div>
                <SlOptions />
              </div> */}
            </div>
            <h3>How would you like to receive your order? </h3>
            <div className="btns-container">
              <button
                className="delivery-btn"
                onClick={() => setReceiveType("Delivery")}
              >
                <FiTruck />
                Delivery
              </button>

              <button
                className="collect-btn"
                onClick={() => setReceiveType("Collect")}
              >
                <TbBuildingStore />
                Collect
              </button>
            </div>
            <div className="products-container">
              {cartItems.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="product-container"
                    style={{ paddingBottom: "4rem" }}
                  >
                    <div className="left">
                      <div className="img-container">
                        <img
                          className="img"
                          alt={item[0].text}
                          src={item[0].img}
                        />
                        <div className="article-container">
                          {item[0].articleNum}
                        </div>
                      </div>
                      <div className="details">
                        <div className="text">{item[0].text}</div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <div className="type">{item[0].type}, </div>
                          <div className="color">{item[0].color}</div>
                        </div>
                        <div className="size">{item[0].size}</div>
                        <div className="availability">
                          <PiDotOutlineFill className="dot" />
                          {item[0].availability}
                        </div>
                        <div className="amount-delete-row">
                          <button className="inc-dec-btn">
                            <div
                              className="minus-container"
                              // style={{
                              //   backgroundColor:
                              //     itemAmount > 0 && hover
                              //       ? "lightgrey"
                              //       : "white",
                              // }}
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                              onClick={(e) => decrement(e)}
                            >
                              <AiOutlineMinus className="minus" />
                            </div>
                            <div className="amount">{item[0].amount}</div>
                            <div
                              className="plus-container"
                              onClick={(e) => increment(e)}
                            >
                              <AiOutlinePlus className="plus" />
                            </div>
                          </button>
                          <div
                            className="delete"
                            onClick={(e) => handleRemove(e)}
                          >
                            Remove product
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right">
                      <div className="price">${item[0].price}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right-side">
            <h3>Order summary</h3>
            <div className="total-price">
              <h4>Products price</h4>
              <h4> $ {total.toFixed(2)}</h4>
            </div>
            <div className="collect-delivery-price">
              <h4>{receiveType}</h4>
              <h4>${receivePrice}.00</h4>
            </div>

            <div className="line"></div>
            <div className="subtotal-row">
              <h4>Subtotal</h4>
              <h2>${Number(total.toFixed(2)) + Number(receivePrice)}.00</h2>
            </div>
            <button
              className="continue-to-checkout"
              onClick={() => handleCheckout()}
            >
              Continue to checkout
            </button>
          </div>
        </>
      ) : (
        <div
          className="container-empty"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: "700",
              lineHeight: "48px",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={ikeaBag}></img>
            <h1
              style={{
                fontSize: "50px",
                fontWeight: "bolder",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              Your shopping bag is empty
            </h1>
            <h4
              style={{ fontSize: "2rem", padding: "2rem", textAlign: "center" }}
            >
              When you add products to your shopping bag, they will appear here.
            </h4>
            <h5 style={{ paddingTop: "5rem", fontSize: "2rem" }}>
              Start exploring
            </h5>
            <h5 style={{ fontSize: "2rem" }}>
              {" "}
              <FaChevronDown />
            </h5>
            <button
              className="see-all-btn"
              onClick={() => navigate("/all-new-products")}
            >
              Browse all products
            </button>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Cart;

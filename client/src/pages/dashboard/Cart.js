import React, { useState, useEffect } from "react";
import Wrapper from "../../assets/wrappers/Cart";
import { FiTruck } from "react-icons/fi";
import { TbBuildingStore } from "react-icons/tb";
import { SlOptions } from "react-icons/sl";
import { PiDotOutlineFill } from "react-icons/pi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const [receiveType, setReceiveType] = useState("delivery");

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
  } = useAppContext();
  // let count = 0;

  const [itemAmount, setItemAmount] = useState(0);
  const minus = document.getElementsByClassName("minus");
  const [del, setDel] = useState(false);
  useEffect(() => {
    calTotal();
    calTotalProd();
    calTotalFav(); 
    getCartItems();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




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
    let numAmount = e.currentTarget.parentElement.children[1];
    numAmount.innerHTML = parseInt(numAmount.innerHTML) + 1;
    setItemAmount(parseInt(numAmount.innerHTML));

    minus[0].style.color = "black";
    minus[0].style.cursor = "pointer";
  };

  const decrement = (e) => {
    minus[0].style.color = "lightgrey";
    minus[0].style.cursor = "auto";

    let numAmount = e.currentTarget.parentElement.children[1];
    setItemAmount(parseInt(numAmount.innerHTML));

    if (itemAmount > 1) {
      minus[0].style.color = "black";
      minus[0].style.cursor = "pointer";

      numAmount.innerHTML = parseInt(numAmount.innerHTML) - 1;
    }
  };

  const handleCheckout = ()=>{
    console.log('checking out ...')
    navigate()
  }
  return (
    <Wrapper>
      {cartItems.length > 0 || found ? (
        <>
          <div className="left-side">
            <div className="top-row">
              <h1>Shopping cart</h1>
              <div>
                <SlOptions />
              </div>
            </div>
            <h3>How would you like to receive your order? </h3>
            <div className="btns-container">
              <button
                className="delivery-btn"
                onClick={() => setReceiveType("delivery")}
              >
                <FiTruck />
                Delivery
              </button>

              <button
                className="collect-btn"
                onClick={() => setReceiveType("collect")}
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
                        <img className="img" alt={item[0].text} src={item[0].img} />
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
                              style={{
                                backgroundColor:
                                  itemAmount > 0 && hover
                                    ? "lightgrey"
                                    : "white",
                              }}
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
              <h4>{receiveType === "delivery" ? "Delivery" : "Collect"}</h4>
              <h4>-</h4>
            </div>

            <div className="line"></div>
            <div className="subtotal-row">
              <h4>Subtotal</h4>
              <h2>${total.toFixed(2)}</h2>
            </div>
            <button className="continue-to-checkout" onClick={()=>handleCheckout()}>
              Continue to checkout
            </button>
          </div>
        </>
      ) : (
        <div
          style={{ fontSize: "36px", fontWeight: "700", lineHeight: "48px" }}
        >
          Your cart is empty
        </div>
      )}
    </Wrapper>
  );
};

export default Cart;

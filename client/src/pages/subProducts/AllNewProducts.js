import React, { useEffect, useState, useRef } from "react";
import Wrapper from "../../assets/wrappers/sub-wrappers/AllNewProducts";

import products from "../../utils/products";
import { useAppContext } from "../../context/appContext";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { IoIosOptions } from "react-icons/io";
import { all } from "axios";
import NewProduct from "./NewProduct";

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
          if(up.style.display == 'block'){
            // console.log(up)
            up.style.display = 'none'
            down.style.display = 'block'
          }
        });
        console.log("outside");
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
          <div className="sort-container">
            <button
              className="sort-btn"
              onClick={(e) => {
                clickChange(e);
              }}
            >
              Sort
              <div className="up-arrow">
                <AiOutlineUp />
              </div>
              <div className="down-arrow">
                <AiOutlineDown />
              </div>
            </button>
            <div className="box">
              <div className="sort-container ">
                <label className="sort-cntr">
                  Best Match
                  <input type="radio" name="radio" />
                  <span
                    className="checkmark"
                    onClick={(e) => radioClicked(e)}
                  ></span>
                </label>
                <label className="sort-cntr">
                  Price: low to high
                  <input type="radio" name="radio" />
                  <span
                    className="checkmark"
                    onClick={(e) => radioClicked(e)}
                  ></span>
                </label>
                <label className="sort-cntr">
                  Price: high to low
                  <input type="radio" name="radio" />
                  <span
                    className="checkmark"
                    onClick={(e) => radioClicked(e)}
                  ></span>
                </label>
                <label className="sort-cntr">
                  Newest
                  <input type="radio" name="radio" />
                  <span
                    className="checkmark"
                    onClick={(e) => radioClicked(e)}
                  ></span>
                </label>
                <label className="sort-cntr">
                  Customer rating
                  <input type="radio" name="radio" />
                  <span
                    className="checkmark"
                    onClick={(e) => radioClicked(e)}
                  ></span>
                </label>
                <label className="sort-cntr">
                  Name
                  <input type="radio" name="radio" />
                  <span
                    className="checkmark"
                    onClick={(e) => radioClicked(e)}
                  ></span>
                </label>
                <label className="sort-cntr">
                  Most popular
                  <input type="radio" name="radio" />
                  <span
                    className="checkmark"
                    onClick={(e) => radioClicked(e)}
                  ></span>
                </label>
                <label className="sort-cntr">
                  width
                  <input type="radio" name="radio" />
                  <span
                    className="checkmark"
                    onClick={(e) => radioClicked(e)}
                  ></span>
                </label>
                <label className="sort-cntr">
                  height
                  <input type="radio" name="radio" />
                  <span
                    className="checkmark"
                    onClick={(e) => radioClicked(e)}
                  ></span>
                </label>
                <label className="sort-cntr">
                  width
                  <input type="radio" name="radio" />
                  <span
                    className="checkmark"
                    onClick={(e) => radioClicked(e)}
                  ></span>
                </label>
                <label className="sort-cntr">
                  length
                  <input type="radio" name="radio" />
                  <span
                    className="checkmark"
                    onClick={(e) => radioClicked(e)}
                  ></span>
                </label>
              </div>
            </div>
          </div>

          <div className="size-container">
            <button
              className="size-btn"
              onClick={(e) => {
                clickChange(e);
              }}
            >
              Size
              <div className="up-arrow">
                <AiOutlineUp />
              </div>
              <div className="down-arrow">
                <AiOutlineDown />
              </div>
            </button>
            <div className="box"> box</div>
          </div>

          <div className="color-container">
            <button
              className="color-btn"
              onClick={(e) => {
                clickChange(e);
              }}
            >
              Color
              <div className="up-arrow">
                <AiOutlineUp />
              </div>
              <div className="down-arrow">
                <AiOutlineDown />
              </div>{" "}
            </button>
            <div className="box"> box</div>
          </div>
          <div className="price-container">
            <button
              className="price-btn"
              onClick={(e) => {
                clickChange(e);
              }}
            >
              Price
              <div className="up-arrow">
                <AiOutlineUp />
              </div>
              <div className="down-arrow">
                <AiOutlineDown />
              </div>
            </button>
            <div className="box"> box</div>
          </div>
          <div className="category-container">
            <button
              className="category-btn"
              onClick={(e) => {
                clickChange(e);
              }}
            >
              Category
              <div className="up-arrow">
                <AiOutlineUp />
              </div>
              <div className="down-arrow">
                <AiOutlineDown />
              </div>
            </button>
            <div className="box"> box</div>
          </div>

          <div className="type-container">
            <button
              className="type-btn"
              onClick={(e) => {
                clickChange(e);
              }}
            >
              Type
              <div className="up-arrow">
                <AiOutlineUp />
              </div>
              <div className="down-arrow">
                <AiOutlineDown />
              </div>
            </button>
            <div className="box"> box</div>
          </div>

          <div className="features-container">
            <button
              className="features-btn"
              onClick={(e) => {
                clickChange(e);
              }}
            >
              Features
              <div className="up-arrow">
                <AiOutlineUp />
              </div>
              <div className="down-arrow">
                <AiOutlineDown />
              </div>
            </button>
            <div className="box"> box</div>
          </div>

          <button
            className="all-filters-btn"
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            All filters {<IoIosOptions />}{" "}
          </button>
        </div>
        <div className="product-box">
          {products.map((product) => {
            return <NewProduct key={product.id} {...product} ></NewProduct>;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default AllNewProducts;

import React, { useEffect, useState } from "react";
import products from "../../utils/products";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

import Wrapper from "../../assets/wrappers/sub-wrappers/AllNewProducts";

import { AiFillStar, AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { MdAddShoppingCart, MdRemoveCircle } from "react-icons/md";

const FavPage = () => {
  const {
    foundFav,
    sendFavItems,
    getFavItems,
    updateFavItems,
    setFavItems,
    addFavItemsToLocalStorage,
    favItems,
    calTotalFav, 
    emptyFavItems,
  } = useAppContext();
  const navigate = useNavigate();

  const [del, setDel] = useState(false);

  useEffect(() => {
    getFavItems();
    if (favItems.length == 0) {
      getFavItems();
      sendFavItems();
    }
    if (favItems.length > 0) {
      getFavItems();
      updateFavItems({ favItems });
    }
    console.log(favItems);

    //remove add to fav icon from each item since this the fav list its self
    // const fav = document.getElementsByClassName("add-to-fav");
    // const result = Array.from(fav);
    // console.log(result);
    // result.forEach((element) => {
    //   element.style.display = "none";
    // });
  }, []);

  useEffect(() => {
    //for clearing cart when all items have been deleted
    if (del && favItems.length > 0) {
      // console.log("GET");
      getFavItems();

      // console.log("PATCH");
      updateFavItems({ favItems });
      setDel(false);
    }

    if (del && favItems.length < 1) {
      // console.log("cart EMPTIED.............");
      emptyFavItems();
      setDel(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favItems.length]);

  const handleDelete = (e) => {
    const item =
      e.currentTarget.parentElement.parentElement.parentElement.children[0]
        .innerHTML;
    const color =
      e.currentTarget.parentElement.parentElement.parentElement.children[2]
        .innerHTML;

    // console.log(item);
    // console.log(color);

    let foundIndex = favItems.findIndex(
      (element) => element[0].color === color && element[0].text === item
    );
    console.log(foundIndex);

    setFavItems((prevItems) => {
      prevItems.splice(foundIndex, 1);
      addFavItemsToLocalStorage({ favItems });

      // calTotal();
      calTotalFav();


      return prevItems;
    });
    setDel(true);
  };

  return (
    <Wrapper>
      <div className="title">Shopping List</div>
      {favItems.length > 0 || foundFav ? (
        <div className="product-box">
          {favItems.map((item, index) => {
            return (
              <div
                key={index}
                className="product-item-container"
                // onClick={() => navigate(`/new-product-details/${item[0].id}`)}
              >
                <img src={item[0].img} className="img" alt="img" />
                <div className="product-item">
                  <div className="name">{item[0].text}</div>
                  <div className="type-size">
                    <h4>
                      {item[0].type} {item[0].size}
                    </h4>
                  </div>
                  <h2 className="color">{item[0].color}</h2>

                  <div className="price">
                    <span>$</span>
                    {item[0].price}
                  </div>
                  <h2></h2>

                  <div className="add-container">
                    <div className="add-to-cart">
                      <MdAddShoppingCart />
                    </div>
                    {/* <div className="add-to-fav">
                    <AiOutlineHeart />
                  </div> */}
                    <div className="remove">
                      <MdRemoveCircle onClick={(e) => handleDelete(e)} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          No Items Added Yet!
        </div>
      )}
    </Wrapper>
  );
};

export default FavPage;

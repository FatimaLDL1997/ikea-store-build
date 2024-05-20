import React, { useEffect, useState } from "react";
import products from "../../utils/products";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

import Wrapper from "../../assets/wrappers/sub-wrappers/AllNewProducts";

import { AiFillStar, AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { MdAddShoppingCart, MdRemoveCircle } from "react-icons/md";

const FavPage = () => {
  const {
    user,
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
    if (user != null) {
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
    }

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

    let foundIndex = favItems.findIndex(
      (element) => element[0].color === color && element[0].text === item
    );
    console.log(foundIndex);

    setFavItems((prevItems) => {
      prevItems.splice(foundIndex, 1);
      addFavItemsToLocalStorage({ favItems });

      calTotalFav();

      return prevItems;
    });
    setDel(true);
  };

  return (
    <Wrapper>
      <div className="title">Shopping List</div>
      {foundFav && favItems.length > 0 ? (
        <div className="product-box">
          {favItems.map((item, index) => {
            return (
              <div key={index} className="product-item-container">
                <img
                  src={item[0].img}
                  className="img"
                  alt="img"
                  onClick={() => navigate(`/new-product-details/${item[0].id}`)}
                />
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
                    {item[0].price}.00
                  </div>
                  <h2></h2>

                  <div className="add-container">
                    <div className="add-to-cart">
                      <MdAddShoppingCart
                        onClick={() =>
                          navigate(`/new-product-details/${item[0].id}`)
                        }
                      />
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

        //if fav page is empty 
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{fontSize:'2rem'}}>No Items Added Yet! Click below to explore</h1>

          <button
            className="see-all-btn"
            onClick={() => navigate("/all-new-products")}
          >
            Browse all products
          </button>
        </div>
      )}
    </Wrapper>
  );
};

export default FavPage;

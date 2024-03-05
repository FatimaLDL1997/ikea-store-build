import React, { useEffect } from "react";
import Wrapper from "../../assets/wrappers/Main";
import girlsShopping from "../../assets/images/twogirls.jpg";
import { useAppContext } from "../../context/appContext";
import { PopUp } from "../../components";
import products from "../../utils/products";

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
          <div className="popup">{<PopUp />}</div>
        </div>
        {displaySearched ? (
          <>
            <h1>Showing matches for "{search}"</h1>
            <div>
              {products.map((prod) => {
                return prods.map(({ text }) => {
                  return prod.text.includes(text) && <h1>{prod.text}</h1>;
                });
              })}
            </div>
          </>
        ) : (
          <>
            <h1 className="welcome">Welcome to IKEA Canada</h1>
            <div className="top-container">
              <div className="img-container">
                <img className="twogirls" src={girlsShopping} />
              </div>
              <div className="yellow-box">
                <h2>IKEA Summer SALE – Save up to 50% off select products!</h2>
                <h3> June 22 - August 9, 2023.</h3>
                <h4>
                  What better way to celebrate summer than with a sale? Explore
                  our wide selection of fresh savings! Find more products{" "}
                  <a>in-store</a>.
                </h4>
                <h4 className="offer-container">
                  <a>*offer details</a>
                </h4>
                <h3>
                  IKEA Family members get an extra 10% off summer SALE products.
                </h3>
                <h4>
                  <a className="join-link">Join IKEA Family </a>– it's quick,
                  easy, and free!
                </h4>
                <button className="shop-sale-btn">Shop SALE products</button>
              </div>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Main;

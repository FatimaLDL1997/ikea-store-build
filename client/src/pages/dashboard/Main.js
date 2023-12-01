import React from "react";
import Wrapper from "../../assets/wrappers/Main";
import girlsShopping from "../../assets/images/twogirls.jpg";
import { useAppContext } from "../../context/appContext";
import { PopUp } from "../../components";

const Main = () => {
  const { user } = useAppContext();

  return (
    <Wrapper>
      <div className="main-content">
        <div className="popup-container" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div className="popup">{user && <PopUp />}</div>
        </div>
        <h1 className="welcome">Welcome to IKEA Canada</h1>
        <div className="top-container">
          <div className="img-container">
            <img className="twogirls" src={girlsShopping} />
          </div>
          <div className="yellow-box">
            <h2>IKEA Summer SALE – Save up to 50% off select products!</h2>
            <h3> June 22 - August 9, 2023.</h3>
            <h4>
              What better way to celebrate summer than with a sale? Explore our
              wide selection of fresh savings! Find more products{" "}
              <a>in-store</a>.
            </h4>
            <h4 className="offer-container">
              <a>*offer details</a>
            </h4>
            <h3>
              IKEA Family members get an extra 10% off summer SALE products.
            </h3>
            <h4>
              <a className="join-link">Join IKEA Family </a>– it's quick, easy,
              and free!
            </h4>
            <button className="shop-sale-btn">Shop SALE products</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Main;

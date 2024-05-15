import React from "react";
import sadImg from "../../assets/images/sad.jpg";

const NotAvailable = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign:'center'
      }}
    >
      <img style={{ width: "20rem" }} src={sadImg} />
      Sorry you can't really checkout! Wish this is real IKEA. Click{" "}

      <a href="/main" style={{ cursor: "pointer", color: "blue" }}>here</a> to go to main menu. 
    </div>
  );
};

export default NotAvailable;

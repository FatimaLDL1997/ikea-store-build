import React from "react";
import { TbDoorExit } from "react-icons/tb";
import sorryImg from "../../assets/images/sorry.png";
const Rooms = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img style={{width:'20rem'}} src={sorryImg} />
      Working on getting this page done. Click{" "}
      <a href="/newproducts" style={{ cursor: "pointer", color: "blue" }}>here</a> to try out the
      functional parts of this site for now. Thanks!
    </div>
  );
};

export default Rooms;

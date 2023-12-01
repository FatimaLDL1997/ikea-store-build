import React from "react";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";

const Overlay = () => {
  const { showSidebar, showRightSidebar, showPopUp } = useAppContext();
  useEffect(() => {
    const body = document.querySelector("body");
    if (showSidebar || showPopUp || showRightSidebar) {
      // console.log(body);
      body.classList.add("hide-overflow-y");
    } else {
      body.classList.remove("hide-overflow-y");
    }
  }, [showSidebar, showPopUp, showRightSidebar]);
  return (
    <div
      className="overlay"
      style={{ display: showSidebar || showPopUp || showRightSidebar ? "block" : "none"  }}
    ></div>
  );
};

export default Overlay;

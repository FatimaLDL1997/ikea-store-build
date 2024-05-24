import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { BsPatchCheckFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import { popupAnimation } from "./Animations";
import { useAppContext } from "../context/appContext";

const PopUp = () => {
  const bodyElement = document.getElementsByClassName("body");

  const { showInfo, toggleInfoPopUp } = useAppContext();
  if (showInfo) {
    bodyElement[0].style.overflowY = "hidden";
  }
  // console.log(bodyElement[0].style.overflowY);

  const handleClose = () => {
    const exitButton = document.querySelector(".cross-container");
    exitButton.parentElement.style.display = "none";
    toggleInfoPopUp();
    bodyElement[0].style.overflowY = "visible";
    // console.log(bodyElement[0].style.overflowY);
  };

  // console.log(showInfo);

  return (
    <Wrapper>
      <motion.div
        initial="hidden"
        animate="show"
        variants={popupAnimation}
        className="popup-text"
      >
        <div className="cross-container">
          <ImCross onClick={() => handleClose()} />
        </div>
        <p className="title">Use your location</p>
        <p style={{ borderTop: "0", marginBottom: "0" }}>__________________</p>
        <p>
          Get updated information about product delivery and stock availability
          for your area.
        </p>
        <form>
          <input placeholder="A1B C2D" className="address-input" style={{ textAlign: "center" }}></input>
        </form>

        <button>Save</button>
      </motion.div>
    </Wrapper>
  );
};

export default PopUp;

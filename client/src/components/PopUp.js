import React from "react";
import Wrapper from "../assets/wrappers/Main";
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
        <p className="title">Hi there!</p>
        <p style={{ borderTop: "0", marginBottom: "0" }}>__________________</p>
        <p>
          This is a clone of the IKEA website for learning purposes only and
          to showcase my skills in database manipulation, management and 
          authentication. It is not intended to be used outside of 
          educational purposes and will not allow any real purchases.
        </p>
        <p>
          So, some features of this site are not completely functional.
          For the best experience in testing this site, 
          it is recommended to ONLY follow
          the sidebar links that are
          checked with the following symbol <BsPatchCheckFill />
        </p>
        <p>Thanks You</p>
      </motion.div>
    </Wrapper>
  );
};

export default PopUp;

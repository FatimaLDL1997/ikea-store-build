import React from "react";
import Wrapper from "../assets/wrappers/Main";
import { BsPatchCheckFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import { popupAnimation } from "./Animations";

const handleClose = () => {
  const exitButton = document.querySelector(".cross-container");
  exitButton.parentElement.style.display = "none";
};

const PopUp = () => {
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
          This is a clone of the IKEA website for learning purposes only. This
          IKEA clone is designed by me to showcase my skills in database
          manipulation, management and in authentication and is not intended to
          be used outside of educational purposes.
        </p>
        <p>
          Some features of this site don't work as it is just a close to
          showcase specific skills. To test out the site, it is recommended to
          follow the links that are checked with the following symbol{" "}
          <BsPatchCheckFill />
        </p>
        <p>Thanks You</p>
      </motion.div>
    </Wrapper>
  );
};

export default PopUp;

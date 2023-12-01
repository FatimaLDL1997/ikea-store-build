import axios from "axios";

import { useState, useEffect } from "react";

// import React from "react";
import Logo from "../components/Logo";
import { Alert } from "../components";
import { BiArrowBack } from "react-icons/bi";
import Wrapper from "../assets/wrappers/Register";
import logo from "../assets/images/ikea-gray-logo.png";
import logoYellow from "../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import { IoIosInformation } from "react-icons/io";
import { useAppContext } from "../context/appContext";
import signup from "../assets/images/signup.png";
import signupLarge from "../assets/images/signupLarge.png";
import { MdError } from "react-icons/md";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const {
    user,
    isLoading,
    showAlert,
    alertText,
    alertType,
    displayAlert,
    setupUser,
    windowWidth,
  } = useAppContext();

  const handleChange = (e) => {
    console.log("change");
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();
    const { firstName, lastName, email, password } = values;
    if (!email || !password || !lastName || !firstName) {
      displayAlert();
      return;
    }
    const currentUser = {
      lastName,
      firstName,
      email,
      password,
    };
    console.log(currentUser);
    // if (isMember) {
    //   setupUser({
    //     currentUser,
    //     endpoint: "login",
    //     alertText: "Login Successful! Redirecting...",
    //   });
    // } else {
    setupUser({
      currentUser,
      endpoint: "register",
      alertText: "User Created! Redirecting...",
    });
    // }
  };

  useEffect(() => {
    if (user) {
      //if exists --> go to dashboard
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper>
      <div
        className="sign-in-container"
        style={{ flexDirection: windowWidth < 640 ? "column" : "row" }}
      >
        <div
          className="first-side"
          style={{ width: windowWidth < 640 && "100%" }}
        >
          <div className="top">
            <button className="back">
              <BiArrowBack onClick={() => navigate("/")} />
            </button>
            <img
              className="logo"
              src={logoYellow}
              style={{ display: windowWidth < 640 && "none" }}
            />
          </div>
          <div
            className="bottom-text"
            style={{ paddingTop: windowWidth < 640 && "0" }}
          >
            <div>
              <h1 style={{ fontSize: windowWidth < 640 && "30px" }}>
                Create an <span>IKEA Family</span> Profile
              </h1>
              <h2 style={{ fontSize: windowWidth < 640 && "15px" }}>
                Already have an account?{" "}
                <a onClick={() => navigate("/login")}>Login</a>
              </h2>
            </div>
            {windowWidth < 640 ? (
              <div className="signup-container">
                <img src={signup} />
              </div>
            ) : (
              <div className="signupLarge-container">
                <img src={signupLarge} />
              </div>
            )}
            {windowWidth > 640 && (
              <footer className={"footer"}>
                Ikea.ca - <a>Cookie Policy</a> and <a>Privacy Policy</a>© Inter
                IKEA Systems B.V. 1999-2023
              </footer>
            )}
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="second-side"
          style={{
            width: windowWidth < 640 && "100%",
            marginTop: windowWidth < 640 && "12rem",
          }}
        >
          <h2 style={{ fontSize: "13px", paddingTop: "6rem" }}>
            Join our IKEA Family loyalty program today for rewards, discounts,
            inspiration and few surprises along the way. It's quick, easy and
            free. <a>Learn more</a>
          </h2>
          <div>
            <label>First name</label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              onChange={handleChange}
              value={values.firstName}
            ></input>
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Smith"
              onChange={handleChange}
              value={values.lastName}
            ></input>
          </div>
          <div>
            <label>Birthdate {"(Optional)"}</label>
            <input></input>
          </div>
          <label className="instruction-label">DD-MM-YYYY</label>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="mail@mail.com"
              onChange={handleChange}
              value={values.email}
            ></input>
          </div>
          <div>
            <label>Address</label>
            <input placeholder="123-12 ABC Street, City, Country, Postal Code"></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Secret"
              onChange={handleChange}
              value={values.password}
            ></input>
          </div>
          <div
            className="checkboxes-box"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="checkbox-row">
              <div className="checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  value="1"
                  id="checkboxOneInput"
                />
              </div>
              <h2>
                Yes, I would like to receive exclusive offers, sneak peeks at
                new products and inspiration from IKEA.
              </h2>
            </div>
            <div className="checkbox-row-indented">
              <div className="checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  value="1"
                  id="checkboxOneInput"
                />
              </div>
              <h2>Via Email</h2>
            </div>
            <div className="checkbox-row-indented">
              <div className="checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  value="1"
                  id="checkboxOneInput"
                />
              </div>
              <h2>
                Via SMS {"("}Standard message and data rates may apply.{")"}{" "}
              </h2>
            </div>
            <div className="checkbox-row">
              <div className="checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  value="1"
                  id="checkboxOneInput"
                />
              </div>
              <h2>
                I have read and understood the <a>Terms of Use</a> and{" "}
                <a>Privacy Policy</a>.
              </h2>
            </div>
          </div>
          {showAlert && (
            <label style={{ display: "flex", flexDirection: "row" }}>
              <MdError style={{ color: "red", fontSize: "1.5rem" }} />
              <Alert />
            </label>
          )}
          <button className="register-btn" type="submit">
            Register
          </button>
          {windowWidth < 640 && (
            <footer className={"footer"} style={{ color: "black" }}>
              Ikea.ca - <a>Cookie Policy</a> and <a>Privacy Policy</a>© Inter
              IKEA Systems B.V. 1999-2023
            </footer>
          )}
        </form>
      </div>
    </Wrapper>
  );
};

export default Register;

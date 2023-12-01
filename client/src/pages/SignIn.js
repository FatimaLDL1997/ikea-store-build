import axios from "axios";

import { useState, useEffect } from "react";

// import React from "react";
import { BiArrowBack } from "react-icons/bi";
import Wrapper from "../assets/wrappers/SignIn";
import logo from "../assets/images/ikea-gray-logo.png";
import { useNavigate } from "react-router-dom";
import { IoIosInformation } from "react-icons/io";
import { useAppContext } from "../context/appContext";
import loader from "../assets/images/loader.gif";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const SignIn = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const {
    getCartItems,
    getFavItems,
    calTotalProd,
    calTotalFav, 
    user,
    showAlert,
    displayAlert,
    setupUser,
    windowWidth,
  } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      displayAlert();
      return;
    }
    const currentUser = {
      email,
      password,
    };
    // if (isMember) {
    setupUser({
      currentUser,
      endpoint: "login",
      alertText: "Login Successful! Redirecting...",
    });

    // } else {
    // setupUser({currentUser, endpoint: 'register', alertText:'User Created! Redirecting...'})

    // }
  };

  useEffect(() => {
    if (user) {
      getCartItems();
      getFavItems();
      calTotalProd();
      calTotalFav(); 
      //if exists --> go to dashboard
      setTimeout(() => {
        navigate("/");
        window.location.reload();
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
              src={logo}
              style={{ display: windowWidth < 640 && "none" }}
            />
          </div>
          <div
            className="bottom-text"
            style={{ paddingTop: windowWidth < 640 && "0" }}
          >
            <div>
              <h1 style={{ fontSize: windowWidth < 640 && "30px" }}>
                <span>Login</span> to your IKEA account.
              </h1>
              <h2 style={{ fontSize: windowWidth < 640 && "15px" }}>
                Too many passwords? You can now login with a one-time only code
                we will send to your email address, or verified mobile number
                saved on your IKEA account.
              </h2>
              <h2 style={{ fontSize: windowWidth < 640 && "15px" }}>
                Access your IKEA account using your email address to add and
                verify your mobile number.
              </h2>
            </div>
            {windowWidth > 640 && (
              <footer className={"footer"}>
                Ikea.ca - <a>Cookie Policy</a> and <a>Privacy Policy</a>© Inter
                IKEA Systems B.V. 1999-2023
              </footer>
            )}
          </div>
        </div>
        <form
          className="second-side"
          onSubmit={onSubmit}
          style={{
            width: windowWidth < 640 && "100%",
            marginTop: windowWidth < 640 && "12rem",
          }}
        >
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="mail@mail.com"
              onChange={handleChange}
              value={values.email}
            ></input>
            <label>
              Alternative login: <a>Alternative login with a one-time code</a>
            </label>
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
            <label style={{ textDecoration: "underline" }}>
              <a> Forgot your password</a>
            </label>
          </div>
          <div className="checkbox-row">
            <div className="checkbox-container">
              <input
                className="checkbox"
                type="checkbox"
                value="1"
                id="checkboxOneInput"
              />
              <h2>Stay signed in until you sign out</h2>
            </div>
            <div className="info">
              <IoIosInformation />
            </div>
          </div>

          <button
            className="continue-btn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            type="submit"
          >
            {!showAlert ? (
              "Continue"
            ) : (
              <img
                style={{ position: "relative", height: "63%" }}
                src={loader}
              />
            )}
          </button>
          <h1>Don't have an IKEA account yet? Create one now</h1>
          <button
            className="register-btn"
            onClick={() => navigate("/register")}
          >
            I'm shopping for my home
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

export default SignIn;

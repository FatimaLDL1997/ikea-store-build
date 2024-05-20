import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import {
  Navbar,
  SmallSidebar,
  BigSidebar,
  Overlay,
  RightSidebar,
} from "../../components";
import { useAppContext } from "../../context/appContext";
import { useEffect } from "react";

const SharedLayout = () => {
  const { showSidebar, toggleSidebar, search } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    // console.log(search.length);
    if (search.length > 0) {
      navigate("/");
    }
  }, [search]);

  return (
    <Wrapper>
      <main className="dashboard ">
        {/* <SmallSidebar />  */}
        <Overlay />
        <BigSidebar />
        <RightSidebar />

        <div>
          <Navbar />
          <div className="dashboard-page  ">
            <Outlet />
          </div>
        </div>
      </main>
      <footer className={"footer"} >
        <h2>© Inter IKEA Systems B.V. 1999-2024</h2>
        <div className="footer-options">
          <h1>Privacy Policy</h1>
          <h1>Cookie Policy</h1>
          <h1>Cookie Settings</h1>
          <h1>Responsible Disclosure Policy</h1>
          <h1>Terms & Conditions</h1>
          <h1>Accessibility</h1>
        </div>
      </footer>
    </Wrapper>
  );
};

export default SharedLayout;

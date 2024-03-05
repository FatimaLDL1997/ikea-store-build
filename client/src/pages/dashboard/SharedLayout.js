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
    console.log(search.length);
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
    </Wrapper>
  );
};

export default SharedLayout;

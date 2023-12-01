import React from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { Navbar, SmallSidebar, BigSidebar, Overlay, RightSidebar } from "../../components";
import { useAppContext } from "../../context/appContext";
import { useEffect } from "react";

const SharedLayout = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  
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

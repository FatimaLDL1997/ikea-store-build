import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/RightSidebar";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";

const AddressPopUp = () => {
  const {
    address,
    setAddress,
    handleAddressChange,
    showInfo,
    toggleInfoPopUp,
    user,
    okNumber,
    logoutUser,
  } = useAppContext();
  
  console.log("toggle address");
  console.log(showInfo);
  const handleClose = () => {
    toggleInfoPopUp();
    setAddress("");
  };

  return (
    <Wrapper>
      <div
        className={
          showInfo ? "sidebar-container show-sidebar" : "sidebar-container "
        }
      >
        <div className="content">
          <header>
            <div className="close-container">
              <GrFormClose onClick={handleClose} />
            </div>
          </header>
          <h1>Use your location</h1>
          <h2>
            Get updated information about product delivery and stock
            availability for your area.
          </h2>
          <h2>Enter a postal code</h2>
          <form 
          onSubmit={handleAddressChange}
          >
            <input
              style={{ border: "3px solid green" }}
              placeholder="A1B 2C3"
              name="address"
              value={address}
              className="address"
              onChange={(e) => setAddress(e.target.value.toUpperCase())}
            />
            <button onClick={toggleInfoPopUp}>Save</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddressPopUp;

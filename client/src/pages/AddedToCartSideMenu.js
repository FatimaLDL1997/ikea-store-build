import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/AddedToCartSideMenu";
import { GrFormClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const AddedToCartSideMenu = (props) => {
  const { showPopUp, togglePopUp } = useAppContext();
  const Navigate = useNavigate();

  return (
    <Wrapper>
      <div
        className={
          showPopUp
            ? "sidebar-popup-container show-sidebar"
            : "sidebar-popup-container "
        }
      >
        <div className="content">
          <div className="close-container-box">
            <div className="close-container" onClick={togglePopUp}>
              <GrFormClose />
            </div>
          </div>

          <div className="items">
            <h1>You've added {props.data.itemAmount} {props.data.itemAmount >1 ? props.data.text +"'s":props.data.text} to your shopping bag</h1>
            <a
              style={{ textDecoration: "underline" }}
              onClick={() => {
                togglePopUp();
                Navigate("/cart");
              }}
            >
              Continue to cart
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddedToCartSideMenu;

import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/RightSidebar";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineUser, AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RightSidebar = () => {
  const { showRightSidebar, toggleRightSidebar, user, logoutUser } =
    useAppContext();

  const handleSignIn = () => {
    Navigate("/login");
    toggleRightSidebar();
  };

  const handleSignOut = () => {
    Navigate("/");
    toggleRightSidebar();
    logoutUser();
    window.location.reload();
  };
  const Navigate = useNavigate();
  // console.log(showRightSidebar);

  // console.log(user);
  useEffect(() => {}, [user]);
  return (
    <Wrapper>
      <div
        className={
          showRightSidebar
            ? "sidebar-container show-sidebar"
            : "sidebar-container "
        }
      >
        <div className="content">
          <header>
            <div className="close-container">
              <GrFormClose onClick={toggleRightSidebar} />
            </div>
          </header>
          <div className="items">
            <div className="first-row">
              <h1>
                Hej{" "}
                <span style={{ color: "gold", textTransform: "capitalize" }}>
                  {user && user.firstName}
                </span>
              </h1>
              {user ? (
                <button onClick={() => handleSignOut()}>Sign out</button>
              ) : (
                <button onClick={() => handleSignIn()}>Sign in</button>
              )}
            </div>
            <div className="second-row">
              {user ? <h2>Your IKEA Family</h2> : <h2>Join IKEA Family</h2>}
              <button>
                <AiOutlineRight />
              </button>
            </div>
            {!user && (
              <div className="third-row">
                <h2>Join IKEA Bussiness Network</h2>
                <button>
                  <AiOutlineRight />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default RightSidebar;

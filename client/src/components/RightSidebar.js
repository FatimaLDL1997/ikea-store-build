import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/RightSidebar";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const RightSidebar = () => {
  const {  showRightSidebar, toggleRightSidebar, user, logoutUser } =
    useAppContext();

  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
    toggleRightSidebar();
  };

  const handleSignOut = () => {
    navigate("/");
    toggleRightSidebar();
    logoutUser();
    window.location.reload();
  };
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
              <button onClick={() => navigate("/register")}>
                <AiOutlineRight />
              </button>
            </div>
          
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default RightSidebar;

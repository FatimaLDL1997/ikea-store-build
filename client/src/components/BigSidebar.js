import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/BigSidebar";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";

const BigSidebar = () => {
  const {
    showSidebar,
    toggleSidebar,
    user,
    windowHeight,
    windowWidth,
    setWindowHeight,
    setWindowWidth,
    setWindowDimensions,
  } = useAppContext();
  // console.log(showSidebar);
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container "
        }
      >
        <div className="content">
          <header>
            <div className="close-container">
              <GrFormClose onClick={toggleSidebar} />
            </div>
            <Logo />
          </header>

          <div className="container">
            {windowWidth <1425 && (
              <button className="login-btn"  > 
                <AiOutlineUser />
                <div className="text">
                  {user ? `Hej ${user.firstName}!` : "Hej! Login or signcup"}
                </div>
              </button>
            )}

            <NavLinks toggleSidebar={toggleSidebar} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;

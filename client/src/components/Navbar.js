import Wrapper from "../assets/wrappers/Navbar";
import { FiMenu, FiTruck } from "react-icons/fi";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import {
  AiOutlineUser,
  AiOutlineCamera,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { TbBuildingStore } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  let newLinks1 = links.slice(0, 6);

  const {
    toggleSidebar,
    toggleRightSidebar,
    user,
    setShow,
    setClicked,
    setIndex,
    windowWidth,
    totalProducts,
    totalFavs,
    calTotalProd,
    calTotalFav,
    getCartItems,
    getFavItems,
  } = useAppContext();

  useEffect(() => {
    calTotalProd();
    calTotalFav();
  });
  function myclickfun(link) {
    console.log(link.submenu.length); //checking for submenu
    // console.log(link.id1)
    if (link.submenu.length > 1) {
      // if there isn't
      setShow(true);
      setClicked(true);
      setIndex(link.id1);
      console.log(link.id1);
      // setClicked(false);
      toggleSidebar();
    } else {
      setShow(false);
      setClicked(false);
      // if there is one
      // console.log(link.id1);
    }
  }
  const handleNavToCart = () => {
    getCartItems();
    navigate("/cart");
  };
  const handleNavToFav = () => {
    getFavItems();
    navigate("/favlist");
  };

  return (
    <Wrapper>
      <main className="main-container">
        <div className="top-massege">
          {/* <li>
            <BsTelephone className="top-massege-icon" />
            Order by phone
          </li>
          <li>
            <MdOutlineLocalOffer className="top-massege-icon" />
            IKEA Summer SALE
          </li>
          <li>
            <MdOutlineLocalOffer className="top-massege-icon" />
            Join IKEA Family
          </li> */}
          Download the IKEA app
        </div>
        <div className="nav-center">
          {windowWidth > 1700 && (
            <div className="menu-container">
              <div className="toggle-btn-container">
                <button className="toggle-btn" onClick={toggleSidebar}>
                  <FiMenu />
                </button>
              </div>
              Menu
            </div>
          )}

          <div className="navbar-logo">
            <Logo className="logo" />
          </div>

          {windowWidth > 700 && (
            <div className="search-container">
              <span className="search-icon">
                <AiOutlineSearch />
              </span>
              <input
                type="text"
                name="search"
                className="form-input"
                placeholder="Find what you need to Bring Home to Life"
              ></input>
              <span className="camera-icon">
                <AiOutlineCamera />
              </span>
            </div>
          )}

          <div className="btns-container">
            <button
              className="login-btn"
              style={{ width: windowWidth < 1700 ? "max-content" : "11rem" }}
            >
              <AiOutlineUser onClick={toggleRightSidebar} />
              {windowWidth > 1700 && (
                <div className="text">
                  {user ? `Hej ${user.firstName}!` : "Hej! Login or signcup"}
                </div>
              )}
            </button>

            {totalFavs > 0 && (
              <div
                className="totalFavsIcon"
                style={{
                  position: "absolute",
                  left: "2.8rem",
                  top: "-0.3rem",
                  fontSize: "12px",
                  backgroundColor: "#0058a3",
                  color: "white",
                  width: "1.2rem",
                  height: "1.2rem",
                  borderRadius: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {totalFavs}
              </div>
            )}
            <span className="fav-list">
              <AiOutlineHeart onClick={() => handleNavToFav()} />
            </span>

            <div
              className="cart-container"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              {totalProducts > 0 && (
                <div
                  className="totalProductsIcon"
                  style={{
                    position: "absolute",
                    left: "4.8rem",
                    top: "-0.3rem",
                    fontSize: "12px",
                    backgroundColor: "#0058a3",
                    color: "white",
                    width: "1.2rem",
                    height: "1.2rem",
                    borderRadius: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {totalProducts}
                </div>
              )}

              <span className="cart" onClick={() => handleNavToCart()}>
                <HiOutlineShoppingBag />
              </span>
            </div>

            {windowWidth < 1700 && (
              <div
                className="toggle-btn-container"
                style={{ paddingTop: "0", paddingLeft: "0" }}
              >
                <button className="toggle-btn" onClick={toggleSidebar}>
                  <FiMenu />
                </button>
              </div>
            )}
          </div>
        </div>
        {windowWidth < 700 && (
          <div className="search-container">
            <span className="search-icon">
              <AiOutlineSearch />
            </span>
            <input
              type="text"
              name="search"
              className="form-input"
              placeholder="Find what you need to Bring Home to Life"
              style={{ width: "88vw" }}
            ></input>
            <span className="camera-icon">
              <AiOutlineCamera />
            </span>
          </div>
        )}

        {windowWidth > 1700 && (
          <div className="lower-nav-container">
            <div className="short-nav">
              {newLinks1.map((link) => {
                const { text, path, id1 } = link;

                return (
                  <NavLink
                    to={path}
                    key={id1}
                    onClick={() => {
                      myclickfun(link);
                    }}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    {/* <span className='icon'>{icon}</span> */}
                    {text}
                  </NavLink>
                );
              })}
            </div>

            <div className="loc-store">
              <div className="delivery">
                <FiTruck />
                <h1>M4X 1K3</h1>
              </div>
              <div className="mystore">
                <TbBuildingStore />
                <h1>Toronto Downtown - Aura</h1>
              </div>
            </div>
          </div>
        )}
        {windowWidth < 1700 && (
          <div className="loc-store-small">
            <div className="delivery">
              <FiTruck />
              <h1>M4X 1K3</h1>
            </div>
            <div className="mystore">
              <TbBuildingStore />
              <h1>Toronto Downtown - Aura</h1>
            </div>
          </div>
        )}
        {windowWidth > 1700 && <div className="line"></div>}
      </main>
    </Wrapper>
  );
};

export default Navbar;

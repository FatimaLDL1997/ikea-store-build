import links from "../utils/links";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navlinks";

import { BiArrowBack } from "react-icons/bi";
import { useAppContext } from "../context/appContext";
import { BsPatchCheckFill } from "react-icons/bs";
const NavLinks = ({ toggleSidebar }) => {
  const {
    show,
    setShow,
    clicked,
    setClicked,
    title,
    setTitle,
    index,
    setIndex,
    windowWidth,
  } = useAppContext();

  let newLinks1 = links.slice(0, 6);
  let newLinks2 = links.slice(6, 11);
  let newLinks3 = links.slice(11, 19);

  function myclickfun(link) {
    // console.log(link.submenu.length); //checking for submenu
    // console.log(link.id1);
    const t = document.querySelector(".window-title");
    t.innerHTML = link.text;
    setTitle(title);
    // console.log(t.innerHTML);

    if (link.submenu.length < 1) {
      // if there isn't
      setClicked(false);
      toggleSidebar();
    } else {
      // if there is one
      setShow(true);
      setClicked(true);
      setIndex(link.id1);
      // console.log(link.id1);
    }
  }

  return (
    <Wrapper>
      {show ? (
        <div className="submenu-content-container">
          <div className="back-icon">
            <BiArrowBack
              onClick={() => {
                setShow(false);
                setClicked(false);
              }}
            />
          </div>

          <div id="sj" className="submenu-content">
            {/*render title */}
            {newLinks1.map((link, index) => {
              const { submenu, id1, text } = link;

              return (
                id1 == index && (
                  <div
                    key={id1}
                    className="submenu-title"
                    onClick={() => {
                      toggleSidebar();
                      // setClicked(false);
                      // setShow(false);
                    }}
                  >
                    {text}
                    {/* {text + "s"} */}
                  </div>
                )
              );
            })}

            {/*render submenu-content list */}

            {newLinks1.map((link, i0) => {
              const { submenu, text, id1 } = link;

              return submenu.map((sublink, i) => {
                const { title, id, path } = sublink;
                if (id1 == index) {
                  return (
                    <NavLink
                      to={path}
                      key={id}
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      onClick={() => {
                        toggleSidebar();
                      }}
                    >
                      {i0 == 0 && i == 0 && title}
                      {i0 == 0 && i == 0 && <BsPatchCheckFill />}
                      {(i0 != 0 || i != 0) && title}
                      {/* {i != 0 && title} */}
                    </NavLink>
                  );
                }
              });
            })}
          </div>
        </div>
      ) : (
        // {/*render main menu*/}

        <div className={clicked ? "submenu hidden" : "submenu"}>
          <div className="nav-links-bolder">
            {newLinks1.map((link, index) => {
              const { text, path, id1, submenu } = link;
              return (
                <NavLink
                  to={submenu ? " " : path}
                  key={id1}
                  onClick={() => myclickfun(link)}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {index == 0 && text}
                  {index == 0 && <BsPatchCheckFill />}
                  {index != 0 && text}
                </NavLink>
              );
            })}
          </div>
          <div className="nav-links-bold">
            {newLinks2.map((link) => {
              const { text, path, id1 } = link;

              return (
                <NavLink
                  to={path}
                  key={id1}
                  onClick={toggleSidebar}
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
          <div className="nav-links-reg">
            {newLinks3.map((link, index) => {
              const { text, path, id1 } = link;

              return (
                <NavLink
                  to={path}
                  key={id1}
                  onClick={toggleSidebar}
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
        </div>
      )}
    </Wrapper>
  );
};

export default NavLinks;

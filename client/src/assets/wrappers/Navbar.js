import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  background: var(--white);

  .logo {
    display: flex;
    align-items: center;
    width: 5rem;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    height: fit-content;
    width: 100%;
    background-color: white;
  }
  .nav-center {
    display: flex;
    width: 100%;
    height: 5rem;
    align-items: center;
    position: relative;
    justify-content: space-between;
    /* z-index: -1; */
    padding-top: 0.8rem;
  }
  .btns-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    right: 1rem;
    position: relative;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.3rem;
    color: var(--black);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .toggle-btn-container {
    font-family: monospace;
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }
  .toggle-btn-container:hover {
    background-color: lightgrey;
    border-radius: 50%;
  }
  .menu-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    padding-top: 10px;
    padding-left: 2.8rem;
    font-size: 0.9rem;
    font-weight: 500;
    font-family: "Noto Sans Cypro Minoan", sans-serif;
  }
  //fav list
  .fav-list svg {
    background: transparent;
    border-color: transparent;
    font-size: 1.4rem;
    color: var(--black);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .fav-list {
    //container
    font-family: monospace;
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }
  .fav-list:hover {
    background-color: lightgrey;
    border-radius: 50%;
  }
  ///cart
  .cart svg {
    background: transparent;
    border-color: transparent;
    font-size: 1.4rem;
    color: var(--black);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .cart {
    //container
    font-family: monospace;
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    /* margin: 0 auto; */
    /* margin-right: 0.7rem; */
  }
  .cart:hover {
    background-color: lightgrey;
    border-radius: 50%;
  }

  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
  }

  input {
    width: 52vw;
    height: 2.9rem;
    /* margin: 0 auto; */
    /* margin-right: 15rem; */
    border: none;
    border-radius: 30px;
    text-indent: 30px;
    color: black;
    /* font-weight: 00; */

    font-size: 1.1rem;
    background-color: #f5f5f5;
  }
  input:focus {
    outline-color: #663fc0;
    outline-width: thin;
    outline-style: outset;
  }
  input:hover {
    background-color: lightgrey;
  }
  .search-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    left: 1rem;
  }

  /* .search-container svg */
  .search-icon {
    left: 2rem;
    display: flex;
    position: relative;
    left: 2.4rem;
    font-size: 1.3rem;
  }
  .camera-icon {
    right: 2.5rem;
    font-size: 1.4rem;
    display: flex;
    position: relative;
  }

  .login-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: none;
    background-color: white;
    width: 2rem;
    height: 2rem;
    /* margin: 0 auto; */
    /* margin-right: 1rem; */
    /* margin-left: 2.7rem; */

    border: none;
    border-radius: 30px;
    position: relative;
    /* left: 1rem; */
    font-family: system-ui;
    font-size: 13px;
  }
  .login-btn svg {
    font-size: 1.2rem;
  }
  .login-btn .text {
    padding-left: 12px;
  }
  .login-btn:hover {
    border: none;
    cursor: pointer;
    background-color: lightgrey;
    /* width: 12rem;
    height: 2.3rem; */
    /* margin: 0 auto; */
    /* border: none; */
    /* border-radius: 30px; */
  }
  .navbar-logo {
    position: relative;
    left: 2rem;
  }
  .top-massege {
    display: flex;
    background: black;
    color: white;
    flex-direction: row;
    position: relative;
    /* left: -25px; */
    top: 0;
    width: 100%;
    height: 2.7rem;
    /* z-index: 5; */
    justify-content: center;
    align-items: center;
    /* padding-left: 15rem; */
    /* padding-right: 15rem; */
    list-style: none;
  }
  .top-massege li {
    font-size: 0.8rem;
  }
  .top-massege-icon {
    margin-right: 1rem;
    margin-left: 4rem;
  }
  .lower-nav-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 4rem;
    align-content: center;
    width: 78%;
  }
  .short-nav {
    /* background-color: #663fc0; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    margin-left: 8.5rem;
  }
  .nav-link {
    font-weight: 900;
    margin-right: 2rem;
    color: black;
    font-size: 0.9rem;
  }

  .loc-store {
    /* background-color: green; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    align-content: center;
    width: 100%;
    height: 100%;
  }
  .loc-store h1 {
    font-size: 1rem;
    padding-right: 2rem;
    margin-bottom: 0;
    margin-left: 1rem;
  }

  .loc-store-small {
    /* background-color: green; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    padding-left: 2.7rem;
    padding-right: 0.5rem;
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 1rem;
  }
  .loc-store-small h1 {
    font-size: 1rem;
    padding-right: 2rem;
    margin-bottom: 0;
    margin-left: 1rem;
  }

  .mystore {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    align-content: center;
    width: 50%;

    height: 3rem;
    border-bottom: 1px solid #efefef;
  }

  .mystore svg,
  .delivery svg {
    font-size: 1.4rem;
  }
  .delivery {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
    width: 50%;
    height: 3rem;
    border-bottom: 1px solid #efefef;
  }
  .delivery:hover {
    cursor: pointer;
    background-color: #efefef;
  }
  .mystore:hover {
    cursor: pointer;
    background-color: #efefef;
  }
  .line {
    display: flex;
    justify-content: flex-end;
    /* color: lightgray; */
    /* font-size: 2px; */
    flex-direction: row;
    border-bottom: 1px solid whitesmoke; //f6f6f6
    /* width: 87vw; */
    /* margin-left: 10vw; */
    padding-top: 1rem;
  }

  @media (max-width: 1600px) {
    .loc-store-small {
      padding-left: 2rem;
    }
  }
  @media (max-width: 1300px) {
    .navbar-logo {
      left: 2rem;
    }
    .btns-container {
      right: 2rem;
    }
  }
 /* @media (min-width: 2460px) {
  .totalProductsIcon {
      left: 14rem !important;
    }
    .totalFavsIcon {
      left: 12rem !important;
    }
 } */
  @media (min-width: 1600px) {
    .navbar-logo {
      left: 3rem;
    }
    .btns-container {
      right: 2rem;
    }
  }

  @media (min-width: 1800px) {
    .navbar-logo {
      left: 7.2vw;
      position: absolute;
      /* top:1rem; */
    }
  }
  @media (min-width: 0px) and (max-width: 700px) {
    .loc-store-small h1 {
      font-size: 1rem;
      /* padding-right: 1rem; */
      margin-bottom: 0;
      /* margin-left: 1rem; */
    }
    .delivery {
      position: relative;
      left: 2.3rem;
    }
    .delivery h1 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 7rem;
    }
    .mystore h1 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 7rem;
    }
    .logo {
      width: 5rem;
    }
    
    .loc-store-small {
      padding-left: 0rem;
      padding-right: 0rem;
      padding-top: 1rem;
    }
    .search-container {
      padding-top: 0.5rem;
      left: 0.8rem;
      /* padding-right: 2rem; */
      /* padding-left: rem; */
    }
    input {
      width: 84vw !important;
      padding-right: 3rem;
    }
    .btns-container {
      gap: 0;
    }
  }
  
  @media (min-width: 700px) and (max-width: 800px) {
    .navbar-logo {
      left: 2rem;
    }

    .btns-container {
      right: 2rem;
    }
    input {
      width: 42vw;
      padding-right: 3rem;
    }
    .search-container {
      left: -0.2rem;
    }
    .btns-container {
      gap: 1.5rem;
    }
    .totalProductsIcon {
      left: 8rem !important;
    }
    .totalFavsIcon {
      left: 4.5rem !important;
    }
  }
  
  @media (min-width: 0px) and (max-width: 1700px) {
    .line {
      /* display: flex; */
      justify-content: center;
      /* flex-direction: row; */
      /* border-bottom: 1px solid grey;//f6f6f6 */
      width: 93vw;
      margin-left: 3vw;
      padding-top: 2rem;
    }

    .logo {
      width: 7rem;
    }
  }
  //x large
  @media (min-width: 2402px) {
    .main-container {
      align-items: center;
    }
    .nav-center {
      width: 78%;
      padding-top: 2rem;
    }
    .short-nav {
      margin-left: 5.5vw;
    }

    .logo {
      /* margin-left: 5vw; */
    }
    .navbar-logo {
      margin-left: -2vw;
    }
  }
  @media (min-width: 1700px) {
    .delivery {
      border-bottom: 0px;
      height: 100%;
      width: fit-content;
    }
    .mystore {
      height: 100%;
      border-bottom: 0px;
      width: fit-content;
    }
    .delivery:hover,
    .mystore:hover {
      background-color: white;
    }
    .line {
      /* display: flex; */
      justify-content: center;
      /* flex-direction: row; */
      /* border-bottom: 1px solid grey;//f6f6f6 */
      width: 90vw;
      margin-left: 7.3vw;
      padding-top: 1rem;
    }
    .toggle-btn {
      font-size: 2rem;
    }
    .logo {
      width: 8rem;
      /* margin-left: -9.5vw; */
    }
    .short-nav {
      margin-left: 5.2vw;
      margin-right: 9vw;
    }
    .lower-nav-container {
      width: 98.7vw;
    }
  }
  @media (min-width: 2400px) {
    .lower-nav-container {
      width: 80vw;
    }
  }
  @media (min-width: 2963px) {
    .short-nav {
      margin-left: 3.6vw;
      margin-right: 4vw;
    }
    .lower-nav-container {
      width: 78%;
    }
    .line {
      width: 78%;
      margin-left: 0vw;
      margin-top: 1rem;
    }
  }
  @media (min-width: 4444px) {
    .short-nav {
      margin-left: 3.1vw;
      margin-right: 4vw;
    }
  }
  /*  */
`;
export default Wrapper;

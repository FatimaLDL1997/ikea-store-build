import styled from "styled-components";

const Wrapper = styled.aside`
  /* display: none; */
  /* @media (min-width: 992px) { */
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--white);
      /* min-height: 100vh; */
      height: 100%;

      width: 30rem;
      margin-left: -30rem;
      transition: var(--transition);
      position: fixed;
      z-index: 99;
      overflow-y: auto;
    }
    .content {
      position: sticky;
      top: 0;
      padding-top: 1rem;
    }
    .content img {
      width: 5.5rem;
      /* height: 2rem; */
      /* font-size: 5.6rem; */
      margin-left: 4.6rem;
      /* padding-right: 4rem; */
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 2.5rem;
    }
    .close-container {
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      /* margin-right: 20px !important; */
      font-size: 27px;
    }
    .close-container:hover {
      background-color: lightgrey;
      transition: ease-in-out all;
    }
    header {
      position: fixed;
      height: 4rem;
      background: white;
      width: 451px;
      top: 0;
    }
    header svg {
      cursor: pointer;
      font-weight: bolder;
      color: black;
    }
    header svg:hover {
      /* background-color: lightgray; */
      border-radius: 50%;
    }
   
    .container {
      padding-top: 3rem;
      width: 100%;
    }
    .login-btn {
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;
      margin-top: 2rem;
      margin-left: 9rem;
      border: none;
      background-color: white;
      width: 18rem;

      height: 3.2rem;
      border: none;
      border-bottom: 2px solid lightgray;
      font-family: system-ui;
      font-size: 14px;
      font-weight: 300;
    }
    .login-btn svg {
      font-size: 1.4rem;
    }
    .login-btn .text {
      padding-left: 12px;
    }
    .login-btn:hover {
      /* border: none; */
      cursor: pointer;
      background-color: lightgrey;
      /* width: 12rem;
      height: 2.3rem; */
      /* margin: 0 auto; */
      border: none;
      /* border-radius: 30px; */
    }
  /* } */
`;
export default Wrapper;

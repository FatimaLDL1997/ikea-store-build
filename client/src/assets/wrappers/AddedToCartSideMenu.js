import styled from "styled-components";

const Wrapper = styled.aside`
  /* display: none; */
  /* @media (min-width: 992px) { */
  display: block;
  box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
  .sidebar-popup-container {
    background: var(--white);
    /* min-height: 100vh; */
    height: 100%;

    width: 30rem;
    margin-right: -30rem;
    transition: var(--transition);
    position: fixed;
    left: auto;
    top: 0;

    right: 0px;
    z-index: 99;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    background-color: white;

  }
  .content {
    position: sticky;
    top: 0;
    background-color: #0058a3;

    padding: 2rem;
  }
  a {
    cursor: pointer;
    color: white;
  }
  .content img {
    width: 5.5rem;
    margin-right: 4.6rem;
  }
  .show-sidebar {
    margin-right: 0rem;
  }
  .items {
    display: flex;
    flex-direction: column;
    gap:1rem;
    padding-top: 2rem;
    
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
    font-style: normal;
    line-height: 48px;
    color: #ffffff;
    margin-bottom: 0;
  }
  h2 {
    font-size: 14px;
    font-weight: 700;
    font-style: normal;
    line-height: 21px;
    color: #ffffff;
    margin-bottom: 0;
  }

  .close-container-box{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    
  }

  .close-container {
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    /* margin-right: 20px !important; */
    font-size: 27px;
    background-color: #ffffff;
  }
  .close-container:hover {
    background-color: lightgrey;
    transition: ease-in-out all;
    cursor: pointer;
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
    width: 100%;
  }

  /* } */
`;
export default Wrapper;

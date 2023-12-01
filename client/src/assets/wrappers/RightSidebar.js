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
    margin-right: -30rem;
    transition: var(--transition);
    position: fixed;
    left: auto;
    right: 0px;
    z-index: 99;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }
  .content {
    position: sticky;
    top: 0;
    padding-top: 8rem;
    background-color: #0058a3;
  }
  .content img {
    width: 5.5rem;
    /* height: 2rem; */
    /* font-size: 5.6rem; */
    margin-right: 4.6rem;
    /* padding-right: 4rem; */
  }
  .show-sidebar {
    margin-right: -2rem;
  }
  header {
    height: 6rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    height: 4rem;
    background: white;
    width: 30rem;
    top: 0;
    padding-right: 4rem;
    padding-top: 3rem;

    background-color: #0058a3;
  }
  .items {
    display: flex;
    flex-direction: column;
  }
  .first-row,
  .second-row,
  .third-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 30rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 0.1px solid #13a7ff;
    padding-left: 2rem;
    padding-right: 4rem;
  }
  .first-row button {
    background-color: #ffffff;
    border: 0px solid #0058a3;
    border-radius: 30px;
    width: 7rem;
    height: 3.5rem;
    font-size: 17px;
    font-weight: 700;
    
  }
  .second-row button {
    background-color: #ffffff;
    border: 0px solid #0058a3;
    border-radius: 50%;
    padding: 1rem;
    width: 3.5rem;
    height: 3.5rem;
    font-size: 25px;
    font-weight: 700;
  }
  .third-row button {
    background-color: #ffffff;
    border: 0px solid #0058a3;
    border-radius: 50%;
    padding: 1rem;
    width: 3.5rem;
    height: 3.5rem;
    font-size: 25px;
    font-weight: 700;
  }
  .first-row button:hover{
    cursor: pointer;
    text-decoration: underline;
    background-color: whitesmoke;
  }
  .second-row button:hover,
  .third-row button:hover {
    cursor: pointer;
    background-color: whitesmoke;

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

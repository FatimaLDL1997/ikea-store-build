import styled from "styled-components";

const Wrapper = styled.aside`
  .submenu {
    display: block;
  }
  .hidden {
    display: none;
  }
  .submenu-content-container {
    margin-left: 43px;
    display: flex;
    flex-direction: row;
    padding-top: 3rem;
  }
  .submenu-content {
    margin-left: 2rem ;
    display: flex;
    flex-direction: column;
  }
  .back-icon {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    cursor: pointer;
    color: black;
    font-size: 1.3rem;
  }
  .back-icon:hover {
    background-color: lightgray;
  }
  .submenu-title {
    margin-left: 2.4rem;
    font-weight: bold;
    font-size: 1.4rem;
    margin-bottom: 0.3rem;
  }
`;
export default Wrapper;

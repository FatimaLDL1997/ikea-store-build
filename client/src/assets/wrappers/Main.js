import styled from "styled-components";

const Wrapper = styled.div`
  //when small on top of each other --> col
  /* .main-content{
    overflow: visible;
  /* } */
  /* .footer {
    flex-direction: column;
    background-color: whitesmoke;
    padding-top: 1rem;
  } */
  
  
  .top-container {
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
  }

  .img-container {
    width: 100%;
    /* height: auto; */

    overflow: hidden;
    background-color: gold;
  }
  .yellow-box {
    background-color: gold;
    padding: 2rem;
    padding-right: 10rem;
  }
  .img-container img {
    width: inherit;
    height: auto;
  }
  .welcome {
    font-size: 50px;
    font-weight: 800;
    font-family: "Roboto", sans-serif;
  }
  .second-heading {
    font-family: "Roboto", sans-serif;
    font-size: 36px;
    font-weight: 800;
    padding-top: 4rem;
  }
  .yellow-box h2 {
    font-size: 24px;
    font-family: "Roboto", "Open Sans", system-ui, sans-serif;
    line-height: 34.8px;
    vertical-align: baseline;
    letter-spacing: -0.1008px;
    word-spacing: 0px;
    font-weight: 700;
  }
  .yellow-box h3 {
    font-size: 1.3rem;
    font-weight: 600;
    font-family: "Roboto", sans-serif;
  }
  .yellow-box h4 {
    font-size: 15px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }
  .shop-sale-btn {
    background-color: black;
    color: white;
    width: fit-content;
    padding: 0.7rem 1.5rem 0.7rem 1.5rem;
    border-radius: 30px;
  }
  .shop-sale-btn:hover {
    background-color: #4e5959;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    .yellow-box {
      padding: 2rem;
    }
    .popup-text {
      font-size: 0.5rem;
    }
  }
  @media (min-width: 1270px) {
    //when big side by side --> row
    .popup-text {
      font-size: 1.5rem;
      width: 50vw;
    }
    .top-container {
      flex-direction: row;
    }
    .yellow-box {
      width: 45%;
      padding: 2rem;
    }
    .img-container {
      display: flex;
      width: 100%;
      height: auto; //??
      overflow: hidden;
    }
    .img-container img {
      height: auto;
      width: inherit;
    }
  }
`;
export default Wrapper;

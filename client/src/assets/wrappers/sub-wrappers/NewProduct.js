import styled from "styled-components";

const Wrapper = styled.div`
  .product-item-container {
    cursor: pointer;
    height: 2rem;
    display: flex;
    flex-direction: column;
    width: 15rem;
    height: 10rem;
    align-items: center;

  }
  .product-item {
    /* background-color: yellow; */
    width: 100%;
    height: 100%;
    padding: 0rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-top: 5rem;
  }
  .img {
    width: 15rem;
    height: auto;
  }
  @media (max-width: 500px) {
    .img {
      width: 10rem;
    }
  }
  .name {
    font-weight: 700;
    color: #111111;
    font-size: 14px;
    line-height: 22px;
    font-family: "Roboto", sans-serif;
  }
  .type-size h4 {
    font-weight: 400;
    color: #484848;
    font-size: 14px;
    line-height: 22px;
    font-family: "Roboto", sans-serif;
  }
  .price {
    font-weight: 700;
    color: #111111;
    font-size: 22px;
    line-height: 20px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    display: flex;
    align-items: flex-end;
  }
  .price span {
    font-weight: 700;
    color: #111111;
    font-size: 14px;
    line-height: 22px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
  }
  .ratings {
    display: flex;
    flex-direction: row;
  }
  span {
    font-weight: 400;
    color: #111111;
    font-size: 12px;
    line-height: 24px;
    text-indent: 4px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
  }
  .add-to-cart {
    width: 2.5rem;
    height: 2.5rem;
    color: white;
    background-color: #0058a3;
    font-size: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    align-items: center;
    cursor: pointer;
  }

  .add-to-fav {
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
  }
  .add-to-fav:hover {
    background-color: lightgray;
    cursor: pointer;
  }
  .add-to-cart:hover {
    background-color: #004784;
  }

  .add-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 6rem;
  }
`;
export default Wrapper;

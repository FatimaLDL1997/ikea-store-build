import styled from "styled-components";

const Wrapper = styled.div`
  .color::first-letter {
    text-transform: uppercase;
  }
  .remove {
    display: flex;
    font-size: 4.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    color: lightblue;
  }
  .remove:hover {
    color: #004784;
    cursor: pointer;
  }

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

  .add-to-cart:hover {
    background-color: #004784;
  }

  .add-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 6rem;
  }

  .container-all-products {
    /* background-color: #76be7a; */
    /* background-color: red; */
    height: 100vh;
    /* width: inherit; */
    /* position: relative; */
    /* margin: 0; */
  }
  .items-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .filter-container .features-btn:hover,
  .filter-container .type-btn:hover,
  .filter-container .category-btn:hover,
  .filter-container .sort-btn:hover,
  .filter-container .size-btn:hover,
  .filter-container .color-btn:hover,
  .filter-container .price-btn:hover {
    background-color: lightgray;
    cursor: pointer;
  }

  @media (min-width: 900px) {
    .items-container {
      justify-content: flex-end;
    }
    .total-items {
      padding-right: 10px;
    }
  }
  @media (max-width: 900px) {
    .filter-container .features-btn,
    .filter-container .type-btn,
    .filter-container .category-btn,
    .filter-container .price-btn {
      display: none;
    }
    .category-container,
    .price-container,
    .features-container,
    .type-container {
      position: fixed;
    }
  }
  @media (max-width: 1000px) {
    .filter-container .type-btn,
    .filter-container .category-btn,
    .filter-container .price-btn {
      display: none;
    }
    .type-container,
    .category-container,
    .price-container {
      position: fixed;
    }
  }
  @media (max-width: 1100px) {
    .filter-container .category-btn,
    .filter-container .price-btn {
      display: none;
    }
    .category-container,
    .price-container {
      position: fixed;
    }
  }

  .up-arrow {
    display: none;
    position: relative;
  }
  .down-arrow {
    display: flex;
    position: relative;
  }
  .filter-container {
    display: flex;
    padding-top: 2rem;
    margin-bottom: 6rem;
    gap: 1rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid lightgrey;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      border: hidden;
      border-radius: 30px;
      background-color: whitesmoke;
      padding: 0.5rem 0.9rem 0.5rem 0.9rem;
      width: 7rem;
      height: 2.5rem;
    }
  }
  .box {
    margin-top: 1rem;
    position: absolute;
    height: 70vh;
    width: 25rem;
    /* top: -2rem; */
    display: none;
    /* left: 7rem; */
    background-color: white;
    /* border: 8px solid lightgray; */
    box-shadow: 0px 0px 15px 0px lightgray;

    border-radius: 20px;
    padding: 2rem;
    overflow-y: auto;
  }
  .title {
    font-size: 40px;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    padding-bottom: 50px;
  }
  .new-products-title {
    font-size: 24px;
    line-height: 32px;
    font-style: normal;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    color: black;
    padding-bottom: 40px;
    padding-top: 80px;
  }
  .display-btns-container {
    display: flex;
    flex-direction: row;
    /* justify-content: flex-end; */
    /* gap: 20px; */
  }

  .product-btn {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    background-color: white;
    cursor: pointer;
    border: 1px solid lightgray;
  }
  .room-btn {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    background-color: white;
    cursor: pointer;
    border: 1px solid lightgray;
  }
  .product-btn:hover {
    border: 1px solid darkgray;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    background-color: white;
    cursor: pointer;
  }
  .room-btn:hover {
    border: 1px solid darkgray;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    background-color: white;
    cursor: pointer;
  }
  .product-btn-active {
    border: 1px solid black;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    background-color: white;
    cursor: pointer;
  }
  .room-btn-active {
    border: 1px solid black;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    background-color: white;
    cursor: pointer;
  }

  .sort-cntr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow-y: hidden;
    font-size: 20px;
    color: black;
    font-style: normal;
    font-family: "Roboto", sans-serif;
    /* line-height: 22px; */
    font-weight: 400;
    padding-bottom: 30px;
  }
  .sort-cntr:first-child {
    padding-top: 20px;
  }
  input {
    width: 35px;
  }
  .checkmark {
    background-color: white;
    position: absolute;
    border-radius: 50%;

    height: 23px;
    right: 38px;
    margin-top: 6px;
    width: 23px;
    z-index: 1;
  }
  .checkmark:hover {
    cursor: pointer;
    background-color: grey !important;
    z-index: 1000;
    width: 15px;
    height: 15px;
    right: 42px;
    margin-top: 11px;
  }
  @media (max-width: 1500px) {
    .product-box {
      justify-content: center !important;
      grid-template-columns: repeat(auto-fill, 207px) !important;
      /* column-gap:19vmax !important; */
    }
  }
  .product-box {
    grid-gap: 5rem;

    display: grid;

    /* flex-direction: row; */
    /* flex-wrap: wrap; */
    gap: 6rem;
    row-gap: 25rem;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* flex: 0 1 auto;  */
  }
  h4,
  h3,
  h2 {
    font-family: "Segoe UI", sans-serif;
    font-style: normal;
    color: black;
  }
  h4 {
    font-size: 36px;
    font-weight: 700;
    line-height: 48px;
  }
  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 35px;
  }
  h2 {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #484848;
  }
`;

export default Wrapper;

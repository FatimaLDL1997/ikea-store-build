import styled from "styled-components";
const Wrapper = styled.div`
  .top-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 50px;
      font-weight: 450;
    }
  }

  .left-side h3 {
    font-size: 20px;
    font-weight: 800;
  }
  .btns-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .delivery-btn,
  .collect-btn {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 48%;
    height: 100px;
    gap: 1rem;
    padding-left: 1rem;
    background-color: white;
    border: 1px solid lightgray;
  }
  .delivery-btn:hover,
  .collect-btn:hover {
    cursor: pointer;
    border: 1px solid darkgrey;
  }
  .collect-delivery-price,
  .total-price {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .line {
    border-bottom: 2px solid black;
  }
  .product-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .left {
    padding: 2rem;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
  .left img {
    width: 70%;
  }
  .right {
    padding-top: 2rem;
    width: min-content;
  }
  .details .availability {
    font-size: 0.8rem;
    align-items: center;
  }
  .right .price {
    font-size: 1rem;
  }
  .img-container {
    display: flex;
    flex-direction: column;
    width: inherit;
    align-items: center;
    width: 50%;
  }
  .details .text {
    font-weight: 800;
  }
  .details {
    padding-left: 2rem;
    width: 100%;
  }
  .dot {
    font-size: 2rem;
    color: #0a8a00;
    margin-left: -0.5rem;
  }
  .availability {
    display: flex;
    flex-direction: row;
  }

  .inc-dec-btn {
    border: 1px solid black;
    border-radius: 50px;
    height: 3rem;
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
  }
  .minus-container,
  .plus-container {
    border-radius: 50px;
    background-color: white;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .minus-container:hover,
  .plus-container:hover {
    border-radius: 50px;
    background-color: lightgrey;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
  }
  .add-to-cart-btn {
    border: 1px solid black;
    border-radius: 30px;
    width: -webkit-fill-available;
    height: 3rem;
    background-color: #0058a3;
    color: white;
  }
  .add-to-cart-btn:hover {
    background-color: #004f93;
    cursor: pointer;
  }
  .amount-delete-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 2rem;
    align-items: center;
    color: grey;
    font-size: 1.3rem;
  }
  .amount-delete-row:hover {
    cursor: pointer;
    color: black;
  }
  .article-container {
    background-color: whitesmoke;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }
  .subtotal-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .subtotal-row h2 {
    font-weight: 800;
    font-size: 30px;
  }
  .subtotal-row h4 {
    font-weight: 300;
    font-size: 25px;
    color: dimgray;
  }
  .continue-to-checkout {
    background-color: #004f93;
    width: 100%;
    border: 1px solid #004f93;
    color: white;
    border-radius: 50px;
    height: 80px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1.5px;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .continue-to-checkout:hover{
    cursor: pointer;
    background-color: #004d8f;

    
  }

  @media (max-width: 600) {
    .inc-dec-btn {
      width: 100%;
    }
  }
`;
export default Wrapper;

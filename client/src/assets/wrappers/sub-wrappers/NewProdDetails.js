import styled from "styled-components";
const Wrapper = styled.div`
  /*  */
  .add-to-fav {
    font-size: 1.5rem;
  }
  .exit-notification:hover {
    cursor: pointer;
    color: lightblue;
  }
  .add-to-fav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    width: 2rem;
    height: 2rem;
    background-color: white;
  }
  .add-to-fav-container:hover {
    background-color: lightgray;
    cursor: pointer;
  }
  .right-side {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .image img {
    width: 85vw;
    margin-bottom: 3rem;
  }

  .container-desktop {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: inherit;
  }
  .details-container {
    /* width: fit-content; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    /* width: 100%; */
    scroll-behavior: smooth;
    /* flex-wrap: nowrap; */
  }
  @media (max-width: 900px) {
    .details-container {
      display: block;
      /* flex-wrap: wrap; */
      /* flex-direction: column; */
      /* justify-content: center; */
      /* align-items: center ; */
    }
  }
  .images-container {
    display: flex;
    width: 50vw;
    flex-wrap: wrap;
  }
  .images-container img {
    width: 25vw;
  }
  .swiper-scrollbar.swiper-scrollbar-horizontal {
    left: var(--swiper-scrollbar-sides-offset, -10%);
  }
  .swiper-pagination.swiper-pagination-fraction.swiper-pagination-horizontal {
    color: black;
    /* position: absolute; */
    left: 45%;
    bottom: -8px;
    /* z-index: 53; */
  }
  .option img {
    width: 3rem;
  }
  .option:first-child {
    border: 2px solid black;
  }
  .options-box {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .options-box button {
    background-color: white;
    border: 2px solid white;
    position: relative;
    /* top: 20px; */
  }
  .options-box button:hover {
    background-color: white;
    border: 2px solid black;
    cursor: pointer;
  }
  .options-box button:visited {
    border: 2px solid black;
  }
  .delivery-btn .text h4,
  .pickup-btn .text h4 {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }
  .delivery-btn .text,
  .pickup-btn .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
    width: 15rem;
  }
  .details-container .add-to-fav-container {
    position: relative;
    z-index: 2;
    top: 2rem;
    left: 95%;
  }
  /* .details-container .add-to-fav svg {
    top: -6rem;
    left: 2rem;
  } */
  .bottom-side .getit-options button {
    padding: 0.5rem;
  }
  .right-side h2,
  .bottom-side h2 {
    font-family: "Roboto" sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
  }
  .getit-type {
    font-family: "Roboto" sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 0px;
  }
  .getit-desc {
    position: relative;
    top: -0.5rem;
    font-weight: 400;
    color: #484848;
    font-size: 14px;
    line-height: 0px;
    font-family: "Roboto", sans-serif;
  }
  .arrow-container {
    display: flex;
    align-items: center;
    height: 3rem;
  }
  .truck-container {
    display: flex;
    align-items: flex-start;
    height: 3rem;
  }
  .delivery-btn:hover,
  .pickup-btn:hover {
    cursor: pointer;
  }
  .bottom-side .add-to-cart-content {
    flex-direction: column;
  }
  .bottom-side .inc-dec-btn {
    width: 100%;
  }
  .articleNum-container {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 2rem;
    h2 {
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
      color: #484848;
      font-family: "roboto", sans-serif;
      margin-bottom: 0.8rem;
    }
    h3 {
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      color: black;
      font-family: "roboto", sans-serif;
    }
  }
  .articleNum {
    background-color: black;
    color: white;
    width: fit-content;
    padding: 0.1rem 1rem 0.1rem 1rem;
  }
  .description {
    width: 90%;
    padding-top: 20px;
    padding-left: 10px;

    font-size: 20px;
    line-height: 32px;
    color: #484848;
    font-weight: 400;
    font-family: "roboto", sans-serif;
  }
  .add-to-cart-content {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    margin-top: 3rem;
  }
  .add-to-cart-content svg:hover {
    cursor: pointer;
  }
  .inc-dec-btn {
    border: 1px solid black;
    border-radius: 50px;
    height: 3rem;
    width: 50%;
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
    justify-content: center;
    cursor: pointer;
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
  .getit-info {
    display: flex;
    flex-direction: row;
  }

  .delivery-btn,
  .pickup-btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    background-color: white;
    border: 2px solid whitesmoke;
    padding: 2rem;
  }
  .delivery-btn svg,
  .pickup-btn svg {
    font-size: 20px;
  }
  .swiper-slider-container {
    /* width: 100%; */
    /* height: 35rem; */
    /* background-color: red; */
    /* padding: 20px; */
  }
  .swiper-slide-active {
    display: flex !important;
    justify-content: center !important;
  }
  .details-item-container {
    cursor: pointer;
    /* height: 2rem; */
    display: flex;
    /* flex-direction: row; */
    /* width: 15rem; */
    /* height: 10rem; */
    /* align-items: center; */
  }
`;
export default Wrapper;

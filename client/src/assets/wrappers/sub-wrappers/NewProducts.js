import styled from "styled-components";

const Wrapper = styled.div`
.title-top{
  padding-top: 3rem;
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
  .product-box {
    /* background-color: gold; */
    /* display: flex;
    flex-direction: row;
    justify-content: space-between; */
    padding-bottom: 10rem;
    z-index: 3;
  }
  .swiper-slider-container {
    /* width: 90%; */
    height: 35rem;
    /* padding: 20px; */

  }
  .top-section-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .see-all-btn{
    border-radius:30px;
    padding: 0.5rem 1rem 0.5rem 1rem;
    background-color: white;
    font-size: 0.8rem;
    font-weight: 550;
  }
  .see-all-btn:hover{
    cursor: pointer;
    border: 3px solid black;
  }
`;
export default Wrapper;

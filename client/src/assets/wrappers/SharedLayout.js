import styled from "styled-components";

const Wrapper = styled.section`
  background-color: white;

  .footer {
    flex-direction: column;
    background-color: whitesmoke;
    padding-top: 1rem;
  }
  @media (min-width: 1200px) {
    .footer {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
  .footer h2 {
    text-align: left;
    margin-left: 1rem;
    margin: 1rem;
    font-size: 0.8rem;
    justify-content: left;
  }
  .footer .footer-options h1 {
    font-size: 0.8rem;
    margin: 1rem;
    margin-bottom: 1.5rem;
    text-align: left;
    padding-right: 0.5rem;
  }
  .footer div {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
  }
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 79vw;
    margin: 0px auto 10rem !important;
    padding: 2rem 0;

    /* height: fit-content; */
    /* background-color: red; */
  }
  @media (max-width: 682px) {
    .dashboard-page {
      width: 80vw !important;
      padding-top: 11rem !important;
      display: flex;
      flex-direction: column;
      align-content: flex-start;
      /* align-items: center; */
    }
  }
  @media (min-width: 1700px) and (max-width: 2400px) {
    .dashboard-page {
      margin-left: 7vw;
      width: 91vw;
    }
  }
  @media (min-width: 2400px) {
    .dashboard-page {
      margin-left: 16vw;
      width: 72vw;
    }
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
      display: inline !important;
    }
  }

  @media (max-width: 1700px) {
    .dashboard-page {
      width: 93vw;
      padding: 0rem 0rem;
    }
  }
`;
export default Wrapper;

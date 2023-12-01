import styled from "styled-components";

const Wrapper = styled.div`
  a {
    text-decoration: underline;
  }
  .sign-in-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
  }
  .top {
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
    padding-top: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  form .logo {
    height: 2rem;
    cursor: auto;
  }
  .first-side {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    gap: 2rem;
    background-color: #0058a3;
    height: auto;
    padding: 1rem;
    width: 40%;
  }
  .second-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: auto;
    gap: 2rem;
    background-color: whitesmoke;
    height: 100%;
    padding: 2rem;
    position: relative;
    top: 2rem;
    width: 60%;
  }
  @media (max-width: 640px) {
    .second-side {
      position: relative;
      top: 1rem;
    }
  }
  .back {
    display: flex;
    flex-direction: row;
    border: 1px solid #0058a3;
    background-color: #0058a3;
    display: flex;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
    font-size: 20px;
  }
  .back:hover {
    cursor: pointer;
  }

  input {
    height: 3.5rem;
    width: 100%;
  }
  .bottom-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem;
    padding-top: 8rem;
    height: 100%;
  }
  footer {
    position: relative;
    bottom: 0rem;
    font-size: 11px;
    line-height: 19px;
    font-weight: 400;
    font-style: normal;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
  }
  footer a {
    text-decoration: underline;
  }
  .bottom-text h1 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    font-style: normal;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
  }
  .bottom-text h1 span {
    color: #e7d319;
    font-family: "Roboto", sans-serif;
  }
  .bottom-text h2 {
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
    font-style: normal;
    color: #ffffff;
  }
  .checkbox-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .checkbox {
    width: 1.5rem;
    border: 2px solid red;
    border-radius: 20px;
  }
  .second-side h1 {
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    font-size: 14px;
    color: #484848;
    font-family: "Roboto", sans-serif;
  }
  .checkbox-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
  .checkbox-row .info svg {
    font-size: 42px;
  }
  .info {
    width: 2rem;
    height: 2rem;
    background-color: lightgray;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .info:hover {
    cursor: pointer;
    background-color: #c6c6c6;
  }
  .checkbox-container h2 {
    font-size: 14px;
    line-height: 22px;
    margin: 0;
    font-weight: 400;
    font-style: normal;
    color: #484848;
    font-family: "Roboto", sans-serif;
  }
  .checkbox:hover {
    cursor: pointer;
    background-color: #004e91;
  }
  .continue-btn {
    background-color: #0058a3;
    height: 4rem;
    border-radius: 50px;
    border: 1px solid #0058a3;
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    line-height: 40px;
  }
  .continue-btn:hover {
    cursor: pointer;
    background-color: #004e91;
  }
  .register-btn {
    background-color: whitesmoke;
    height: 4rem;
    border-radius: 50px;
    border: 1px solid black;
    color: black;
    font-size: 20px;
    font-weight: 500;
    line-height: 40px;
    margin-bottom: 8rem;
  }
  .register-btn:hover {
    cursor: pointer;
    border: 3px solid black;
  }
`;
export default Wrapper;

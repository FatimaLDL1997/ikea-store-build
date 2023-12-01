import styled from "styled-components";

const Wrapper = styled.div`
color: #4e5959;
input{
    text-indent: 6px;
    color: black;
}
  a {
    text-decoration: underline;
    cursor: pointer;
  }
  .sign-in-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: inherit;
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
  .instruction-label {
    position: relative;
    top: -2rem;

  }
  .first-side {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    gap: 2rem;
    background-color: white;
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
    background-color: white;
    height: 100%;
    padding: 2rem;
    position: relative;
    /* top: 2rem; */
    width: 60%;
    margin-top: 0 !important;
  }

  .back {
    display: flex;
    flex-direction: row;
    border: 0px solid #0058a3;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 20px;
  }
  .back:hover {
    cursor: pointer;
  }

  input {
    height: 3.5rem;
    width: 100%;
  }
  .signup-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .signup-container img {
    width: 100%;
  }
  .signupLarge-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: -25rem;
  }
  .signupLarge-container img {
    width: 100%;
  }
  .bottom-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    /* padding-top: 8rem; */
    height: 100%;
  }
  footer {
    position: relative;
    bottom: 0rem;
    font-size: 11px;
    line-height: 19px;
    font-weight: 400;
    font-style: normal;
    color: black;
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
    color: black;
    font-family: "Roboto", sans-serif;
  }
  .bottom-text h1 span {
    color: #0258a3;
    font-family: "Roboto", sans-serif;
  }
  .bottom-text h2 {
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
    font-style: normal;
    color: black;
  }
  .checkboxes-box {
    display: flex;
    flex-direction: column;
  }

  .checkbox-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin: 0;
  }
  .checkbox-row-indented {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: 4rem;
    gap: 2rem;
  }
  .checkbox {
    width: 30px;
  }
  .second-side h1 {
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    font-size: 14px;
    color: #484848;
    font-family: "Roboto", sans-serif;
  }
  @media (max-width: 640px) {
    .second-side h2 {
      padding-top: 0 !important;
    }
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
  .checkbox-row h2 {
    font-size: 14px;
    line-height: 22px;
    margin: 0;
    font-weight: 400;
    font-style: normal;
    color: #484848;
    font-family: "Roboto", sans-serif;
  }
  .checkbox-row-indented h2 {
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
  .register-btn {
    background-color: black;
    height: 4rem;
    border: none;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 500;
    line-height: 40px;
    margin-bottom: 8rem;
    color: white;
  }
  .register-btn:hover {
    cursor: pointer;
    background-color: #323232;
  }
`;
export default Wrapper;

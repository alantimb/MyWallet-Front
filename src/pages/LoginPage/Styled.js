import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginPageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 20% auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Saira Stencil One", cursive;
    color: #ffffff;
    font-size: 32px;
    line-height: 50.4px;
    font-weight: 400;
    margin-bottom: 25px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      width: 330px;
      height: 60px;
      padding: 18px 15px;
      margin-bottom: 13px;

      color: #000000;
      background-color: #ffffff;
      border: none;
      border-radius: 5px;

      font-family: "Raleway", sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 23.5px;
    }

    button {
      width: 330px;
      height: 50px;
      align-items: center;
      margin-bottom: 35px;

      color: #ffffff;
      background-color: #a328d6;
      border: none;
      border-radius: 5px;

      font-family: "Raleway", sans-serif;
      font-weight: 700;
      font-size: 20px;
      line-height: 23.5px;

      &:hover {
        cursor: pointer;
      }
    }

    p {
      color: #ffffff;
      font-family: "Raleway", sans-serif;
      font-weight: 700;
      font-size: 15px;
      line-height: 17.6px;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
        opacity: 50%;
        color: blue;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 17.6px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    opacity: 50%;
    color: blue;
  }
`;

export {LoginPageContainer, StyledLink};

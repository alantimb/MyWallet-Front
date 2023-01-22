import styled from "styled-components";

const NewExitPageContainer = styled.div`
  width: auto;
  margin: 7.5% 5%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    color: #ffffff;
    font-family: "Raleway", sans-serif;
    font-size: 32px;
    line-height: 30.52px;
    font-weight: 700;
    margin-bottom: 26px;
  }

  form {
    width: 100%;
    height: 300px;
    margin-top: 25px;

    display: flex;
    flex-direction: column;

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
  }
`;

export { NewExitPageContainer };

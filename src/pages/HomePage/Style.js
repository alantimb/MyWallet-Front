import styled from "styled-components";

const HomePageContainer = styled.div`
  width: auto;
  height: 100%;
  margin: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegisterContainer = styled.div`
  width: 332.5px;
  height: 445px;
  background-color: #ffffff;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #868686;
    background-color: #ffffff;
    text-align: center;
  }
`;

const HomeNavBar = styled.div`
  width: 100%;
  color: #ffffff;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h1 {
    font-family: "Raleway", sans-serif;
    font-size: 32px;
    line-height: 30.52px;
    font-weight: 700;
    margin-bottom: 26px;
  }
`;

const HomeFooter = styled.div`
  width: 100%;
  margin-top: 13px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  div {
    width: 157.5px;
    height: 115px;
    border-radius: 5px;
    background-color: #a328d6;
    color: #ffffff;
    font-family: "Raleway", sans-serif;
    font-size: 17px;
    line-height: 20px;
    font-weight: 700;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-left: 2%;
  }
`;

export { HomePageContainer, RegisterContainer, HomeNavBar, HomeFooter };

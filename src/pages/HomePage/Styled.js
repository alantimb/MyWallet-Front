import styled from "styled-components";
import { Link } from "react-router-dom";

const HomePageContainer = styled.div`
  width: auto;
  height: 100%;
  margin: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecordsContainer = styled.div`
  width: 330px;
  height: 445px;
  background-color: #ffffff;
  border-radius: 5px;
`;

const NoRecordsContainer = styled.div`
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

const RecordsList = styled.ul`
  width: 332.5px;
  height: 445px;
  background-color: #ffffff;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  line-height: 18.78px;
  font-weight: 400;
  border-radius: 5px;
  padding: 10% 5%;

  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: center; */

  section {
    background-color: #ffffff;
    color: #000000;

    display: flex;
    flex-direction: row;
  }

  section li {
    background-color: #ffffff;
    color: #000000;
    width: 100%;

    display: flex;
    justify-content: space-between;
    margin-bottom: 5%;
  }

  section span {
    background-color: #ffffff;
    color: #c6c6c6;
    margin-right: 7.5px;
  }
`;

const RecordValue = styled.div`
  background-color: #ffffff;
  color: ${(props) => (props.color === "green" ? "#03ac00" : "#C70000")};
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

  a {
    color: #ffffff;

    &:hover {
      cursor: pointer;
      opacity: 50%;
    }
  }
`;

const HomeFooter = styled.div`
  width: 100%;
  margin-top: 13px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  a {
    width: 157.5px;
    height: 115px;
    border-radius: 5px;
    background-color: #a328d6;
    color: #ffffff;
    font-family: "Raleway", sans-serif;
    font-size: 17px;
    line-height: 20px;
    font-weight: 700;
    text-decoration: none;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-left: 2%;

    &:hover {
      cursor: pointer;
      opacity: 65%;
    }
  }
`;

export {
  HomePageContainer,
  RecordsContainer,
  RecordsList,
  NoRecordsContainer,
  RecordValue,
  HomeNavBar,
  HomeFooter,
};

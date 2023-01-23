import {
  HomePageContainer,
  RecordsContainer,
  RecordValue,
  RecordsList,
  HomeNavBar,
  HomeFooter,
  NoRecordsContainer,
} from "./Styled";
import { Link } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import apiRecords from "../../services/apiRecords";
import { ThreeDots } from "react-loader-spinner";

export default function HomePage() {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false); // MUDAR APÓS ATUALIZAR O BACKEND
  const [records, setRecords] = useState([4]);

  useEffect(() => {}, []);

  function getRecordsList() {
    apiRecords
      .getRecords(user.token)
      .then((res) => {
        setIsLoading(false);
        setRecords(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data.message);
      });
  }

  return (
    <HomePageContainer>
      <HomeNavBar>
        <h1>Olá, {user.name}</h1>
        <Link to="/">
          <RiLogoutBoxRLine size={30} />
        </Link>
      </HomeNavBar>

      <RecordsContainer>
        {isLoading ? (
          <ThreeDots
            width={80}
            height={40}
            color={"#868686"}
            wrapperStyle={{ "background-color": "#FFFFFF" }}
          />
        ) : records.length === 0 ? (
          <NoRecordsContainer>
            <p>
              Não há registros de
              <br /> entrada ou saída
            </p>
          </NoRecordsContainer>
        ) : (
          <RecordsList>
            <section>
              <span>30/11</span>
              <li>
                OI
                <RecordValue color={"green"}>500,00</RecordValue>
              </li>
            </section>
            <section>
              <span>27/04</span>
              <li>
                arroz
                <RecordValue color={"red"}>47,00</RecordValue>
              </li>
            </section>
          </RecordsList>
        )}
      </RecordsContainer>

      <HomeFooter>
        <Link to="/nova-entrada">
          <AiOutlinePlusCircle size={25} />
          Nova
          <br />
          entrada
        </Link>

        <Link to="/nova-saida">
          <AiOutlineMinusCircle size={25} />
          Nova
          <br />
          saída
        </Link>
      </HomeFooter>
    </HomePageContainer>
  );
}

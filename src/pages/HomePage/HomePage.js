import {
  HomePageContainer,
  RegisterContainer,
  HomeNavBar,
  HomeFooter,
} from "./Styled";
import { Link } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function HomePage() {
  return (
    <HomePageContainer>
      <HomeNavBar>
        <h1>Olá, Fulano</h1>
        <Link to="/">
          <RiLogoutBoxRLine size={30} />
        </Link>
      </HomeNavBar>

      <RegisterContainer>
        <p>
          Não há registros de
          <br /> entrada ou saída
        </p>
      </RegisterContainer>

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

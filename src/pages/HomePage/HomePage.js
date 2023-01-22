import {
  HomePageContainer,
  RegisterContainer,
  HomeNavBar,
  HomeFooter,
} from "./Styled";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function HomePage() {
  return (
    <HomePageContainer>
      <HomeNavBar>
        <h1>Olá, Fulano</h1>
        <RiLogoutBoxRLine size={30} />
      </HomeNavBar>

      <RegisterContainer>
        <p>
          Não há registros de
          <br /> entrada ou saída
        </p>
      </RegisterContainer>

      <HomeFooter>
        <div>
          <AiOutlinePlusCircle size={25} />
          Nova
          <br />
          entrada
        </div>

        <div>
          <AiOutlineMinusCircle size={25} />
          Nova
          <br />
          saída
        </div>
      </HomeFooter>
    </HomePageContainer>
  );
}

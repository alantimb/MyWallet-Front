import { useNavigate } from "react-router-dom";
import { NewExitPageContainer } from "./Styled";

export default function NewExitPage() {
  const navigate = useNavigate();

  function handleExit(event) {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <NewExitPageContainer>
      <h1>Nova saída</h1>
      <form onSubmit={handleExit}>
        <input type="text" name="value" placeholder="Valor" />
        <input type="text" name="description" placeholder="Descrição" />
        <button>Salvar saída</button>
      </form>
    </NewExitPageContainer>
  );
}

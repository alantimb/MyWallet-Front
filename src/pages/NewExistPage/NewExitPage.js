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
        <input
          data-test="registry-amount-input"
          type="text"
          name="value"
          placeholder="Valor"
          required
        />
        <input
          data-test="registry-name-input"
          type="text"
          name="description"
          placeholder="Descrição"
          required
        />
        <button data-test="registry-save">Salvar saída</button>
      </form>
    </NewExitPageContainer>
  );
}

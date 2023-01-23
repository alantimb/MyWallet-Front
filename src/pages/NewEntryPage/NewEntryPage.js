import { useNavigate } from "react-router-dom";
import { NewEntryPageContainer } from "./Styled";

export default function NewEntryPage() {
  const navigate = useNavigate();

  function handleEntry(event) {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <NewEntryPageContainer>
      <h1>Nova Entrada</h1>
      <form onSubmit={handleEntry}>
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
        <button data-test="registry-save">Salvar entrada</button>
      </form>
    </NewEntryPageContainer>
  );
}

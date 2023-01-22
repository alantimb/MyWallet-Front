import { NewExitPageContainer } from "./Styled";

export default function NewExitPage() {
  return (
    <NewExitPageContainer>
      <h1>Nova saída</h1>
      <form>
        <input type="text" name="value" placeholder="Valor" />
        <input type="text" name="description" placeholder="Descrição" />
        <button>Salvar saída</button>
      </form>
    </NewExitPageContainer>
  );
}

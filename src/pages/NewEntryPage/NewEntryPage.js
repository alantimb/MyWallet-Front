import { NewEntryPageContainer } from "./Styled";

export default function NewEntryPage() {
  return (
    <NewEntryPageContainer>
      <h1>Nova Entrada</h1>
      <form>
        <input type="text" name="value" placeholder="Valor" />
        <input type="text" name="description" placeholder="Descrição" />
        <button>Salvar entrada</button>
      </form>
    </NewEntryPageContainer>
  );
}

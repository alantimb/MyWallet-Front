import RegistrationPageContainer from "./Style";

export default function RegistrationPage() {
  return (
    <RegistrationPageContainer>
      <h1>MyWallet</h1>
      <form>
        <input type="text" name="name" placeholder="Nome" />
        <input type="text" name="email" placeholder="E-mail" />
        <input type="text" name="password" placeholder="Senha" />
        <input type="text" name="password" placeholder="Confirme a senha" />
        <button>Cadastrar</button>
        <p>Já tem uma conta? Entre agora!</p>
      </form>
    </RegistrationPageContainer>
  );
}

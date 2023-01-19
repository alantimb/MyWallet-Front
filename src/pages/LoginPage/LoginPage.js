import LoginPageContainer from "./Style";

export default function LoginPage() {
  return (
    <LoginPageContainer>
      <h1>MyWallet</h1>
      <form>
        <input type="text" name="email" placeholder="E-mail" />
        <input type="text" name="password" placeholder="Senha" />
        <button>Entrar</button>
        <p>Primeira vez? Cadastre-se!</p>
      </form>
    </LoginPageContainer>
  );
}

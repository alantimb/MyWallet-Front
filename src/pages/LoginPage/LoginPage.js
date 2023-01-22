import LoginPageContainer from "./Styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function submitData(event) {
    event.preventDefault();
    console.log(form.email); //OK
    console.log(form.password); // OK
  }

  return (
    <LoginPageContainer>
      <h1>MyWallet</h1>
      <form onSubmit={submitData}>
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="E-mail"
          onChange={handleForm}
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          placeholder="Senha"
          onChange={handleForm}
          required
        />
        <button type="submit">Entrar</button>
        <p>Primeira vez? Cadastre-se!</p>
      </form>
    </LoginPageContainer>
  );
}

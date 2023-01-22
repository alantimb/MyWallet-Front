import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpPageContainer, StyledLink } from "./Styled";

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
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
    console.log(form.email);
    console.log(form.password);
    console.log(form.name);
    navigate("/");
  }

  return (
    <SignUpPageContainer>
      <h1>MyWallet</h1>
      <form onSubmit={submitData}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Nome"
          onChange={handleForm}
          required
        />
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
          // id="password"
          placeholder="Senha"
          onChange={handleForm}
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          // id="confirm_password"
          placeholder="Confirme a senha"
          // onKeyUp={confirmPassword}
          onChange={handleForm}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>

      <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
    </SignUpPageContainer>
  );
}

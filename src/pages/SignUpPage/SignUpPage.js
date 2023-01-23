import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiAuth from "../../services/apiAuth";
import { SignUpPageContainer, StyledLink } from "./Styled";
import { ThreeDots } from "react-loader-spinner";

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function submitData(event) {
    event.preventDefault();
    setIsLoading(true);
    if (form.password !== confirmPassword) {
      setForm({
        name: "",
        email: "",
        password: "",
      });
      setConfirmPassword("");
      setIsLoading(false);
      return alert("Senhas diferentes!");
    }

    apiAuth
      .signUp(form)
      .then((res) => {
        setIsLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.response.data.message);
      });
  }

  return (
    <SignUpPageContainer>
      <h1>MyWallet</h1>
      <form onSubmit={submitData}>
        <input
          type="text"
          name="name"
          value={form.name}
          disabled={isLoading}
          placeholder="Nome"
          onChange={handleForm}
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          disabled={isLoading}
          placeholder="E-mail"
          onChange={handleForm}
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          disabled={isLoading}
          placeholder="Senha"
          onChange={handleForm}
          required
        />
        <input
          type="password"
          name="password"
          value={confirmPassword}
          disabled={isLoading}
          placeholder="Confirme a senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? (
            <ThreeDots
              width={80}
              height={40}
              color={"#FFFFFF"}
              wrapperStyle={{ "background-color": "#a328d6" }}
            />
          ) : (
            "Cadastrar"
          )}
        </button>
      </form>

      <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
    </SignUpPageContainer>
  );
}

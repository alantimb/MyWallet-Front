import { LoginPageContainer, StyledLink } from "./Styled";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiAuth from "../../services/apiAuth";
import { UserContext } from "../../contexts/UserContext";
import { ThreeDots } from "react-loader-spinner";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useContext(UserContext);
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

    apiAuth
      .login(form)
      .then((res) => {
        setIsLoading(false);
        const { id, name, token } = res.data;
        setUser({ id, name, token });
        localStorage.setItem("user", JSON.stringify({ id, name, token }));
        navigate("/home");
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data.message);
      });
    navigate("/home");
  }

  return (
    <LoginPageContainer>
      <h1>MyWallet</h1>
      <form onSubmit={submitData}>
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
        <button type="submit" disabled={isLoading}>
          {isLoading ? (
            <ThreeDots
              width={80}
              height={40}
              color={"#FFFFFF"}
              wrapperStyle={{"background-color": "#a328d6"}}
            />
          ) : (
            "Entrar"
          )}
        </button>
      </form>

      <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
    </LoginPageContainer>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import HomePage from "./pages/HomePage/HomePage";
import NewEntryPage from "./pages/NewEntryPage/NewEntryPage";
import NewExitPage from "./pages/NewExistPage/NewExitPage";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegistrationPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/nova-entrada" element={<NewEntryPage />} />
        <Route path="/nova-saida" element={<NewExitPage />} />
      </Routes>
    </BrowserRouter>
  );
}

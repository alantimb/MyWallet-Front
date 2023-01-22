import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HomePage from "./pages/HomePage/HomePage";
import NewEntryPage from "./pages/NewEntryPage/NewEntryPage";
import NewExitPage from "./pages/NewExistPage/NewExitPage";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/nova-entrada" element={<NewEntryPage />} />
        <Route path="/nova-saida" element={<NewExitPage />} />
      </Routes>
    </BrowserRouter>
  );
}

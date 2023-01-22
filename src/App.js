import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HomePage from "./pages/HomePage/HomePage";
import NewEntryPage from "./pages/NewEntryPage/NewEntryPage";
import NewExitPage from "./pages/NewExistPage/NewExitPage";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

export default function App() {
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/nova-entrada" element={<NewEntryPage />} />
          <Route path="/nova-saida" element={<NewExitPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

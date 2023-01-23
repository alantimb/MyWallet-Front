import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userName, setUserName] = useState("");
  const [userToken, setUserToken] = useState("");
  return (
    <UserContext.Provider value={{ userName, setUserName, userToken, setUserToken }}>
      {children}
    </UserContext.Provider>
  );
}

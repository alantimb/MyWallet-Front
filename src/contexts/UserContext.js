import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({
  name: null,
  item: null,
  token: null,
});

export default function UserProvider({ children }) {
    const [user, setUser] = useState({})
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

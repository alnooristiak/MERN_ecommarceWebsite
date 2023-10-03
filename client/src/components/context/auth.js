import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parsData.user,
        token: parsData.token,
      });
    }
  }, [auth]);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth, AuthProvider };

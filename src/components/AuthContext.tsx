import React, { createContext, useState, useEffect } from "react";

interface AuthContextProps {
  loggedIn: boolean;
  username: string;
  password: string;
  token: string | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  loggedIn: false,
  username: "",
  password: "",
  token: null,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    if (savedToken && savedUsername && savedPassword) {
      setLoggedIn(true);
      setUsername(savedUsername);
      setPassword(savedPassword);
      setToken(savedToken);
    }
  }, []);

  const login = (username: string, password: string) => {
    if (!username && !password) {
      alert("Please enter all the fields");
      return;
    }
    // Perform login authentication
    const myToken: string = "kmy_secret_key";

    // Save token, username, and password to localStorage
    localStorage.setItem("token", myToken);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Update login status and user details
    setLoggedIn(true);
    setUsername(username);
    setPassword(password);
    setToken(myToken);
  };

  const logout = () => {
    // Remove token, username, and password from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    // Update login status and user details
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ loggedIn, username, password, token, login, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

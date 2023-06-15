import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
import classes from "./Loginpage.module.css";
const LoginForm: React.FC = () => {
  const { loggedIn, username, login, logout } = useContext(AuthContext);
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleLogin = () => {
    // Call the login function from the AuthContext with input values
    login(inputUsername, inputPassword);
  };

  const handleLogout = () => {
    // Call the logout function from the AuthContext
    logout();
  };

  if (loggedIn) {
    return (
      <div>
        <h2>Welcome, {username}!</h2>
        <button onClick={handleLogout}>Logout</button>
        <NewTodo />
        <Todos />
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <h1>Login Form</h1>
      <form>
        <div className={classes.formgroup}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
          />
        </div>
        <div className={classes.formgroup}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} className={classes.btn}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

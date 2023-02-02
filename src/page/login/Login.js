import React, { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const [error, setError] = useState(false);
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="right">
          <span className="title">Millennia Movie</span>
          <form onSubmit={handleLogin}>
            <div className="loginInput">
              <input
                type="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="loginInput">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
            <button onClick={() => navigate("/register")}>Register</button>
            {error && <span>Wrong Email or Password!</span>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

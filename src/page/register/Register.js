import React, { useState } from "react";
import "./register.scss";
import { useNavigate } from "react-router-dom";

function Register() {
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="register">
      <div className="loginContainer">
        <div className="right">
          <span className="title">Millennia Movie</span>
          <form>
            <div className="loginInput">
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="loginInput">
              <input
                type="text"
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
            <div className="loginInput">
              <input
                type="password"
                placeholder="Retype Password"
                onChange={(e) => setRetypePassword(e.target.value)}
              />
            </div>
            <button onClick={() => navigate("/")}>Submit</button>
            <button onClick={() => navigate("/")}>Cancel</button>
            {error && <span>Wrong Email or Password!</span>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

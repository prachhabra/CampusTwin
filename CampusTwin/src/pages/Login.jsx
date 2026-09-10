import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();
  const { login } = useAuth();

  const [role, setRole] = useState("student");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    login(email, password, role);

    if (role === "admin") {
      navigate("/admin");
    } 
    else if (role === "teacher") {
      navigate("/teacher");
    } 
    else {
      navigate("/student");
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <div className="logo-circle">
          🏫
        </div>

        <h1>
          CampusTwin
        </h1>

        <p className="auth-subtitle">
          Welcome Back!
        </p>

        <form onSubmit={handleLogin}>

          <label>
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>
            Login As
          </label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">
              Student
            </option>

            <option value="teacher">
              Teacher
            </option>

            <option value="admin">
              Admin
            </option>
          </select>

          <button
            className="primary-btn"
            type="submit"
          >
            Login
          </button>

        </form>

        <p className="register-text">

          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;
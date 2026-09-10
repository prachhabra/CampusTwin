import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const handleRegister = (e) => {

    e.preventDefault();

    alert("Registration successful!");

    navigate("/");
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <div className="logo-circle">
          C
        </div>

        <h1>
          Create Account
        </h1>

        <p className="auth-subtitle">
          Join CampusTwin
        </p>

        <form onSubmit={handleRegister}>

          <label>
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter Full Name"
            required
          />

          <label>
            Email
          </label>

          <input
            type="email"
            placeholder="Enter Email"
            required
          />

          <label>
            Roll Number
          </label>

          <input
            type="text"
            placeholder="Enter Roll Number"
            required
          />

          <label>
            Department
          </label>

          <select>
            <option>CSE</option>
            <option>BCA</option>
            <option>BPHARM</option>
            <option>NURSING</option>
          </select>

          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter Password"
            required
          />

          <button
            className="primary-btn"
            type="submit"
          >
            Create Account
          </button>

        </form>

        <p className="register-text">

          Already Have an Account?

          {" "}

          <Link to="/">
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;
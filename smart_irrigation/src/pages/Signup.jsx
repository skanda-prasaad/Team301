import { useNavigate } from "react-router-dom";
import "../Styles/Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="signup-page">
      <div className="form">
        <form className="signup_form">
          <h3>Sign Up</h3>

          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            placeholder="Enter your first name"
            required
          />

          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            placeholder="Enter your last name"
            required
          />

          <label htmlFor="signup-email">Email:</label>
          <input
            type="email"
            id="signup-email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="signup-password">Password:</label>
          <input
            type="password"
            id="signup-password"
            placeholder="Create a password"
            required
          />

          {/* Navigation button to Login */}
          <button type="button" onClick={() => navigate("/login")}>
            Already have an account? Login
          </button>

          <div className="submit">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
            <button type="button" className="btn btn-secondary">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form className="signup-form">
        <div className="input-group">
          <label for="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
        </div>
        <div className="input-group">
          <label for="lastName">Last Name:</label>
          <input type="text" name="lastName" placeholder="Last Name" required />
        </div>
        <div className="input-group">
          <label for="email">Email:</label>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="input-group">
          <label for="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="login-link">
        Already registered? 
        <Link to="/login">Login Here</Link>
      </div>
    </div>
  );
};

export default Signup;

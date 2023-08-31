import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

async function signUp(data) {
  try {
    const response = await fetch("http://ecommerce.muersolutions.com/api/v1/user/signup", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (error) {
    return console.error("Error:", error);
  }
}


const Signup = () => {

const [firstName, setFirstName]=useState("")
const [lastName, setLastName]=useState("")
const [email, setEmail]=useState("")
const [password, setPassword]=useState("")



function handleSignUp(event) {
  event.preventDefault();

  const userData = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password
  };

  signUp(userData)
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp} className="signup-form">
        <div className="input-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}
            name="firstName"
            placeholder="First Name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}name="lastName" placeholder="Last Name" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}name="email" placeholder="Email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
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

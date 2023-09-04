import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


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
  event.target.reset();

  fetch('http://ecommerce.muersolutions.com/api/v1/user/signup', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })
  .then(r=>r.json())
  .then(data =>{
    console.log(data);
    setFirstName(""); 
    setLastName("");
    setEmail("");
    setPassword("");
  })
  .then(alert("User Registered Successfully"))
  .catch(e=>console.log(e))
}


  return (
    <div className="form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp} className="form">
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

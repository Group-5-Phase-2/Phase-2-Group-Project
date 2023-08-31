import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="form">
      <h2>Log In</h2>
        <form className="form">
          <div className="input-group">
            <label >Username</label>
            <input type="text" placeholder="Enter Username" required/>
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
            <button type="submit">Login</button><br />
        </form>
       <div className="link">
        <div className="login-link">
          <p>Don't have an account?</p>
          <Link to ="/signup">Sign Up Here</Link>
       </div>
       </div>
    </div>
  );
}

export default Login;
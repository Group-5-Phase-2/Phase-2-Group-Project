import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
        <form className="transparent-form">
            <label >Username</label>
            <input type="text" placeholder="Enter Username" required/>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
            <button  className ="submit-button" type="submit">Login</button><br />
        </form>
       <div className="link">
       <Link to ="/signup">Sign Up Here</Link>
       </div>
    </div>
  );
}

export default Login;
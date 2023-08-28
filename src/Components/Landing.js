import { Link, Outlet } from "react-router-dom";


function Landing(){
    return (
        <div>
             <div className="navbar">
                <h1>E-Commerce App</h1>
                <nav className="nav-items">
                    <button><Link to='/cart'>Cart</Link></button>
                    <button><Link to='/login'>Login</Link></button>
                    <button><Link to='/signup'>Signup</Link></button>
                </nav>
            </div> 
            <Outlet></Outlet> 
        </div>
    )
}
export default Landing
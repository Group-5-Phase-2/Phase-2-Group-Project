import { Link, Outlet } from "react-router-dom";
import {AiOutlineShoppingCart, AiFillHome, AiOutlineLogin} from 'react-icons/ai'


function Landing(){
    return (
        <div>
             <div className="navbar">
                <h1 className="landing-header">E-Commerce App</h1>
                <nav className="nav-items">
                    <button><Link to='/home'><AiFillHome/></Link><span className="hidden">Home</span></button>
                    <button><Link to='/cart'><AiOutlineShoppingCart/></Link><span className="hidden">Cart</span></button>
                    <button><Link to='/login'><AiOutlineLogin/></Link><span className="hidden">Log in</span></button>
                    {/* <button><Link to='/signup'>Signup</Link></button> */}
                </nav>
            </div> 
            <Outlet></Outlet> 
        </div>
    )
}
export default Landing
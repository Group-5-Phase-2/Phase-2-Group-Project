import { Link } from "react-router-dom"

function NotFound (){
    return(
        <div>
            <h1>404 error</h1>
            <p>page not found</p>
            <button><Link to='/'>Go back to home</Link></button>
        </div>
    )
}
export default NotFound
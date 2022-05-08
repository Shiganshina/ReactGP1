import { Link } from "react-router-dom";

const Error = () => {
    return ( 
        <div className="not-found">
            <h2>404 Not Found</h2>
            <Link to='/'>HomePage</Link>
        </div>
    );
}
 
export default Error;
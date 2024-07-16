import { Link } from "react-router-dom";
import './index.css'

export function Navs(){
    return(
        <nav>
        <ul className="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to ="/destination">Destination</Link></li>
        </ul>
        </nav>
    )
}
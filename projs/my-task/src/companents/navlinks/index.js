import { Link } from "react-router-dom"
export function Navlink (){
    return(
        <>
       <ul>
                <li><Link to="/">FoodRecipe</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/favorite">Favorite</Link></li>
       </ul>
    </>
    )
}
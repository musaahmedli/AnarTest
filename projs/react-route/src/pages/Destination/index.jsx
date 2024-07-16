import { Link } from "react-router-dom"
export function Destination() {
    return (
        <>
            <ul>
                <li><Link to="Azerbaijan">Azerbaijan</Link></li>
                <li><Link to="Italy">Italy</Link></li>
                <li><Link to="Turkiye">Turkiye</Link></li>
            </ul>
        </>
    )
}
import { useNavigate, useParams } from "react-router-dom"


export function Country() {
    const params = useParams();
    const navigate = useNavigate();
    console.log(params);
    return (
        <>
            <h1>Destination-{params.country}</h1>
            <button onClick={()=>{navigate("/destination")}}>Back</button>
        </>
    )
}
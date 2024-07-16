import { Message } from "./Message";
import { Priority } from "./Priority";

export function DetailsSection(){
    return(
        <div>
            <Priority/>
            <Message/>
        </div>
    )
}
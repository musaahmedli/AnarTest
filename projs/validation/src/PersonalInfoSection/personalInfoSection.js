import { Fullname } from "./Fullname";
import { Gender } from "./Gender";
import { Phone } from "./Phone";

export function PersonalInfoSection(){
    return(
        <>
        <Fullname/>
        <Phone/>
        <Gender/>
        </>
    )
}



// import { useRef } from "react"
// import { Fullname } from "./Fullname"
// import { Gender } from "./Gender"
// import { Phone } from "./Phone"

// export const PersonalInfoSection = () => {
//     return (
//         <>
//         <Fullname/>
//         <Phone  />
//         <Gender/>
//         </>
//     )
// }
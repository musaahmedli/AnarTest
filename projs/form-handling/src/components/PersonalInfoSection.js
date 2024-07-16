import { Fullname } from "./Fullname"
import { Gender } from "./Gender"
import { Phone } from "./Phone"

export const PersonalInfoSection = () => {
    return (
        <>
            <Fullname />
            <Phone />
            <Gender />
        </>
    )
}
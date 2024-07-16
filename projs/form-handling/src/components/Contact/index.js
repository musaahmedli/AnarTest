import "./contact.css"
// import { Phone } from "../Phone";
// import { Fullname } from "../Fullname";
import { PersonalInfoSection } from "../PersonalInfoSection";

export function Contact() {
    // const phoneRef = useRef(null)
    // console.log("Contact");
    const formHandler = (e) => {
        e.preventDefault();
        // console.log(fullName, phone);
        // const form = new FormData(e.target);
        // for (const [key, value] of form) {
        //     console.log(`${key}: ${value}`);
        // }
    }

    // const uploaderClickHandler = () => {
    //     fileRef.current.click();
    // }
    // const uploaderChangeHandler = (e) => {
    //     setFile(e.target.files[0])
    //     // console.log(data.current);
    // }
    // useEffect(() => {
    //     phoneRef.current.focus();
    //     data.current = "Eli"
    // }, [])
    return (
        <>
            <h1>Contact Form</h1>
            <form onSubmit={formHandler}>
                <PersonalInfoSection />
                <div className="form--item">
                    <label htmlFor="priority">Priority</label>
                    <select name="priority" id="priority">
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="form--item">
                    <label htmlFor="message">Text</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>

                <input value="submit " type="submit" />
            </form>
        </>
    )
}
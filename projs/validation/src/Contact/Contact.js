import { PersonalInfoSection } from "../PersonalInfoSection/personalInfoSection";
import { DetailsSection } from "../DetailsSection";
import { DevTool } from "@hookform/devtools";
import { FormProvider, useForm } from "react-hook-form";
import "../Contact/Contact.css";
export function Contact() {
  const methods = useForm({
    mode: "all",
    defaultValues: {
      fullname: {
        name: "",
        surname: "",
      },
      phone: "",
      gender: "",
      texts: [""],
    },
  });
  const handleSubmit = methods.handleSubmit((value) =>
    console.log( "--------------",value)
  );
  return (
    <FormProvider {...methods}>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <PersonalInfoSection />
        <DetailsSection />
        <input value="submit" type="submit" />
      </form>
      <DevTool control={methods.control} />
    </FormProvider>
  );
}

// import { FormProvider, useForm } from "react-hook-form";
// import "./Contact.css"
// // import { Phone } from "../Phone";
// // import { Fullname } from "../Fullname";
// import { DetailsSection } from "./DetailsSection";
// import { PersonalInfoSection } from "./PersonalInfoSection/personalInfoSection"
// import { DevTool } from "@hookform/devtools";

// function Contact() {
//     // const phoneRef = useRef(null)
//     // console.log("Contact");
//     // const formHandler = (e) => {
//     //     e.preventDefault();
//     //     // console.log(fullName, phone);
//     //     // const form = new FormData(e.target);
//     //     // for (const [key, value] of form) {
//     //     //     console.log(`${key}: ${value}`);
//     //     // }
//     //     console.log("formhandlerrrrrr");
//     // }

//     // const uploaderClickHandler = () => {
//     //     fileRef.current.click();
//     // }
//     // const uploaderChangeHandler = (e) => {
//     //     setFile(e.target.files[0])
//     //     // console.log(data.current);
//     // }
//     // useEffect(() => {
//     //     phoneRef.current.focus();
//     //     data.current = "Eli"
//     // }, [])
//     const methods = useForm({
//         mode:'all', // formun validasiarsi ne zamana ise dussun
//         defaultValues: {
//             fullname: "",
//             phone: "" ,
//             gender :""

//         }
//     })
//     const formHandler = methods.handleSubmit((e)=>{
//         console.log(e)
//         // console.log(methods.formState.errors);
//     })
//     return (
//         <FormProvider {...methods}>
//             <h1>Contact Form</h1>
//             <form onSubmit={formHandler}>
//                 <PersonalInfoSection />
//                 <DetailsSection />
//                 <input value="submit" type="submit" />
//             </form>
//             <DevTool control={methods.control} />
//         </FormProvider>
//     )
// }

// export default Contact

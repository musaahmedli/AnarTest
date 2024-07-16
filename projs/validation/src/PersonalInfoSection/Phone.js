import { Controller, useFormContext } from "react-hook-form";

export function Phone() {
  const methods = useFormContext();
  return (
    <div>
      <label htmlFor="phone">Phone</label>
      <input {...methods.register("phone")} type="tel" id="phone" />
      {/* <Controller
        name="phone"
        control={methods.control}
        render={({ field }) => <input {...field} type="tel" id="phone" />}
      /> */}
    </div>
  );
}

// import { Controller, useFormContext } from "react-hook-form"

// export const Phone = () => {
//     const methodsPhone = useFormContext()
//     return (
//         <div className="form--item">
//             <label htmlFor="phone">Phone</label>

//             <Controller
//                 name="phone"
//                 control={methodsPhone.control}
//                 render={({ field }) => (
//                     <input
//                         {...field}
//                         type="tel" id="phone" />
//                 )}
//             />
//         </div>
//     )
// }

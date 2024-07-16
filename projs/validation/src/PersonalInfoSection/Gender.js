import { Controller, useFormContext } from "react-hook-form";

export function Gender() {
  const methods = useFormContext();
  return (
    <div className="form--item">
      <label>Gender</label>
      <div>
        {/*
        

        */}
        <Controller
          name="gender"
          rules={{
            required: "Gender is...",
          }}
          control={methods.control}
          render={({ field }) => (
            <>
              <label htmlFor="male">Male</label>
              <input type="radio" {...field} id="male" value="male" />

              <label htmlFor="female">Female</label>
              <input type="radio" {...field} id="female" value="female" />

              {methods.formState.errors?.gender && (
                <div className="form-error">
                  {methods.formState.errors?.gender?.message}
                </div>
              )}
            </>
          )}
        />
      </div>
    </div>
  );
}

// import { Controller, useFormContext } from "react-hook-form";

// export const Gender = () => {
//   const methods = useFormContext();
//   return (
//     <div className="form--item">
//       <label>Gender</label>
//       <div>
//         <Controller
//           name="gender"
//           // defaultValue="male"
//           rules={{ required: "doldurulmalidir" }}
//           control={methods.control}
//           render={({ field }) => (
//             <>
//               <label htmlFor="male">
//                 <input
//                   type="radio"
//                   checked={field.value === "male"}
//                   id="male"
//                   {...field}
//                   value="male"
//                 />
//                 male
//               </label>
//               <label htmlFor="female">
//                 <input
//                   type="radio"
//                   id="female"
//                   checked={field.value === "female"}
//                   {...field}
//                   value="female"
//                 />
//                 female
//               </label>{" "}
//             </>
//           )}
//         />
//         {methods.formState.errors?.gender && (
//           <div className="form-error">
//             {methods.formState.errors?.gender?.message}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

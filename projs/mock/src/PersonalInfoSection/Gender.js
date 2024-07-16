import { Controller, useFormContext } from "react-hook-form";

export function Gender() {
  const methods = useFormContext();
  // console.log(methods.formState.errors);
  return (
    <div className="form--item">
      <label>Gender</label>
      <div>
        <Controller
          name="gender"
          control={methods.control}
          rules={{
            required: "Gender is...",
          }}
          render={({ field }) => {
          //  console.log(field.value);
            return(
              <>
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              checked={field.value === "male"}
              id="male"
              {...field}
              value="male"
            />

            <label htmlFor="female">Female</label>
            <input
              type="radio"
              checked={field.value === "female"}
              id="female"
              {...field}
              value="female"
            />
            {methods.formState.errors?.gender && (
              <div className="form-error">
                {methods.formState.errors?.gender?.message}
              </div>
            )}
          </>
            )
            
           
          }}
        />
      </div>
    </div>
    // <div className="form--item">
    //   <label>Gender</label>
    //   <div>
    //     <Controller
    //       name="gender"
    //       rules={{
    //         required: "Gender is...",
    //       }}
    //       control={methods.control}
    //       render={({ field }) => (
    //         <>
    //           <label htmlFor="male">Male</label>
    //           <input type="radio" {...field} id="male" value="male" />

    //           <label htmlFor="female">Female</label>
    //           <input type="radio" {...field} id="female" value="female" />

    //           {methods.formState.errors?.gender && (
    //             <div className="form-error">
    //               {methods.formState.errors?.gender?.message}
    //             </div>
    //           )}
    //         </>
    //       )}
    //     />
    //   </div>
    // </div>
  );
}

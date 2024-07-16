import { Controller, useFormContext } from "react-hook-form";

export function Fullname() {
  const methods = useFormContext();
  // console.log("----ERRORS----", methods.formState.errors);

  return (
    // <div className="form--item">
    //   <label htmlFor="name">name</label>
    //   <Controller
    //     rules={{
    //       // pattern:{
    //       //   value: /[A-Z]$/,
    //       //   message:"patterne uygun deyil"
    //       // },
    //       required: "This field is...",
    //       // validate:(value)=>{
    //       //  return !value.includes("Anar") && "ad Anar olmalidir"
    //       // }
    //     }}
    //     name="fullname.name"
    //     control={methods.control}
    //     render={({ field }) => <input {...field} id="name" type="text" />}
    //   />
    //   {methods.formState.errors?.fullname?.name && (
    //     <div className="form-error">
    //       {methods.formState.errors?.fullname?.name?.message}
    //     </div>
    //   )}
    //   <label htmlFor="surname">surname</label>

    //   <Controller
    //     rules={{
    //       // pattern:{
    //       //   value: /[A-Z]$/,
    //       //   message:"patterne uygun deyil"
    //       // },
    //       required: "This field is...",
    //       // validate:(value)=>{
    //       //  return !value.includes("Anar") && "ad Anar olmalidir"
    //       // }
    //     }}
    //     name="fullname.surname"
    //     control={methods.control}
    //     render={({ field }) => <input {...field} id="surname" type="text" />}
    //   />
    //   {methods.formState.errors?.fullname?.surname && (
    //     <div className="form-error">
    //       {methods.formState.errors?.fullname?.surname?.message}
    //     </div>
    //   )}
    // </div>
    <div className="form--item">
      <label htmlFor="name">name</label>
      <Controller
        rules={{
          // pattern: {
          //   value: /[a-zA-Z]$/,
          //   message: "patterne uygun deyil",
          // },
          // validate: (value) => {
          //   return !value.toLowerCase().includes("anar") && "ad Anar olmalidir";
          // },
          required: "Name field is...",
        }}
        name="fullname.name"
        control={methods.control}
        render={({ field }) => <input {...field} id="name" type="text" />}
      />
      {methods.formState.errors?.fullname?.name && (
        <div className="form-error">
          {methods.formState.errors?.fullname?.name?.message}
        </div>
      )}
      <label htmlFor="surname">surname</label>
      <Controller
        rules={{
          required: "Surname field is...",
        }}
        name="fullname.surname"
        control={methods.control}
        render={({ field }) => <input {...field} id="surname" type="text" />}
      />
      {methods.formState.errors?.fullname?.surname && (
        <div className="form-error">
          {methods.formState.errors?.fullname?.surname?.message}
        </div>
      )}
    </div>
  );
}

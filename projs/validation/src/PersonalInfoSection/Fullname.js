import { Controller, useFormContext } from "react-hook-form";

export function Fullname() {
  const methods = useFormContext();
  console.log("----ERRORS----", methods.formState.errors);
  return (
    <div className="form--item">
      <label htmlFor="name">name</label>
      <Controller
        rules={{
          required: "This field is...",
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
          required: "This field is...",
        }}
        name="fulllname.surname"
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

// import { Controller, useFormContext } from "react-hook-form";
// import { Value } from "sass";
// export const Fullname = () => {
//   const methods = useFormContext();
//   return (
//     <div className="form--item">
//       <label htmlFor="fullname">Fullname</label>
//       <Controller
//         name="fullname"
//         control={methods.control}
//         rules={{
//           required: "Ad YAZILMALIDIR!!!",
//           pattern: {
//             value: /[A-Z]$/,
//             message: "patterne uygun deyil ",
//           },
//           validate: (value) => {
//             return !value.includes("Anar") && "AD ANAR OLMALIDIR!";
//           },
//         }}
//         render={({ field }) => <input {...field} id="fullname" type="text" />}
//       />
//       {methods.formState.errors?.fullname && (
//         <div className="form-error">
//           {methods.formState.errors?.fullname?.message}
//         </div>
//       )}
//     </div>
//   );
// };

import { Controller, useFieldArray, useFormContext } from "react-hook-form";

export function Message() {
  const methods = useFormContext();
  const arr = useFieldArray({
    control: methods.control,
    name: "texts",
  });
  // console.log("arr.fields", arr.fields);
  return (
    <div className="form--item">
      <label htmlFor="message">Text</label>
      <button onClick={() => arr.append("")}>+</button>
      {arr.fields.map(({ id }, index) => {
        return (
          <Controller
          key={id}
          control={methods.control}
          name={`texts[${index}]`}
          rules={{
            required: "birsey yaz",
          }}
            render={({ field }) => (
              <>
                <textarea cols="30" rows="10" {...field}></textarea>
                <button onClick={() => arr.remove(index)}>-</button>

                {methods.formState.errors?.texts?.[index] && (
                  <div className="form-error">
                    {methods.formState.errors?.texts?.[index]?.message}
                  </div>
                )}
              </>
            )}
          />
        );
      })}
    </div>
  );
}
// import { Controller, useFormContext } from "react-hook-form";

// export const Message = () => {
//   const methods = useFormContext();
//   return (
//     <div className="form--item">
//       <label htmlFor="message">Text</label>
//       <Controller
//         name="message"
//         control={methods.control}
//         render={({ field }) => (
//           <textarea id="message" cols="30" rows="10" {...field}></textarea>
//         )}
//       />
//     </div>
//   );
// };

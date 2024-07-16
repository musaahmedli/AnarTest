import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { API_URL } from "../const";

export function Message() {
  const methods = useFormContext();
  const arr = useFieldArray({
    control: methods.control,
    name: "texts",
  });
  // console.log("-------ARR-FIELDS------", arr.fields);
  const handleSubmitDeleteMessage = async( id) => {
    // e.preventDefault();
    await fetch(`${API_URL}${id}`, {
      method: "DELETE",
    });
    arr.remove(id);
  };

  return (
    <div className="form--item">
      <label htmlFor="message"> Text</label>
      <button onClick={() => arr.append("")}>+</button>
      {arr.fields.map(({ id }, index) => (
        <Controller
          key={id}
          name={`texts[${index}]`}
          rules={{ required: "write smt" }}
          control={methods.control}
          render={({ field }) => (
            <>
              <button
                type="button"
                onClick={() => handleSubmitDeleteMessage( index)}
              >
                -
              </button>
              <textarea cols="30" rows="10" {...field}></textarea>
              {methods.formState.errors?.texts?.[index] && (
                <div className="form-error">
                  {methods.formState.errors?.texts?.[index]?.message}
                </div>
              )}
            </>
          )}
        />
      ))}
    </div>
  );
}

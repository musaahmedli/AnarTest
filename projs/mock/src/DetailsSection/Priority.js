import { Controller, useFormContext } from "react-hook-form";

export function Priority() {
  const methods = useFormContext();
  return (
    <div className="form--item">
      <label htmlFor="priority"></label>
      <Controller
        name="priority"
        control={methods.control}
        render={({ field }) => (
          <select id="priority"  {...field}>
            <option value="high" >High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        )}
      />
    </div>
  );
}
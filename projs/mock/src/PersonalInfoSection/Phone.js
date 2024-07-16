import { Controller, useFormContext } from "react-hook-form";

export function Phone() {
  const methods = useFormContext();
  return (
    <div className="form--item">
      <label htmlFor="phone">Phone</label>
      <Controller
        name="phone"
        control={methods.control}
        render={({ field }) => <input type="tel" {...field} id="phone" />}
      />
    </div>
  );
}

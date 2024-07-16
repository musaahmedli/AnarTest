import { useContact } from "./hooks";

export const Fullname = () => {
  const { fullName, setFullName } = useContact();
  return (
    <div className="form--item">
      <label htmlFor="fullname">Fullname</label>
      <input
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        name="fullname"
        type="text"
        id="fullname"
      />
    </div>
  );
};

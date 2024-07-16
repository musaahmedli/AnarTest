import { FC, useState } from "react";

interface IInputFormProsp {
  submitHandler: (val: string) => void;
}

const InputForm: FC<IInputFormProsp> = ({ submitHandler }) => {
  const [inputVal, setInputVal] = useState("");

  const inputChangeHandler = (value: string) => {
    setInputVal(value);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        submitHandler(inputVal);
        setInputVal("");
      }}
    >
      <input
        type="text"
        value={inputVal}
        onChange={(e) => {
          console.log("---Value Onchange---", e.target.value);
          inputChangeHandler(e.target.value);
        }}
      />
      <input type="submit" value={"Submit"} />
    </form>
  );
};
export default InputForm;

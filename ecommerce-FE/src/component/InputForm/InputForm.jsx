import { Input } from "antd";
import { useState } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { WrapperInputStyle } from "./style";

const   InputForm = (props)=> {
  const [valueInput, setValueInput] = useState("");
  const {placeholder, ...rests}= props;
  return (
    <div>
      <WrapperInputStyle placeholder={placeholder} value={valueInput} {...rests} />
      
    </div>
  );
};
export default InputForm;

import { InputProps } from "@/types";
import {
  rootStyle,
  textStyle,
  labelStyle,
} from "../../styles/globalComponentStyles";

export default function Input({
  label,
  onChange,
  name,
  type,
  value,
}: InputProps) {
  return (
    <div className={rootStyle}>
      <label htmlFor={label} className={labelStyle}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={`${label}-idx`}
        className={textStyle}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

import { InputProps } from "@/types";
import { rootStyle, textStyle, labelStyle } from "../generalStyles";

export default function Input({ label }: InputProps) {
  return (
    <div className={rootStyle}>
      <label htmlFor={label} className={labelStyle}>
        {label}
      </label>
      <input
        type="text"
        name={`${label}-name`}
        id={`${label}-idx`}
        className={textStyle}
      />
    </div>
  );
}

import { TextAreaProps } from "@/types";
import {
  labelStyle,
  rootStyle,
  textStyle,
} from "../../styles/globalComponentStyles";
import { descriptionStyle } from "./styles";

export default function TextArea({
  label,
  placeholder,
  onChange,
  value,
}: TextAreaProps) {
  return (
    <div className={rootStyle}>
      <label htmlFor={label} className={labelStyle}>
        {label}
      </label>
      <div className="mt-1">
        <textarea
          id={`${label}-id`}
          name={`${label}-name`}
          rows={5}
          aria-multiline="true"
          className={textStyle}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
}

import { TextAreaProps } from "@/types";
import { labelStyle, rootStyle, textStyle } from "../generalStyles";
import { descriptionStyle } from "./styles";

export default function TextArea({
  label,
  placeholder,
  description,
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
          className={textStyle}
          placeholder={placeholder}
          defaultValue={""}
        />
      </div>
      <p className={descriptionStyle}>{description}</p>
    </div>
  );
}

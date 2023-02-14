import { ButtonProps } from "@/types";
import { buttonStyles } from "./styles";

export default function SubmitButton({ disabled, label }: ButtonProps) {
  return (
    <button type="submit" disabled={disabled} className={buttonStyles}>
      {label}
    </button>
  );
}

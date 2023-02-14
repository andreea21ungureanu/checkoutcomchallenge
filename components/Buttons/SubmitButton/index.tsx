import { ButtonProps } from "@/types";
import { button } from "./styles";

export default function SubmitButton({ disabled, label }: ButtonProps) {
  return (
    <button type="submit" disabled={disabled} className={button}>
      {label}
    </button>
  );
}

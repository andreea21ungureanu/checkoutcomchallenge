import { ButtonProps } from "@/types";
import { buttonStyles } from "./styles";

export default function SubmitButton({ label, onClick }: ButtonProps) {
  return (
    <button type="submit" className={buttonStyles} onSubmit={onClick}>
      {label}
    </button>
  );
}

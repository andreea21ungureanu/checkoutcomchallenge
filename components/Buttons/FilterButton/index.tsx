import { RiFilterOffFill } from "react-icons/ri";
import { icon, span } from "../../../styles/buttonsStyles";
import { button } from "../BackButton/style";
import { FilterButtonProps } from "@/types";

export default function FilterButton({ onClick }: FilterButtonProps) {
  const accessibleLabel = "Reset Filter";
  return (
    <button
      aria-label={accessibleLabel}
      type="button"
      className={button}
      onClick={onClick}
    >
      <RiFilterOffFill className={icon} aria-hidden="true" />
      <span className={span}>{accessibleLabel}</span>
    </button>
  );
}

import { RiFilterOffFill } from "react-icons/ri";
import { iconStyles, spanStyles } from "../generalStyles";
import { buttonStyles } from "../BackButton/style";
import { FilterButtonProps } from "@/types";

export default function FilterButton({ onClick }: FilterButtonProps) {
  return (
    <button type="button" className={buttonStyles} onClick={onClick}>
      <RiFilterOffFill className={iconStyles} aria-hidden="true" />
      <span className={spanStyles}>Reset Filter</span>
    </button>
  );
}

import { RiFilterOffFill } from "react-icons/ri";
import { icon, span } from "../../../styles/buttonsStyles";
import { button } from "../BackButton/style";
import { FilterButtonProps } from "@/types";

export default function FilterButton({ onClick }: FilterButtonProps) {
  return (
    <button type="button" className={button} onClick={onClick}>
      <RiFilterOffFill className={icon} aria-hidden="true" />
      <span className={span}>Reset Filter</span>
    </button>
  );
}

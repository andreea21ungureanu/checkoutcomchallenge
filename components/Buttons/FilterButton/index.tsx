import { RiFilterOffFill } from "react-icons/ri";
import { iconStyles, spanStyles } from "../generalStyles";
import { buttonStyles } from "../BackButton/style";

export default function FilterButton() {
  return (
    <button type="button" className={buttonStyles}>
      <RiFilterOffFill className={iconStyles} aria-hidden="true" />
      <span className={spanStyles}>Reset Filter</span>
    </button>
  );
}

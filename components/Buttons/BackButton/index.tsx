import { BiArrowBack } from "react-icons/bi";
import { buttonStyles } from "./style";
import { iconStyles, spanStyles } from "../generalStyles";

export default function BackButton() {
  return (
    <button type="button" className={buttonStyles}>
      <BiArrowBack className={iconStyles} aria-hidden="true" />
      <span className={spanStyles}>Back</span>
    </button>
  );
}

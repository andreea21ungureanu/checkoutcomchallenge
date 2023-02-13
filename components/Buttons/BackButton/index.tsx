import { BiArrowBack } from "react-icons/bi";
import { buttonStyles } from "./style";
import { iconStyles, spanStyles } from "../generalStyles";
import Link from "next/link";

export default function BackButton() {
  return (
    <Link href="/" className={buttonStyles}>
      <BiArrowBack className={iconStyles} aria-hidden="true" />
      <span className={spanStyles}>Back</span>
    </Link>
  );
}

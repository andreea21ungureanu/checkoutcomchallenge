import { BiArrowBack } from "react-icons/bi";
import { button } from "./style";
import { icon, span } from "../../../styles/buttonsStyles";
import Link from "next/link";

export default function BackButton() {
  return (
    <Link href="/" className={button}>
      <BiArrowBack className={icon} aria-hidden="true" />
      <span className={span}>Back</span>
    </Link>
  );
}

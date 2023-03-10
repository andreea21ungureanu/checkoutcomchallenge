import { BsXCircleFill } from "react-icons/bs";
import { icon, root, text } from "./style";
import { FormErrorProps } from "@/types";

export default function FormError({ errorObject, field }: FormErrorProps) {
  return errorObject[field] ? (
    <div aria-label={"Form error"} className={root}>
      <div className="flex">
        <div className="flex-shrink-0">
          <BsXCircleFill className={icon} aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className={text}>{errorObject[field]}</h3>
        </div>
      </div>
    </div>
  ) : null;
}

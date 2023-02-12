import { BsStarFill, BsStar } from "react-icons/bs";
import styles from "./StarRating.module.css";
import { StarRatingProps } from "@/types";
import { labelStyle, rootStyle } from "../generalStyles";

// TODO: use these only once, instead of two components
const ICON_COLOR = "rgb(246, 227, 23)";
const ICON_SIZE = "2em";

export default function StarRating({ label, name }: StarRatingProps) {
  return (
    <div className={rootStyle}>
      <label htmlFor={label} className={labelStyle}>
        {label}
      </label>
      <div className={styles.stars}>
        {[5, 4, 3, 2, 1].map((index) => (
          <>
            <input
              id={`${index}-${name}`}
              name={name}
              type="radio"
              value={index}
            />
            <label htmlFor={`${index}-${name}`}>
              <BsStar
                className={styles.empty}
                color={ICON_COLOR}
                size={ICON_SIZE}
              />
              <BsStarFill
                className={styles.filled}
                color={ICON_COLOR}
                size={ICON_SIZE}
              />
            </label>
          </>
        ))}
      </div>
    </div>
  );
}

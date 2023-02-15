import React, { useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import styles from "./StarRating.module.css";
import { StarRatingProps } from "@/types";
import {
  ICON_COLOR,
  labelStyle,
  rootStyle,
} from "../../styles/globalComponentStyles";

const ICON_SIZE = "2em";

export default function StarRating({
  label,
  name,
  setStarRating,
}: StarRatingProps) {
  return (
    <div className={rootStyle}>
      <label htmlFor={label} className={labelStyle}>
        {label}
      </label>
      <div aria-label={"Star rating"} aria-required className={styles.stars}>
        {[5, 4, 3, 2, 1].map((index) => (
          <React.Fragment key={index}>
            <input
              id={`${index}-${name}`}
              name={name}
              type="radio"
              role="radio"
              value={index}
              onChange={(event) => {
                setStarRating(event.currentTarget.value);
              }}
            />
            <label tabIndex={0} htmlFor={`${index}-${name}`}>
              <BsStar
                aria-label="Empty Star"
                className={styles.empty}
                color={ICON_COLOR}
                size={ICON_SIZE}
              />
              <BsStarFill
                aria-label="Full Star"
                className={styles.filled}
                color={ICON_COLOR}
                size={ICON_SIZE}
              />
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

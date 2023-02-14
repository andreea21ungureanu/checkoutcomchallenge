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
      <div className={styles.stars}>
        {[5, 4, 3, 2, 1].map((index) => (
          <React.Fragment key={index}>
            <input
              id={`${index}-${name}`}
              name={name}
              type="radio"
              value={index}
              onChange={(event) => {
                setStarRating(event.currentTarget.value);
              }}
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
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

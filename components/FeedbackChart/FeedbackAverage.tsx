import { BsStarFill, BsStar } from "react-icons/bs";
import {
  averageText,
  averageTotal,
  feedbackAvgRoot,
  feedbackAvgBlockShadow,
} from "./styles";
import { ReactNode, useContext } from "react";
import { FeedbackAverageProps } from "@/types";
import { ICON_COLOR } from "../../styles/globalComponentStyles";

const ICON_SIZE = "1.5em";

export default function FeedbackAverage({
  ratings,
  totalRatings,
}: FeedbackAverageProps) {
  // Computes the average rating for all the feedback results
  const averageStarRating = () => {
    let averageRating = 0;
    for (let i = 1; i <= 5; i++) {
      if (ratings.has(i)) {
        averageRating += i * ratings.get(i)!;
      }
    }
    return Math.floor(averageRating / totalRatings);
  };

  // Returns an array of "Star" components following the rule:
  // Filled stars: for the average rating
  // Empty stars: for the remaining rating up to 5
  const renderStars = () => {
    let starsArray: ReactNode[] = [];
    let numberOfStars = averageStarRating();
    let starsLeft = 5 - numberOfStars;

    while (numberOfStars > 0) {
      starsArray.push(
        <BsStarFill
          key={`avgStar-${numberOfStars}`}
          color={ICON_COLOR}
          size={ICON_SIZE}
        />
      );
      numberOfStars--;
    }

    while (starsLeft) {
      starsArray.push(
        <BsStar
          key={`avgStar-${starsLeft + 5}`}
          color={ICON_COLOR}
          size={ICON_SIZE}
        />
      );
      starsLeft--;
    }
    return starsArray;
  };

  return (
    <div className={feedbackAvgRoot}>
      <div className={feedbackAvgBlockShadow}>
        <div className="flex-col">
          <div className="flex flex-row">
            {renderStars()}
            <p className={averageText}>{`${averageStarRating()} out of 5`}</p>
          </div>
          <p className={averageTotal}>{`${totalRatings} total ratings`}</p>
        </div>
      </div>
    </div>
  );
}

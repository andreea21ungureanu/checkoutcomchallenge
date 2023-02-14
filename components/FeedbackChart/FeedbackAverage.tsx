import { BsStarFill, BsStar } from "react-icons/bs";
import {
  averageTextStyle,
  averageTotalStyle,
  feedbackAvgRoot,
  feedbackAvgBlockShadow,
} from "./styles";
import { ReactNode, useContext } from "react";
import { FeedbackAverageProps } from "@/types";

const ICON_COLOR = "rgb(246, 227, 23)";
const ICON_SIZE = "1.5em";

export default function FeedbackAverage({
  ratings,
  totalRatings,
}: FeedbackAverageProps) {
  const averageStarRating = () => {
    let averageRating = 0;
    for (let i = 1; i <= 5; i++) {
      if (ratings.has(i)) {
        averageRating += i * ratings.get(i)!;
      }
    }
    return Math.floor(averageRating / totalRatings);
  };

  const renderStars = () => {
    let starsArray: ReactNode[] = [];
    let numberOfStars = averageStarRating();
    let starsLeft = 5 - numberOfStars;

    while (numberOfStars > 0) {
      starsArray.push(<BsStarFill key={`avgStar-${numberOfStars}`} color={ICON_COLOR} size={ICON_SIZE} />);
      numberOfStars--;
    }

    while (starsLeft) {
      starsArray.push(<BsStar key={`avgStar-${starsLeft+5}`} color={ICON_COLOR} size={ICON_SIZE} />);
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
            <p
              className={averageTextStyle}
            >{`${averageStarRating()} out of 5`}</p>
          </div>
          <p className={averageTotalStyle}>{`${totalRatings} total ratings`}</p>
        </div>
      </div>
    </div>
  );
}

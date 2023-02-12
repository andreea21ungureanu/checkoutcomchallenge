import { BsStarFill, BsStar } from "react-icons/bs";
import {
  averageTextStyle,
  averageTotalStyle,
  feedbackAvgRoot,
  feedbackAvgBlockShadow,
} from "./styles";

const ICON_COLOR = "rgb(246, 227, 23)";
const ICON_SIZE = "1.5em";

export default function FeedbackAverage() {
  // TODO: calculate average
  // TODO generate stars based on average
  return (
    <div className={feedbackAvgRoot}>
      <div className={feedbackAvgBlockShadow}>
        <div className="flex-col">
          <div className="flex flex-row">
            <BsStarFill color={ICON_COLOR} size={ICON_SIZE} />
            <BsStarFill color={ICON_COLOR} size={ICON_SIZE} />
            <BsStarFill color={ICON_COLOR} size={ICON_SIZE} />
            <BsStarFill color={ICON_COLOR} size={ICON_SIZE} />
            <BsStar color={ICON_COLOR} size={ICON_SIZE} />
            <p className={averageTextStyle}>{" 4 out of 5"}</p>
          </div>
          <p className={averageTotalStyle}>{"1234 global ratings"}</p>
        </div>
      </div>
    </div>
  );
}

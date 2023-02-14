import { ReactNode } from "react";
import {
  commentHeaderStyle,
  listRootStyle,
  previewStyle,
  senderStyle,
  listItemStyle,
  spinnerRoot
} from "./styles";
import { FeedbackCommentsProps } from "@/types";
import { BsStarFill } from "react-icons/bs";
import Spinner from "../Spinner";
const ICON_COLOR = "rgb(246, 227, 23)";
const ICON_SIZE = "1em";
export default function FeedbackComments({ comments, loadingState }: FeedbackCommentsProps) {
  const renderStars = (starRating:number) => {
    let starsArray: ReactNode[] = [];

    while (starRating > 0) {
      starsArray.push(<BsStarFill key={`feedbackStar-${starRating}`} color={ICON_COLOR} size={ICON_SIZE} />);
      starRating--;
    }
    return starsArray;
  };
  return loadingState? <div className={spinnerRoot}><Spinner/></div> :(
    <ul role="list" className={listRootStyle}>
      {comments.map((comment, idx) => (
        <li key={idx} className={listItemStyle}>
          <div className={commentHeaderStyle}>
            <div>
              <span className="absolute inset-0" aria-hidden="true" />
              <p className={senderStyle}>{comment.name}</p>
              <div className="flex flex-row">{renderStars(comment.starRating)}</div>
            </div>
          </div>
          <div className="mt-1">
            <p className={previewStyle}>{comment.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

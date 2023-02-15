import { ReactNode } from "react";
import {
  commentHeader,
  listRoot,
  preview,
  sender,
  listItem,
  spinnerRoot,
} from "./styles";
import { FeedbackCommentsProps } from "@/types";
import { BsStarFill } from "react-icons/bs";
import Spinner from "../Spinner";
import { ICON_COLOR } from "../../styles/globalComponentStyles";

const ICON_SIZE = "1em";

export default function FeedbackComments({
  comments,
  loadingState,
}: FeedbackCommentsProps) {
  // Creates an array of "Stars" displayed for each feedback response
  const renderStars = (starRating: number) => {
    let starsArray: ReactNode[] = [];
    while (starRating > 0) {
      starsArray.push(
        <BsStarFill
          aria-label="Full Star"
          key={`feedbackStar-${starRating}`}
          color={ICON_COLOR}
          size={ICON_SIZE}
        />
      );
      starRating--;
    }
    return starsArray;
  };

  return loadingState ? (
    <div className={spinnerRoot}>
      <Spinner />
    </div>
  ) : (
    <ul role="list" className={listRoot}>
      {comments.map((comment, idx) => (
        <li key={idx} className={listItem}>
          <div className={commentHeader}>
            <div>
              <p aria-label={"Reviewer name"} className={sender}>
                {comment.name}
              </p>
              <div className="flex flex-row">
                {renderStars(comment.starRating)}
              </div>
            </div>
          </div>
          <div aria-label={"Feedback"} className="mt-1">
            <p className={preview}>{comment.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

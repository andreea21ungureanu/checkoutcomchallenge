import { TextItemProps } from "@/types";
import { averageTextStyle } from "../FeedbackChart/styles";

export default function TextItem({ starRating }: TextItemProps) {
  return starRating ? (
    <p className={averageTextStyle}>{`Filtered by ${starRating} ratings`}</p>
  ) : null;
}

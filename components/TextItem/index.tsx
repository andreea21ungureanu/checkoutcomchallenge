import { TextItemProps } from "@/types";
import { averageText } from "../FeedbackChart/styles";

export default function TextItem({ starRating }: TextItemProps) {
  return starRating ? (
    <p className={averageText}>{`Showing ${starRating} star ratings`}</p>
  ) : null;
}

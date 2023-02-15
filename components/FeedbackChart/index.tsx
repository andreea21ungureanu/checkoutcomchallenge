import { useEffect, useState } from "react";
import FeedbackAverage from "./FeedbackAverage";
import {
  chartBarContainer,
  chartBar,
  root,
  starText,
  percentageText,
} from "./styles";
import getStarRatingsHandler from "@/helpers/handlers/getStarRatingsHandler";
import { FeedbackChartProps } from "@/types";

export default function FeedbackChart({
  setCommentsRatingFilter,
}: FeedbackChartProps) {
  const [starRatings, setStarRatings] = useState<number[]>([]);
  const [isError, setIsError] = useState(false);

  // Fetches the star ratings for all feedback
  useEffect(() => {
    const fetchData = async () => {
      try {
        getStarRatingsHandler().then((result) => setStarRatings(result));
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  if (isError) return <h3> Error! Please try again later</h3>;

  // Creates a map for star rating occurences
  let starsMap = new Map<number, number>();
  for (let star of starRatings) {
    if (starsMap.has(star)) starsMap.set(star, starsMap.get(star)! + 1);
    else starsMap.set(star, 1);
  }
  // Sorts the map in increasing order
  starsMap = new Map([...starsMap.entries()].sort());

  // Returns the percentage value of a star rating
  // Used for determining the width of the UI component
  // As well as the number value
  const starDistribution = (starNumber: number) => {
    if (starsMap.has(starNumber)) {
      return (starsMap.get(starNumber)! / starRatings.length) * 100;
    }
    return 0;
  };

  return (
    <div>
      <FeedbackAverage ratings={starsMap} totalRatings={starRatings.length} />
      {[5, 4, 3, 2, 1].map((index) => (
        <div
          aria-label={`${index} star distribution rating`}
          aria-describedby={`Filter by ${index} star distribution rating`}
          role="button"
          tabIndex={0}
          key={index}
          className={root}
          onClick={() => setCommentsRatingFilter(index)}
        >
          <p className={starText}>{index + " stars"}</p>
          <div className="mt-4" aria-hidden="true">
            <div className={chartBarContainer}>
              <div
                className={chartBar}
                style={{ width: `${starDistribution(index)}%` }}
              />
            </div>
          </div>
          <p className={percentageText}>{`${starDistribution(index).toFixed(
            2
          )}%`}</p>
        </div>
      ))}
    </div>
  );
}

import {  useEffect, useState } from "react";
import FeedbackAverage from "./FeedbackAverage";
import {
  chartBarContainerStyle,
  chartBarStyle,
  root,
  starTextStyle,
  percentageTextStyle,
} from "./styles";
import getStarRatingsHandler from "@/helpers/getStarRatingsHandler";
import { FeedbackChartProps } from "@/types";

export default function FeedbackChart({
  setCommentsRatingFilter,
}: FeedbackChartProps) {
  const [starRatings, setStarRatings] = useState<number[]>([]);
  useEffect(() => {
    getStarRatingsHandler().then((result) => setStarRatings(result));
  }, []);

  // create map with no of each star occurence
  let starsMap = new Map<number, number>();
  for (let star of starRatings) {
    if (starsMap.has(star)) starsMap.set(star, starsMap.get(star)! + 1);
    else starsMap.set(star, 1);
  }
  // sort the map
  starsMap = new Map([...starsMap.entries()].sort());

  const starDistribution = (starNumber: number) => {
    if (starsMap.has(starNumber)) {
      return (starsMap.get(starNumber)! / starRatings.length) * 100;
    }
    return 0;
  };

  return (
    <div>
      <FeedbackAverage ratings={starsMap} totalRatings={starRatings.length} />
      <h4 className="sr-only">Status</h4>
      {[5, 4, 3, 2, 1].map((index) => (
        <div
          key={index}
          className={root}
          onClick={() => setCommentsRatingFilter(index)}
        >
          <p className={starTextStyle}>{index + " stars"}</p>
          <div className="mt-4" aria-hidden="true">
            <div className={chartBarContainerStyle}>
              <div
                className={chartBarStyle}
                style={{ width: `${starDistribution(index)}%` }}
              />
            </div>
          </div>
          <p className={percentageTextStyle}>{`${starDistribution(
            index
          ).toFixed(2)}%`}</p>
        </div>
      ))}
    </div>
  );
}

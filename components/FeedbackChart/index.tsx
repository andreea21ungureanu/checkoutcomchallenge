import FeedbackAverage from "./FeedbackAverage";
import {
  chartBarContainerStyle,
  chartBarStyle,
  root,
  starTextStyle,
  percentageTextStyle,
} from "./styles";

export default function FeedbackChart() {
  return (
    <div>
      <FeedbackAverage />
      <h4 className="sr-only">Status</h4>
      {[5, 4, 3, 2, 1].map((index) => (
        <>
          <div className={root}>
            <p className={starTextStyle}>{index + " stars"}</p>
            <div className="mt-4" aria-hidden="true">
              <div className={chartBarContainerStyle}>
                <div
                  className={chartBarStyle}
                  // TODO: calculate distribution based on backend data
                  style={{ width: `${index}0.5%` }}
                />
              </div>
            </div>
            <p className={percentageTextStyle}>{`${index}0.5%`}</p>
          </div>
        </>
      ))}
    </div>
  );
}

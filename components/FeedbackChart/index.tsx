import {
  chartBarContainerStyle,
  chartBarStyle,
  rootStyle,
  starTextStyle,
} from "./styles";

export default function FeedbackChart() {
  return (
    <div>
      <h4 className="sr-only">Status</h4>
      {[5, 4, 3, 2, 1].map((index) => (
        <>
          <div className={rootStyle}>
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
          </div>
        </>
      ))}
    </div>
  );
}

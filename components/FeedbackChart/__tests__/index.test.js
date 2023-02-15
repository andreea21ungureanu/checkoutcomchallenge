import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackChart from "../index";
import "@testing-library/jest-dom";

global.fetch = jest.fn().mockImplementationOnce(() =>
  Promise.resolve({
    json: () => Promise.resolve([4, 5, 2, 3, 1, 2, 3, 4]),
  })
);

describe("Feedback Chart", () => {
  it("displays button by default", async () => {
    render(<FeedbackChart />);

    console.log(screen.debug());
    expect(true).toBeInTheDocument();
  });
});

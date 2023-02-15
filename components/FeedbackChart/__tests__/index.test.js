import {
  act,
  waitForElementToBeRemoved,
  render,
  screen,
} from "@testing-library/react";
import FeedbackChart from "../index";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "whatwg-fetch";

const MOCK_RESPONSE = [
  {
    name: "Andreea",
    email: "and@me.com",
    starRating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
const server = setupServer(
  rest.get("/api/getFeedback", (req, res, ctx) => {
    return res(ctx.json(MOCK_RESPONSE));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Feedback Chart", () => {
  it("renders all the feedback distribution items", () => {
    render(<FeedbackChart />);

    // Feedback Average Rating
    const feedbackAverageRating = screen.getByLabelText(
      "Feedback Average Rating"
    );

    // Buttons for the Rating distributions
    const fiveStarDistribution = screen.getByRole("button", {
      name: "5 star distribution rating",
    });

    expect(feedbackAverageRating).toBeInTheDocument();
    expect(fiveStarDistribution).toBeInTheDocument();
  });
});

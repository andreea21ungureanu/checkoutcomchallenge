import {
  act,
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import ResponsesPage from "../responses";
import "@testing-library/jest-dom";
import mockRouter from "next-router-mock";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "whatwg-fetch";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

jest.mock("next/router", () => require("next-router-mock"));

const MOCK_DATA = [
  {
    name: "Andreea",
    email: "and@me.com",
    starRating: 5,
    comment: "Test Comment 1",
  },
  {
    name: "Andreea",
    email: "and@me.com",
    starRating: 4,
    comment: "Test Comment 2",
  },
];

const server = setupServer(
  rest.get("/api/getFeedback", (req, res, ctx) => {
    return res(ctx.json(MOCK_DATA));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Feedback Responses Page", () => {
  it("renders the page with a loader by default", async () => {
    render(<ResponsesPage />);

    expect(
      screen.getByLabelText("Feedback Average Rating")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("5 star distribution rating")
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Loading")).toBeInTheDocument();
    expect(screen.queryByText("Test Comment 1")).not.toBeInTheDocument();
  });

  it("renders all fields on the page once loaded", async () => {
    render(<ResponsesPage />);

    await waitForElementToBeRemoved(screen.queryByLabelText("Loading"));

    expect(
      screen.getByLabelText("Feedback Average Rating")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("5 star distribution rating")
    ).toBeInTheDocument();

    expect(screen.getByText("Comments")).toBeInTheDocument();
    expect(screen.getByText("Test Comment 1")).toBeInTheDocument();
  });

  it("navigates to the form page when Back button is clicked", async () => {
    render(<ResponsesPage />, {
      wrapper: MemoryRouterProvider,
    });

    // push current path
    act(() => {
      mockRouter.push("/responses");
    });

    // wait for the data to load
    await waitForElementToBeRemoved(screen.queryByLabelText("Loading"));

    const button = screen.getByRole("link", {
      name: "Back button",
    });
    fireEvent.click(button);

    expect(mockRouter.asPath).toEqual("/");
  });

  it("filters the data by star rating when star distribution is clicked", async () => {
    render(<ResponsesPage />);
    await waitForElementToBeRemoved(screen.queryByLabelText("Loading"));

    const fiveStarDistribution = screen.getByRole("button", {
      name: "5 star distribution rating",
    });

    // select content based on feedback distribution for 5 stars
    fireEvent.click(fiveStarDistribution);

    expect(screen.getByText("Showing 5 star ratings")).toBeInTheDocument();
  });

  it("resets the filter for all comments once Reset Filter is clicked", async () => {
    render(<ResponsesPage />);
    await waitForElementToBeRemoved(screen.queryByLabelText("Loading"));

    const fiveStarDistribution = screen.getByRole("button", {
      name: "5 star distribution rating",
    });
    // select content based on feedback distribution for 5 stars
    fireEvent.click(fiveStarDistribution);

    const resetFilterButton = screen.getByRole("button", {
      name: "Reset Filter",
    });
    expect(screen.getByText("Showing 5 star ratings")).toBeInTheDocument();
    expect(resetFilterButton).toBeInTheDocument();

    // reset filter
    fireEvent.click(resetFilterButton);
    expect(
      screen.queryByText("Showing 5 star ratings")
    ).not.toBeInTheDocument();
    expect(resetFilterButton).not.toBeInTheDocument();
  });
});

import {
  waitFor,
  act,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import FeedbackForm from "../index";
import "@testing-library/jest-dom";
import mockRouter from "next-router-mock/async";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "whatwg-fetch";

jest.mock("next/router", () => require("next-router-mock/async"));

const server = setupServer(
  rest.post("/api/submitFeedback", (req, res, ctx) => {
    return res(ctx.status(200));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Index Page", () => {
  it("renders all the feedback form fields", () => {
    render(<FeedbackForm />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email address")).toBeInTheDocument();
    expect(screen.getByText("Rating")).toBeInTheDocument();
    expect(screen.getByText("Comment")).toBeInTheDocument();
  });

  it("disables the Submit button when all fields are incorrect", () => {
    render(<FeedbackForm />);

    const button = screen.getByRole("button", {
      name: "Form submission",
    });

    fireEvent.click(button);

    expect(screen.getByText("Please enter a valid name")).toBeInTheDocument();
    expect(
      screen.getByText("Please enter a valid email address")
    ).toBeInTheDocument();
    expect(screen.getByText("Please select a rating")).toBeInTheDocument();
    expect(
      screen.getByText("Please introduce your feedback")
    ).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("disables the Submit button when one field is incorrect and the others are correct", () => {
    render(<FeedbackForm />);

    // get elements
    const nameInput = screen.getAllByRole("textbox")[0];
    const emailInput = screen.getAllByRole("textbox")[1];
    const commentInput = screen.getAllByRole("textbox")[2];
    const starRating = screen.getAllByRole("radio")[0];
    const button = screen.getByRole("button", {
      name: "Form submission",
    });

    act(() => {
      // trigger events
      // the name field is the the only incorrect one
      fireEvent.change(nameInput, { target: { value: "" } });

      // the rest of the fields have correct values
      fireEvent.change(emailInput, { target: { value: "abc@me.com" } });
      fireEvent.change(commentInput, { target: { value: "Comment test" } });
      fireEvent.click(starRating, { target: { value: "1" } });

      fireEvent.click(button);
    });

    expect(screen.getByText("Please enter a valid name")).toBeInTheDocument();
    expect(
      screen.queryByText("Please enter a valid email address")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Please select a rating")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Please introduce your feedback")
    ).not.toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("successfully submits the form when all fields are correct", async () => {
    render(<FeedbackForm />);
    act(() => {
      mockRouter.push("/");
    });

    // get elements
    const nameInput = screen.getAllByRole("textbox")[0];
    const emailInput = screen.getAllByRole("textbox")[1];
    const commentInput = screen.getAllByRole("textbox")[2];
    const starRating = screen.getAllByRole("radio")[0];
    const button = screen.getByRole("button", {
      name: "Form submission",
    });

    // trigger events
    fireEvent.change(nameInput, { target: { value: "Andreea" } });
    fireEvent.change(emailInput, { target: { value: "abc@me.com" } });
    fireEvent.change(commentInput, { target: { value: "Comment test" } });
    fireEvent.click(starRating, { target: { value: "1" } });

    fireEvent.click(button);

    expect(
      screen.queryByText("Please enter a valid name")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Please enter a valid email address")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Please select a rating")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Please introduce your feedback")
    ).not.toBeInTheDocument();

    await waitFor(() => {
      expect(mockRouter).toMatchObject({
        pathname: "/responses",
      });
    });
  });
});

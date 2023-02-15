import { fireEvent, render, screen } from "@testing-library/react";
import BackButton from "../index";
import "@testing-library/jest-dom";

describe("Back Button", () => {
  it("displays button by default", () => {
    render(<BackButton />);

    const button = screen.getByLabelText("Back button");

    expect(button).toBeInTheDocument();
  });
});

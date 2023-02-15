import getFeedbackHandler from "../getFeedbackHandler";
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

describe("Feedback Handler", () => {
  let feedback;

  describe("When the api is called", () => {
    beforeEach(async () => {
      feedback = await getFeedbackHandler();
    });

    it("returns the correct result format", () => {
      expect(feedback).toEqual(MOCK_RESPONSE);
    });
  });
});

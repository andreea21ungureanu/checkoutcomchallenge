import getStarRatingsHandler from "../getStarRatingsHandler";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "whatwg-fetch";

const MOCK_DATA = [
  {
    name: "Andreea",
    email: "and@me.com",
    starRating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Andreea",
    email: "and@me.com",
    starRating: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Andreea",
    email: "and@me.com",
    starRating: 2,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const MOCK_RESPONSE = [5, 4, 2];

const server = setupServer(
  rest.get("/api/getFeedback", (req, res, ctx) => {
    return res(ctx.json(MOCK_DATA));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Star Ratings Handler", () => {
  let starRatings;

  describe("When the api is called", () => {
    beforeEach(async () => {
      starRatings = await getStarRatingsHandler();
    });

    it("returns the correct result format", () => {
      expect(starRatings).toEqual(MOCK_RESPONSE);
    });
  });
});

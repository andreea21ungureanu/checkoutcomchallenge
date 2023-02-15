// import getFeedbackHandler from "../getFeedbackHandler";

// const MOCKED_DATA = [
//   { name: "Andreea", email: "and@me.com", starRating: 3, comment: "Example" },
//   {
//     name: "Andreea2",
//     email: "and2@me.com",
//     starRating: 1,
//     comment: "Example2",
//   },
//   {
//     name: "Andreea3",
//     email: "and3@me.com",
//     starRating: 1,
//     comment: "Example3",
//   },
// ];

// const MOCKED_DATA_2 = [
//   { name: "Andreea", email: "and@me.com", starRating: 3, comment: "Example" },
// ];

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve([MOCKED_DATA]),
//   })
// );

// describe("Feedback Handler", () => {
//   let feedback;

//   describe("When the api is called", () => {
//     it("returns the correct result format", async () => {
//       feedback = await getFeedbackHandler("2");
//       console.log(feedback);
//       expect(feedback).toEqual("MOCK_RESPONSE");
//     });
//   });
// });

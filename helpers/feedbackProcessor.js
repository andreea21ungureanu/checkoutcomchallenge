const fileSystem = require("node:fs/promises");

// We store the feedback in a JSON file for the purpose of this challenge
// In a productionised app, we would opt for storage in a db
let feedback = require("data/feedback.json");

export const feedbackProcessor = {
  getValues,
  create,
};

// Retrieve all the information about the feedback by default
// Filter the information for a specific rating if the query is specified
function getValues(filterParam) {
  if (filterParam.hasOwnProperty("starRating")) {
    return feedback.filter(
      (individualFeedback) =>
        individualFeedback.starRating === parseInt(filterParam.starRating)
    );
  }
  return feedback;
}

// Create a new field in the JSON file
async function create(individualFeedback) {
  feedback.push(individualFeedback);
  await saveData();
}

async function saveData() {
  await fileSystem.writeFile(
    "data/feedback.json",
    JSON.stringify(feedback, null, 4)
  );
}

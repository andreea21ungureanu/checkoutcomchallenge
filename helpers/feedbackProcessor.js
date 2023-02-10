const fileSystem = require("node:fs/promises");

// We store the feedback in a JSON file for the purpose of this challenge
// In a productionised app, we would opt for storage in a db
let feedback = require("data/feedback.json");

export const feedbackProcessor = {
  getAll: () => feedback,
  find: (x) => feedback.find(x),
  create,
  //   update,
  //   delete: _delete,
};

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

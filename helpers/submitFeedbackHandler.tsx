import { Feedback } from "@/types";

// TODO: Validation
export default async function submitFeedbackHandler(
  feedbackResponse: Feedback
) {
  const { name, email, rating, comment } = feedbackResponse;

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, rating, comment }),
  };

  try {
    await fetch("/api/submitFeedback", requestOptions);
    return true;
  } catch (error) {
    console.log("Fetch error: ", error);
    return false;
  }
}

import { Feedback } from "@/types";

// TODO: Validation
export default async function getFeedbackHandler(queryParam?: string) {
  try {
    let response;
    if (queryParam) {
      let urlSearchParam = new URLSearchParams({ starRating: queryParam });
      response = await fetch("/api/getFeedback?" + urlSearchParam);
    } else {
      response = await fetch("/api/getFeedback");
    }

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    let feedback: Array<Feedback> = await response.json();
    return feedback;
  } catch (error) {
    console.log(error);
    throw new Error("An error occured. Please try again.");
  }
}

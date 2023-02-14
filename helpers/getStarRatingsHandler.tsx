import { Fields } from "@/types";

// TODO: Validation
export default async function getStarRatingsHandler() {
  try {
    let response = await fetch("/api/getFeedback");

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    let feedback: Array<Record<Fields, string>> = await response.json();
    let starRatings: number[] = [];
    feedback.map((individualFeedback) => {
      starRatings.push(parseInt(individualFeedback.starRating));
    });
    return starRatings;
  } catch (error) {
    throw new Error("An error occured. Please try again.");
  }
}

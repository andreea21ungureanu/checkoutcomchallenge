// TODO: Validation
export default async function getFeedbackHandler() {
  try {
    let response = await fetch("/api/getFeedback");

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    let feedback = await response.json();
    return feedback;
  } catch (error) {
    console.log("Fetch error: ", error);
    return false;
  }
}

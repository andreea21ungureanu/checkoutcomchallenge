import { useRouter } from "next/router";
import submitFeedbackHandler from "@/helpers/handlers/submitFeedbackHandler";
import {
  commentRegex,
  emailRegex,
  lettersSpaceRegex,
  startRatingRegex,
} from "../helpers/regexHelpers";
import { Fields } from "@/types";
import { useState } from "react";

export default function useFormSubmission(
  name: string,
  email: string,
  starRating: string,
  comment: string
) {
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [errorObject, setErrorObject] = useState<Record<Fields, string>>({
    name: "",
    email: "",
    starRating: "",
    comment: "",
  });

  // Form validation that check whether each field has a valid value
  const validateForm = () => {
    let errors: Record<Fields, string> = {
      name: "",
      email: "",
      starRating: "",
      comment: "",
    };

    if (!name.match(lettersSpaceRegex))
      errors.name = "Please enter a valid name";

    if (!email.match(emailRegex))
      errors.email = "Please enter a valid email address";

    if (!starRating.match(startRatingRegex))
      errors.starRating = "Please select a rating";

    if (!comment.match(commentRegex))
      errors.comment = "Please introduce your feedback";

    setErrorObject(errors);

    // Check whether there are any errors in order to disable "Submit" button
    // Return boolean value to decide whether a POST request has to be submitted
    let hasNoErrorKeys = Object.values(errors).every((x) => x === "");
    if (!hasNoErrorKeys) {
      setSubmitButtonDisabled(!hasNoErrorKeys);
      return false;
    }
    return true;
  };

  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // 1. preventing default form behaviour
    event.preventDefault();

    // 2. validating the form before submission
    let successfulSubmission = validateForm();

    if (successfulSubmission) {
      // 3. sending a POST request
      let starRatingNumber = parseInt(starRating);
      await submitFeedbackHandler({
        name: name.trim(),
        email: email.trim(),
        starRating: starRatingNumber,
        comment: comment.trim(),
      });

      // 4. redirecting to the responses page
      router.push("/responses");
    }
  };

  return {
    errorObject,
    submitButtonDisabled,
    setSubmitButtonDisabled,
    handleSubmit,
  };
}

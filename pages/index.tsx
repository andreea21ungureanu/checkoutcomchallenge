import { useState } from "react";
import submitFeedbackHandler from "../helpers/handlers/submitFeedbackHandler";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import StarRating from "../components/StarRating";
import SubmitButton from "../components/Buttons/SubmitButton";
import NavBar from "../components/Layout/NavBar";
import { useRouter } from "next/router";
import FormError from "../components/FormError";
import { Fields } from "../types";
import {
  indexGridLeft,
  indexRootGrid,
  rootShadow,
  indexTextArea,
} from "../styles/globalPageStyles";
import {
  commentRegex,
  emailRegex,
  lettersSpaceRegex,
  startRatingRegex,
} from "../helpers/regexHelpers";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [starRating, setStarRating] = useState("");
  const [comment, setComment] = useState("");

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

  return (
    <div className="m-5">
      <NavBar title={"Feedback Form"} />
      <form noValidate className="space-y-6" onSubmit={handleSubmit}>
        <div className={rootShadow}>
          <div className={indexRootGrid}>
            <div className={indexGridLeft}>
              <Input
                label={"Name"}
                name={Fields.NAME}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value);
                  setSubmitButtonDisabled(false);
                }}
                type="text"
                value={name}
              />
              <FormError errorObject={errorObject} field={Fields.NAME} />

              <Input
                label={"Email address"}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(event.target.value);
                  setSubmitButtonDisabled(false);
                }}
                type="email"
                value={email}
                name={Fields.NAME}
              />
              <FormError errorObject={errorObject} field={Fields.EMAIL} />

              <StarRating
                label="Rating"
                name={Fields.STARRATING}
                setStarRating={setStarRating}
              />
              <FormError errorObject={errorObject} field={Fields.STARRATING} />
            </div>

            <div className={indexTextArea}>
              <TextArea
                label={"Comment"}
                placeholder={"Write your feedback here"}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setComment(event.target.value);
                  setSubmitButtonDisabled(false);
                }}
                value={comment}
              />
              <FormError errorObject={errorObject} field={Fields.COMMENT} />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <SubmitButton label="Submit" disabled={submitButtonDisabled} />
        </div>
      </form>
    </div>
  );
}

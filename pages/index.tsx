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
import useFormSubmission from "@/hooks/useFormSubmission";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [starRating, setStarRating] = useState("");
  const [comment, setComment] = useState("");

  const {
    errorObject,
    submitButtonDisabled,
    setSubmitButtonDisabled,
    handleSubmit,
  } = useFormSubmission(name, email, starRating, comment);

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
                onChange={setStarRating}
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

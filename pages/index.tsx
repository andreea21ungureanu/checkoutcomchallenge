import { useCallback, useEffect, useState } from "react";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import submitFeedbackHandler from "@/helpers/submitFeedbackHandler";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import StarRating from "@/components/StarRating";
import SubmitButton from "@/components/Buttons/SubmitButton";
import NavBar from "@/components/Layout/NavBar";
import { useRouter } from "next/router";
import { BsXCircleFill } from "react-icons/bs";
import FormError from "@/components/FormError";
import { Fields } from "@/types";

const inter = Inter({ subsets: ["latin"] });

// TODO: Move string to global constants
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

  // regex
  const lettersSpaceRegex = /^(?!\s+)[a-zA-Z.+ '-]+$/;
  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  const startRatingRegex = /^[1-5]$/;
  const commentRegex = /[\S\s]+[\S]+/;

  // TODO validate comment server side for crossscripting

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
    setSubmitButtonDisabled(Object.keys(errors).length != 0);
  };

  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateForm();

    // await submitFeedbackHandler({
    //   name,
    //   email,
    //   rating: 1,
    //   comment: "proasta",
    // });
    router.push("/responses");
  };

  // TODO set star rating form validator
  return (
    <div className="m-5">
      <NavBar title={"Feedback Form"} />
      <form noValidate className="space-y-6" onSubmit={handleSubmit}>
        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="grid grid-cols-3 gap-2">
              <Input
                label={"Name"}
                name={"name"}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value.trim());
                  setSubmitButtonDisabled(false);
                }}
                type="text"
                value={name}
              />
              <FormError errorObject={errorObject} field={Fields.NAME} />

              <Input
                label={"Email address"}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(event.target.value.trim());
                  setSubmitButtonDisabled(false);
                }}
                type="email"
                value={email}
                name="email"
              />
              <FormError errorObject={errorObject} field={Fields.EMAIL} />

              <StarRating
                label="Rating"
                name={"5StarRating"}
                setStarRating={setStarRating}
              />
              <FormError errorObject={errorObject} field={Fields.STARRATING} />
            </div>

            <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
              <TextArea
                label={"Comment"}
                description={"Write your feedback here"}
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

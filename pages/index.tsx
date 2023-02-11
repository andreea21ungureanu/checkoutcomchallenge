import { useEffect, useState } from "react";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import submitFeedbackHandler from "@/helpers/submitFeedbackHandler";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import StarRating from "@/components/StarRating";
import SubmitButton from "@/components/SubmitButton";

const inter = Inter({ subsets: ["latin"] });

// TODO: rename function from home to smth more relevant
export default function Home() {
  const [newFeedback, setNewFeedback] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    await submitFeedbackHandler({
      name: "tu",
      email: "esti",
      rating: 1,
      comment: "proasta",
    });
  };

  return (
    <form className="space-y-6">
      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="grid grid-cols-3 gap-6">
            <Input label={"Name"} />
            <Input label={"Email address"} />

            <StarRating label="Rating" name={"5StarRating"} />
          </div>

          <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
            <TextArea
              label={"Comment"}
              description={"Write your feedback here"}
              placeholder={"Write your feedback here"}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <SubmitButton label="Submit" onClick={handleSubmit} />
      </div>
    </form>
  );
}

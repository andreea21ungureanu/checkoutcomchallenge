import { useState } from "react";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import submitFeedbackHandler from "@/helpers/submitFeedbackHandler";

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
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => {
            setNewFeedback(event.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

import { useState } from "react";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

// TODO: rename function from home to smth more relevant
export default function Home() {
  const [newFeedback, setNewFeedback] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newFeedback }),
    };
    return fetch("/api/submitFeedback", requestOptions);
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

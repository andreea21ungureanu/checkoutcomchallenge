import { useEffect, useState } from "react";
import { Inter } from "@next/font/google";
import FeedbackChart from "@/components/FeedbackChart";
import FeedbackComments from "@/components/FeedbackComments";
import { BiArrowBack } from "react-icons/bi";
import BackButton from "@/components/Buttons/SubmitButton/BackButton";

const inter = Inter({ subsets: ["latin"] });

export default function ResponsesPage() {
  return (
    <>
      <BackButton />
      <FeedbackChart />
      <FeedbackComments />
    </>
  );
}

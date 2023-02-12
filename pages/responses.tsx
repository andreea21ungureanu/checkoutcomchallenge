import { useEffect, useState } from "react";
import { Inter } from "@next/font/google";
import FeedbackChart from "@/components/FeedbackChart";
import FeedbackComments from "@/components/FeedbackComments";
import { BiArrowBack } from "react-icons/bi";
import BackButton from "@/components/Buttons/BackButton";
import NavBar from "@/components/Layout/NavBar";
import Pagination from "@/components/Layout/Pagination";

const inter = Inter({ subsets: ["latin"] });

export default function ResponsesPage() {
  return (
    <div className="m-5">
      <NavBar title={"Feedback Results"} withLeftButton />
      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
        <FeedbackChart />
        <NavBar title={"Comments"} withRightButton />
        <FeedbackComments />
        <Pagination />
      </div>
    </div>
  );
}

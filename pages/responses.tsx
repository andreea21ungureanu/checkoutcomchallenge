import { useEffect, useState } from "react";
import { Inter } from "@next/font/google";
import FeedbackChart from "@/components/FeedbackChart";
import FeedbackComments from "@/components/FeedbackComments";
import { BiArrowBack } from "react-icons/bi";
import BackButton from "@/components/Buttons/BackButton";
import NavBar from "@/components/Layout/NavBar";
import Pagination from "@/components/Layout/Pagination";
import { Feedback } from "@/types";
import getFeedbackHandler from "@/helpers/getFeedbackHandler";

const inter = Inter({ subsets: ["latin"] });

export default function ResponsesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(4);

  const [comments, setComments] = useState<Array<Feedback>>([]);
  useEffect(() => {
    getFeedbackHandler().then((result) => setComments(result));
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = comments.slice(indexOfFirstRecord, indexOfLastRecord);
  const noOfPages = Math.ceil(comments.length / recordsPerPage);

  return (
    <div className="m-5">
      <NavBar title={"Feedback Results"} withLeftButton />
      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
        <FeedbackChart />
        <NavBar title={"Comments"} withRightButton />
        <FeedbackComments comments={currentRecords} />
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          items={noOfPages}
        />
      </div>
    </div>
  );
}

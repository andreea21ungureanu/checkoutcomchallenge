import { createContext, useEffect, useState } from "react";
import { Inter } from "@next/font/google";
import FeedbackChart from "@/components/FeedbackChart";
import FeedbackComments from "@/components/FeedbackComments";
import BackButton from "@/components/Buttons/BackButton";
import NavBar from "@/components/Layout/NavBar";
import { Feedback } from "@/types";
import getFeedbackHandler from "@/helpers/getFeedbackHandler";
import FilterButton from "@/components/Buttons/FilterButton";
import TextItem from "@/components/TextItem";

const inter = Inter({ subsets: ["latin"] });
export const ResetFilterContext = createContext(() => {});

export default function ResponsesPage() {
  const [comments, setComments] = useState<Array<Feedback>>([]);
  const [commentsRatingFilter, setCommentsRatingFilter] = useState("");

  useEffect(() => {
    getFeedbackHandler(commentsRatingFilter).then((result) =>
      setComments(result)
    );
  }, [commentsRatingFilter]);

  return (
    <div className="m-5">
      <NavBar title={"Feedback Results"} leftChild={<BackButton />} />
      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
        <FeedbackChart setCommentsRatingFilter={setCommentsRatingFilter} />
        <NavBar
          title={"Comments"}
          rightChild={
            <FilterButton onClick={() => setCommentsRatingFilter("")} />
          }
          leftChild={<TextItem starRating={commentsRatingFilter ?? null} />}
        />
        <FeedbackComments comments={comments} />
      </div>
    </div>
  );
}

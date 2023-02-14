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
import Spinner from "@/components/Spinner";

const inter = Inter({ subsets: ["latin"] });
export const ResetFilterContext = createContext(() => {});

export default function ResponsesPage() {
  const [comments, setComments] = useState<Array<Feedback>>([]);
  const [commentsRatingFilter, setCommentsRatingFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        getFeedbackHandler(commentsRatingFilter)
          .then((result) => setComments(result))
          .then(() => setIsLoading(false));
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, [commentsRatingFilter]);

  return isError ? (
    <h3> Error! Please try again later</h3>
  ) : (
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
        <FeedbackComments comments={comments} loadingState={isLoading} />
      </div>
    </div>
  );
}

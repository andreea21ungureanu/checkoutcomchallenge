import { createContext, useEffect, useState } from "react";
import FeedbackChart from "../components/FeedbackChart";
import FeedbackComments from "../components/FeedbackComments";
import BackButton from "../components/Buttons/BackButton";
import NavBar from "../components/Layout/NavBar";
import { Feedback } from "../types";
import getFeedbackHandler from "../helpers/handlers/getFeedbackHandler";
import FilterButton from "../components/Buttons/FilterButton";
import TextItem from "../components/TextItem";
import { rootShadow } from "../styles/globalPageStyles";
import useFeedbackFetcher from "@/hooks/useFeedbackFetcher";

export const ResetFilterContext = createContext(() => {});

export default function ResponsesPage() {
  const {
    isError,
    isLoading,
    commentsRatingFilter,
    setCommentsRatingFilter,
    comments,
  } = useFeedbackFetcher();

  return isError ? (
    <h3> Error! Please try again later</h3>
  ) : (
    <div className="m-5">
      <NavBar title={"Feedback Results"} leftChild={<BackButton />} />
      <div className={rootShadow}>
        <FeedbackChart onFilter={setCommentsRatingFilter} />
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

import { Feedback } from "../types";
import { useEffect, useState } from "react";
import getFeedbackHandler from "../helpers/handlers/getFeedbackHandler";

export default function useFeedbackFetcher() {
  const [comments, setComments] = useState<Array<Feedback>>([]);
  const [commentsRatingFilter, setCommentsRatingFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Fetching feedback results
  useEffect(() => {
    const fetchData = async () => {
      try {
        const commentsData = await getFeedbackHandler(commentsRatingFilter);
        setComments(commentsData);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, [commentsRatingFilter]);

  return {
    isError,
    isLoading,
    commentsRatingFilter,
    setCommentsRatingFilter,
    comments,
  };
}

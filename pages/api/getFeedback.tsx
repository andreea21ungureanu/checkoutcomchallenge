import type { NextApiRequest, NextApiResponse } from "next";
import { feedbackProcessor } from "../../helpers/feedbackProcessor";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let reqQuery = req.query;
  const response = feedbackProcessor.getValues(reqQuery);
  return res.status(200).json(response);
}

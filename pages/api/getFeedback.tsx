import type { NextApiRequest, NextApiResponse } from "next";
import { feedbackProcessor } from "../../helpers/feedbackProcessor";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = feedbackProcessor.getAll();
  return res.status(200).json(response);
}

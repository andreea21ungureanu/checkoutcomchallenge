import type { NextApiRequest, NextApiResponse } from "next";
import { feedbackProcessor } from "../../helpers/feedbackProcessor";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, rating, comment } = req.body;

  if (req.body) {
    console.log(req.body);
    await feedbackProcessor.create({ name, email, rating, comment });
    res.status(200).json("Feedback submitted");
  } else {
    res.status(400);
  }
}

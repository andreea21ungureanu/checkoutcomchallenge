import getFeedbackHandler from "@/helpers/getFeedbackHandler";
import {
  commentHeaderStyle,
  listRootStyle,
  previewStyle,
  senderStyle,
  subjectStyle,
  listItemStyle,
} from "./styles";
import { useEffect, useState } from "react";
import { Feedback, FeedbackCommentsProps } from "@/types";

export default function FeedbackComments({ comments }: FeedbackCommentsProps) {
  return (
    <ul role="list" className={listRootStyle}>
      {comments.map((message, idx) => (
        <li key={idx} className={listItemStyle}>
          <div className={commentHeaderStyle}>
            <a href="#" className="block focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className={senderStyle}>{message.name}</p>
              <p className={subjectStyle}>{"message.subject"}</p>
            </a>
          </div>
          <div className="mt-1">
            <p className={previewStyle}>{message.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

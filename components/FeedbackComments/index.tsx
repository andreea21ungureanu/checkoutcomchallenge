import {
  commentHeaderStyle,
  listRootStyle,
  previewStyle,
  senderStyle,
  subjectStyle,
  listItemStyle,
} from "./styles";

export default function FeedbackComments() {
  const messages = [
    {
      id: 1,
      subject: "Velit placeat sit ducimus non sed",
      sender: "Gloria Roberston",
      time: "1d ago",
      datetime: "2021-01-27T16:35",
      preview:
        "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
    {
      id: 2,
      subject: "Velit placeat sit ducimus non sed",
      sender: "Gloria Roberston",
      time: "1d ago",
      datetime: "2021-01-27T16:35",
      preview:
        "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
  ];

  return (
    <ul role="list" className={listRootStyle}>
      {messages.map((message) => (
        <li key={message.id} className={listItemStyle}>
          <div className={commentHeaderStyle}>
            <a href="#" className="block focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className={senderStyle}>{message.sender}</p>
              <p className={subjectStyle}>{message.subject}</p>
            </a>
          </div>
          <div className="mt-1">
            <p className={previewStyle}>{message.preview}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

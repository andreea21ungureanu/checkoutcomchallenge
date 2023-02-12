import { BiArrowBack } from "react-icons/bi";

// TODO: Combine the two buttons into one skeleton
export default function BackButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <BiArrowBack className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
      Button text
    </button>
  );
}

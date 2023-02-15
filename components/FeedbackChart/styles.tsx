export const root = [
  "grid",
  "grid-cols-3",
  "gap-4",
  "cursor-pointer",
  "focus:ring-2",
  "focus:ring-inset",
  "focus:ring-indigo-600",
  "hover:bg-gray-50",
].join(" ");

export const feedbackAvgRoot = ["text-center", "mb-5"].join(" ");

export const feedbackAvgBlockShadow = [
  "inline-block",
  "bg-white",
  "px-4",
  "py-5",
  "shadow-md",
  "sm:rounded-lg",
  "sm:p-6",
].join(" ");

export const starBase = [
  "mt-2",
  "text-sm",
  "font-medium",
  "text-gray-900",
  "flex",
].join(" ");

export const starText = [starBase, "justify-end"].join(" ");

export const percentageText = [starBase, "justify-start"].join(" ");

export const averageText = [starText, "ml-3"].join(" ");

export const averageTotal = [starBase, "text-slate-500", "justify-center"].join(
  " "
);

export const chartBarContainer = [
  "overflow-hidden",
  "rounded-full",
  "bg-gray-200",
].join(" ");

export const chartBar = ["h-2", "rounded-full", "bg-indigo-600"].join(" ");

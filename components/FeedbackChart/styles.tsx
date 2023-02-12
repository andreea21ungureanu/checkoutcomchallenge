export const root = ["grid", "grid-cols-3", "gap-4"].join(" ");
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

export const starTextStyle = [starBase, "justify-end"].join(" ");

export const percentageTextStyle = [starBase, "justify-start"].join(" ");

export const averageTextStyle = [starTextStyle, "ml-3"].join(" ");

export const averageTotalStyle = [
  starBase,
  "text-slate-500",
  "justify-center",
].join(" ");

export const chartBarContainerStyle = [
  "overflow-hidden",
  "rounded-full",
  "bg-gray-200",
].join(" ");

export const chartBarStyle = ["h-2", "rounded-full", "bg-indigo-600"].join(" ");

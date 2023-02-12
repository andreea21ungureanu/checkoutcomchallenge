export const navBarStyle = [
  "text-xs",
  "font-bold",
  "text-black",
  "flex-1",
  "text-center",
  "items-center",
  "self-center",
  "sm:text-xl",
].join(" ");

export const rootStyle = ["flex my-5"].join(" ");

export const pagNavRoot = [
  "flex",
  "items-center",
  "justify-between",
  "border-t",
  "border-gray-200",
  "bg-white",
  "px-4",
  "py-3",
  "sm:px-6",
].join(" ");

const helperStyleRoot = ["flex", "flex-1"].join(" ");

export const helperStyleLeft = [helperStyleRoot, "justify-start"].join(" ");

export const helperStyleRight = [helperStyleRoot, "justify-end"].join(" ");

export const pagControlsContainer = [
  "flex",
  "flex-1",
  "justify-between",
  "sm:justify-end",
].join(" ");

export const pagControlsBase = [
  "relative",
  "inline-flex",
  "items-center",
  "rounded-md",
  "border",
  "border-gray-300",
  "bg-white",
  "px-4",
  "py-2",
  "text-sm",
  "font-medium",
  "text-gray-700",
  "hover:bg-gray-50",
].join(" ");

export const pagControlsRight = [pagControlsBase, "ml-3"].join(" ");

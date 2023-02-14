import { PaginationProps } from "@/types";
import {
  pagControlsBase,
  pagControlsContainer,
  pagControlsRight,
  pagNavRoot,
} from "./styles";
import { useState } from "react";

export default function Pagination({
  items,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const nextPage = () => {
    if (currentPage !== items) currentPage++;
  };
  const prevPage = () => {
    if (currentPage !== 1) currentPage--;
  };

  console.log(currentPage);

  return (
    <nav className={pagNavRoot} aria-label="Pagination">
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">4</span> of{" "}
          <span className="font-medium">{items}</span> results
        </p>
      </div>
      <div className={pagControlsContainer}>
        <a className={pagControlsBase} onClick={nextPage}>
          Previous
        </a>
        <a className={pagControlsRight} onClick={prevPage}>
          Next
        </a>
      </div>
    </nav>
  );
}

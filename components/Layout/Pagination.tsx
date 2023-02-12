import {
  pagControlsBase,
  pagControlsContainer,
  pagControlsRight,
  pagNavRoot,
} from "./styles";

export default function Pagination() {
  return (
    <nav className={pagNavRoot} aria-label="Pagination">
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">10</span> of{" "}
          <span className="font-medium">20</span> results
        </p>
      </div>
      <div className={pagControlsContainer}>
        <a href="#" className={pagControlsBase}>
          Previous
        </a>
        <a href="#" className={pagControlsRight}>
          Next
        </a>
      </div>
    </nav>
  );
}

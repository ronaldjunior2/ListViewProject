import { Pagination as BootstrapPagination } from "react-bootstrap";
export function Pagination({
  onChange,
  itemsPerPage,
  totalItems,
  currentPage,
}: PaginationProps) {
  let items = [];
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);

  for (let pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
    items.push(
      <BootstrapPagination.Item
        data-testid={`pagination-item-${pageNumber}`}
        key={pageNumber}
        active={pageNumber === currentPage}
        onClick={() => {
          onChange(pageNumber);
        }}
        data-page={pageNumber}
      >
        {pageNumber}
      </BootstrapPagination.Item>
    );
  }
  return (
    <BootstrapPagination data-testid="pagination-wrapper" className="mb-0">
      {items}
    </BootstrapPagination>
  );
}

type PaginationProps = {
  onChange: (pageNumber: number) => void;
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
};

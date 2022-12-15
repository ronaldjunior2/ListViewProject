import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pagination } from "../../components/Pagination";

describe("Pagination", () => {
  test("Should render the correct numbers of pagination items", () => {
    const itemsPerPage = 10;
    const total = 50;
    const { getByTestId } = render(
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={total}
        currentPage={1}
        onChange={() => {}}
      />
    );

    expect(getByTestId("pagination-wrapper").children.length).toBe(5);
  });

  test("The number of pages must round up each ratio of the total and the number of page elements is decimal", () => {
    const itemsPerPage = 5;
    const total = 8;
    const { getByTestId } = render(
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={total}
        currentPage={1}
        onChange={() => {}}
      />
    );

    expect(getByTestId("pagination-wrapper").children.length).toBe(2);
  });

  test("should render the correct pagination numbering in ascending order", () => {
    const itemsPerPage = 10;
    const total = 50;
    const { getByTestId } = render(
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={total}
        currentPage={0}
        onChange={() => {}}
      />
    );
    const paginationWrapper = getByTestId("pagination-wrapper");
    const paginationItems = Array.from(paginationWrapper.children);

    const paginationNumbers = paginationItems.map((item) => item.textContent);

    expect(paginationNumbers).toEqual(["1", "2", "3", "4", "5"]);
  });

  test("should call onClick function with correct page number", async () => {
    const itemsPerPage = 10;
    const total = 50;
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={total}
        onChange={onChange}
        currentPage={1}
      />
    );

    const paginationItem = getByTestId("pagination-item-3");
    await userEvent.click(paginationItem);

    expect(onChange).toHaveBeenCalledWith(3);
  });

  test("Should pagination active class at the current page position", () => {
    const itemsPerPage = 10;
    const total = 50;
    const currentPage = 2;
    const { getByTestId } = render(
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={total}
        currentPage={currentPage}
        onChange={() => {}}
      />
    );

    const paginationWrapper = getByTestId("pagination-wrapper").children[1];

    expect(paginationWrapper).toHaveClass("active");
  });
});

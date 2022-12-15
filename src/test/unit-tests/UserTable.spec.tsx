import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserTable } from "../../components";
import { createManyUsersInfos } from "../fakes/createUsersFakes";

describe("UserTable", () => {
  test("Should render the correctly numbers of table rows", () => {
    const data = createManyUsersInfos(10);
    const { getByTestId } = render(
      <UserTable
        data={data}
        currentPage={1}
        itemsPerPage={5}
        onAddressDetailsClick={() => {}}
      />
    );

    expect(getByTestId("user-table-body").children.length).toBe(5);
  });

  test("Should render the correct users infos on the table", () => {
    const data = createManyUsersInfos(10);
    const { getByTestId } = render(
      <UserTable
        data={data}
        currentPage={1}
        itemsPerPage={5}
        onAddressDetailsClick={() => {}}
      />
    );

    const tableBody = getByTestId("user-table-body");
    const tableRows = Array.from(tableBody.children);

    const tableRowsInfos = tableRows.map((row) => {
      const tableCells = Array.from(row.children);
      return tableCells.map((cell) => cell.textContent);
    });

    const expectedTableRowsInfos = data.results
      .slice(0, 5)
      .map((result) => [
        "",
        result.name.first,
        result.name.last,
        result.email,
        result.phone,
        "",
      ]);

    expect(tableRowsInfos).toEqual(expectedTableRowsInfos);
  });

  test("Should call onClick function with correct user address", async () => {
    const data = createManyUsersInfos(10);
    const onAddressClick = jest.fn();
    const userIndexToCheck = 2;
    const { getByTestId } = render(
      <UserTable
        data={data}
        currentPage={1}
        itemsPerPage={5}
        onAddressDetailsClick={onAddressClick}
      />
    );

    const addressDetailsBtn = getByTestId(
      `address-details-btn-${userIndexToCheck}`
    );

    await userEvent.click(addressDetailsBtn);

    expect(onAddressClick).toHaveBeenCalledWith({
      userName:
        data.results[userIndexToCheck].name.first +
        " " +
        data.results[userIndexToCheck].name.last,
      street: data.results[userIndexToCheck].location.street.name,
      city: data.results[userIndexToCheck].location.city,
      state: data.results[userIndexToCheck].location.state,
      postalCode: data.results[userIndexToCheck].location.postcode,
    });
  });

  test("Should render correct header titles", () => {
    const data = createManyUsersInfos(10);
    const { getByTestId } = render(
      <UserTable
        data={data}
        currentPage={1}
        itemsPerPage={5}
        onAddressDetailsClick={() => {}}
      />
    );

    const tableHeader = getByTestId("user-table-headers");
    const tableHeaderCells = Array.from(tableHeader.children);

    const tableHeaderTitles = tableHeaderCells.map((cell) => cell.textContent);

    expect(tableHeaderTitles).toEqual([
      "",
      "First Name",
      "Last Name",
      "Email",
      "Phone",
      "Address Details",
    ]);
  });
});

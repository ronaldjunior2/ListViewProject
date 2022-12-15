import { Table } from "react-bootstrap";
import { FiEye } from "react-icons/fi";
import { UserAddress, UsersMainInfos } from "../protocols";

export function UserTable({
  data,
  onAddressDetailsClick,
  currentPage,
  itemsPerPage,
}: UserTableProps) {
  return (
    <Table hover className="shadow" responsive>
      <thead className="p-5">
        <tr
          className="text-center align-middle bg-light"
          data-testid="user-table-headers"
        >
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address Details</th>
        </tr>
      </thead>
      <tbody data-testid="user-table-body">
        {data?.results
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((result, index) => (
            <tr
              className="text-center"
              key={result.name.first + " " + result.name.last}
            >
              <td>
                <img src={result.picture.medium} className="rounded-circle" />
              </td>
              <td>{result.name.first}</td>
              <td>{result.name.last}</td>
              <td>{result.email}</td>
              <td>{result.phone}</td>
              <td>
                {
                  <span
                    className="fs-4"
                    role="button"
                    data-testid={`address-details-btn-${index}`}
                    onClick={() => {
                      onAddressDetailsClick({
                        userName: result.name.first + " " + result.name.last,
                        street: result.location.street.name,
                        city: result.location.city,
                        state: result.location.state,
                        postalCode: result.location.postcode,
                      });
                    }}
                  >
                    <FiEye />
                  </span>
                }
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
type UserTableProps = {
  data: UsersMainInfos | null;
  onAddressDetailsClick: (userAddress: UserAddress) => void;
  currentPage: number;
  itemsPerPage: number;
};

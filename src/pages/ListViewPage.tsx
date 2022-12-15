import { useState } from "react";
import {
  AddressModal,
  LoadIndicator,
  Pagination,
  Select,
  UserTable,
} from "../components";
import { useApi } from "../hooks";

import { UserAddress, UsersMainInfos } from "../protocols";

function ListViewPage() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [userAddress, setUserAddress] = useState<UserAddress>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const { data, error, loading } = useApi<UsersMainInfos>(
    "https://randomuser.me/api/?results=50"
  );

  const onAddressDetailsClick = (userAddress: UserAddress) => {
    setUserAddress(userAddress);
    setShowModal(true);
  };

  const onPaginationChange = (itemsPerPageSelect: number) => {
    setCurrentPage(1);
    setItemsPerPage(itemsPerPageSelect);
  };
  if (loading)
    return (
      <div className="container-fluid d-flex min-vh-100  align-items-center justify-content-center">
        <LoadIndicator />
      </div>
    );

  if (error)
    return (
      <div className="container-fluid d-flex min-vh-100  align-items-center justify-content-center">
        "Ops something went wrong, please try again later or reload the page"
      </div>
    );

  return (
    <div className="container mt-3 mb-5">
      <div className="row">
        <div className="col-md-4 col-sm-5 d-flex align-items-center  justify-content-end justify-content-lg-start ">
          <span className="me-3">Pages per page:</span>
          <Select
            options={[5, 10, 30, 50]}
            setValue={onPaginationChange}
            value={itemsPerPage}
          />
        </div>
        <div className="col-md-8 d-flex align-items-center justify-content-end">
          <span className="me-3 d-sm-block d-none">Pages:</span>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={50}
            currentPage={currentPage}
            onChange={setCurrentPage}
          />
        </div>
      </div>
      <UserTable
        data={data}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onAddressDetailsClick={onAddressDetailsClick}
      />
      <AddressModal
        show={showModal}
        handleClose={setShowModal}
        userAddress={userAddress}
      />
    </div>
  );
}

export default ListViewPage;

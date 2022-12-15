import { render } from "@testing-library/react";

import { faker } from "@faker-js/faker";
import { AddressModal } from "../../components/AddressModal";
import { UserAddress } from "../../protocols";

describe("AddressModal", () => {
  test("Should render the correct address props", () => {
    const userAddressProps = {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      postalCode: faker.address.zipCode(),
      userName: faker.name.firstName(),
    } as UserAddress;
    const { getByTestId } = render(
      <AddressModal
        userAddress={userAddressProps}
        handleClose={() => {}}
        show={true}
      />
    );

    const addressModalBody = getByTestId("address-modal-body");
    const addressModalBodyText = addressModalBody.textContent;

    expect(addressModalBodyText).toContain(userAddressProps.street);
    expect(addressModalBodyText).toContain(userAddressProps.city);
    expect(addressModalBodyText).toContain(userAddressProps.state);
    expect(addressModalBodyText).toContain(userAddressProps.postalCode);
  });

  test("Should render the correct user name in the head", () => {
    const userAddressProps = {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      postalCode: faker.address.zipCode(),
      userName: faker.name.firstName(),
    } as UserAddress;
    const { getByText } = render(
      <AddressModal
        userAddress={userAddressProps}
        handleClose={() => {}}
        show={true}
      />
    );

    const addressModalTitle = getByText(`${userAddressProps.userName}/Address`);
    expect(addressModalTitle).toBeInTheDocument();
  });

  test("Should call close button function with false value", () => {
    const userAddressProps = {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      postalCode: faker.address.zipCode(),
      userName: faker.name.firstName(),
    } as UserAddress;
    const handleClose = jest.fn();
    const { getByText } = render(
      <AddressModal
        userAddress={userAddressProps}
        handleClose={handleClose}
        show={true}
      />
    );

    const closeButton = getByText("Close");
    closeButton.click();
    expect(handleClose).toHaveBeenCalledWith(false);
  });
});

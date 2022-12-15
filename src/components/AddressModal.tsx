import { Dispatch, SetStateAction } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { FiMapPin } from "react-icons/fi";
import { UserAddress } from "../protocols";

export function AddressModal({ show, handleClose, userAddress }: ModalProps) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <span className="mr-2">{`${userAddress?.userName}/Address`}</span>
          <FiMapPin />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body data-testid="address-modal-body">
        {
          <>
            <p>
              <span className="fst-italic me-2">Street: </span>
              <span className="fw-bold"> {userAddress?.street}</span>
            </p>
            <p>
              <span className="fst-italic me-2">City: </span>
              <span className="fw-bold">{userAddress?.city}</span>
            </p>
            <p>
              <span className="fst-italic me-2">State: </span>
              <span className="fw-bold"> {userAddress?.state}</span>
            </p>
            <p>
              <span className="fst-italic me-2">Postal Code: </span>
              <span className="fw-bold"> {userAddress?.postalCode}</span>
            </p>
          </>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            handleClose(false);
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

type ModalProps = {
  show: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
  userAddress?: UserAddress;
};

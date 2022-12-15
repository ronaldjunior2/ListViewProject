import Spinner from "react-bootstrap/Spinner";

export function LoadIndicator() {
  return (
    <div className="d-flex flex-column align-items-center">
      <div>
        <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
      </div>
      <span>LOADING</span>
    </div>
  );
}

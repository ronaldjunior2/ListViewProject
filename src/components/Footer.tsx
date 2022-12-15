import { FiHeart } from "react-icons/fi";

export function Footer() {
  return (
    <div
      className="bg-light d-flex align-items-center justify-content-center fixed-bottom"
      style={{ height: "70px" }}
    >
      <span>
        Made with love by ronald junior
        <span>
          <FiHeart />
        </span>{" "}
      </span>
    </div>
  );
}

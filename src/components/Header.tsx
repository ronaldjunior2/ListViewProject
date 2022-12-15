import { FiHeart } from "react-icons/fi";

export function Header() {
  return (
    <div
      className="bg-dark d-flex align-items-center justify-content-center text-light"
      style={{ height: "70px" }}
    >
      <span>
        Made with love by Ronald Junior
        <span>
          <FiHeart />
        </span>{" "}
      </span>
    </div>
  );
}

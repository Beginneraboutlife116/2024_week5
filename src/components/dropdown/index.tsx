import { useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

type LinkDropdownProps = {
  className?: string;
  title: string;
  data: Array<{ id: number; to: string; content: React.ReactElement | string }>;
};

export default function LinkDropdown({
  className,
  title,
  data,
}: LinkDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={clsx("dropdown", className)}>
      <button
        className={clsx("btn p-0 border-0 fw-bold dropdown-toggle", {
          show: isDropdownOpen,
        })}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded={isDropdownOpen}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        data-bs-offset="10, 10">
        {title}
      </button>
      <ul
        className={clsx("dropdown-menu py-0 fs-8", {
          show: isDropdownOpen,
        })}>
        {data.map(({ id, to, content }, index) => (
          <li key={id} className={clsx({ "border-top": index !== 0 })}>
            <NavLink className="dropdown-item p-3" to={to}>
              {content}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "bootstrap/js/dist/dropdown";
import clsx from "clsx";

type LinkDropdownProps = {
  className?: string;
  title: string;
  data: { id: number; to: string; content: React.ReactElement | string }[];
  autoClose?: boolean | "outside" | "inside";
  offset?: [number, number];
};

export default function LinkDropdown({
  className,
  data,
  title,
  offset,
  autoClose = false,
}: LinkDropdownProps) {
  const dropdownMenuRef = useRef(null);
  const bootstrapDropdownRef = useRef<Dropdown | null>(null);

  useEffect(() => {
    if (dropdownMenuRef.current) {
      bootstrapDropdownRef.current = new Dropdown(dropdownMenuRef.current);
    }

    return () => {
      if (bootstrapDropdownRef.current) {
        bootstrapDropdownRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className={clsx("dropdown", className)}>
      <button
        className="btn p-0 border-0 fw-bold dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close={autoClose}
        data-bs-offset={offset}>
        {title}
      </button>
      <ul className="dropdown-menu py-0 fs-8" ref={dropdownMenuRef}>
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

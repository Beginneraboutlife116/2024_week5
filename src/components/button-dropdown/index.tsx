import { useRef, useEffect } from "react";
import Dropdown from "bootstrap/js/dist/dropdown";
import clsx from "clsx";

type ButtonDropdownProps = {
  className?: string;
  title: string | React.ReactNode;
  data: { id: number; content: React.ReactElement | string }[];
  autoClose?: boolean | "outside" | "inside";
  offset?: [number, number];
};

export default function ButtonDropdown({
  className,
  data,
  title,
  offset,
  autoClose = false,
}: ButtonDropdownProps) {
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
      <ul className="dropdown-menu py-0" ref={dropdownMenuRef}>
        {data.map(({ id, content }, index) => (
          <li key={id} className={clsx({ "border-top": index !== 0 })}>
            <button type="button" className="dropdown-item">
              {content}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

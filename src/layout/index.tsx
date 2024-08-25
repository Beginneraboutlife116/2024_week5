import { NavLink, Outlet } from "react-router-dom";

import {
  LogoSvg,
  DashboardSvg,
  DashboardActiveSvg,
  QuestionSvg,
  QuestionActiveSvg,
  AssignmentSvg,
  AssignmentActiveSvg,
  CourseSvg,
  CourseActiveSvg,
  AdminSvg,
  AdminActiveSvg,
  SettingsSvg,
  SettingsActiveSvg,
} from "../assets/images";
import clsx from "clsx";

const linkData = [
  {
    to: "/dashboard",
    icon: DashboardSvg,
    activeIcon: DashboardActiveSvg,
    text: "Dashboard",
  },
  {
    to: "/question",
    icon: QuestionSvg,
    activeIcon: QuestionActiveSvg,
    text: "Question",
  },
  {
    to: "/assignment",
    icon: AssignmentSvg,
    activeIcon: AssignmentActiveSvg,
    text: "Assignment",
  },
  {
    to: "/course",
    icon: CourseSvg,
    activeIcon: CourseActiveSvg,
    text: "Course",
  },
  {
    to: "/admin",
    icon: AdminSvg,
    activeIcon: AdminActiveSvg,
    text: "Admin",
  },
  {
    to: "/settings",
    icon: SettingsSvg,
    activeIcon: SettingsActiveSvg,
    text: "Settings",
  },
];

export default function Layout() {
  return (
    <main className="d-flex min-vh-100">
      <aside className="bg-light py-6 ps-6 d-flex flex-column flex-shrink-0 | sidebar">
        <div className=" mb-6">
          <img src={LogoSvg} className="img-fluid" alt="" />
        </div>
        <ul className="list-unstyled text-dark d-flex flex-column row-gap-4 fw-bold">
          {linkData.map(({ to, icon, activeIcon, text }) => (
            <li key={to} className="position-relative ms-n6 ps-6">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  clsx(
                    "icon-link text-decoration-none",
                    isActive ? "link-primary" : "link-dark",
                    { active: isActive }
                  )
                }
                children={({ isActive }) => {
                  if (isActive) {
                    return (
                      <>
                        <img src={activeIcon} alt={text} />
                        <span>{text}</span>
                      </>
                    );
                  }

                  return (
                    <>
                      <img src={icon} alt={text} />
                      <span>{text}</span>
                    </>
                  );
                }}
              />
            </li>
          ))}
        </ul>
        <div className="d-flex align-items-center mt-auto">
          <div className="ratio ratio-1x1 me-4 | avatar">
            <img
              src="https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=2000&q=80"
              alt="Andy Chen"
              className="img-fluid rounded-circle object-fit-cover"
            />
          </div>
          <div className="d-grid">
            <span className="fw-bold">Andy Chen</span>
            <span className="fs-7 text-secondary">andy0401@mail.com</span>
          </div>
        </div>
      </aside>
      <section className="flex-grow-1 px-4">
        <Outlet />
      </section>
    </main>
  );
}

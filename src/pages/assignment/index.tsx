import { Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import clsx from "clsx";

import LinkDropdown from "../../components/link-dropdown";

import {
  SearchSvg,
  NotificationSvg,
  NotificationActiveSvg,
} from "../../assets/images";

import { AllCourses, AllMessages } from "../../api";
import { PREFIX_CLASS } from "./utils";

type LoaderData = {
  allCourses: AllCourses | [];
  allMessages: AllMessages | [];
};

export default function Assignment() {
  const data = useLoaderData();
  const { allCourses, allMessages } = data as LoaderData;

  const modifiedCourses = allCourses.map((course) => {
    return {
      ...course,
      to: "/course/" + course.id,
      content: course.title,
    };
  });

  const modifiedMessages = allMessages.map((message) => {
    return {
      ...message,
      to: "./" + message.id,
      content: (
        <>
          <header className="d-flex justify-content-between">
            <span>{message.title}</span>
            <span>{message.time}</span>
          </header>
          <div className="d-flex justify-content-between align-items-end">
            <span className="fs-6">{message.content}</span>
            <span className="text-secondary">{message.name}</span>
          </div>
        </>
      ),
    };
  });

  return (
    <div className={clsx("container", PREFIX_CLASS)}>
      <header className="py-6 d-flex align-items-center">
        <h1 className="fs-4 me-7">Assignment</h1>

        <LinkDropdown
          data={modifiedCourses}
          title="All Courses"
          autoClose="outside"
        />

        <div className="ms-auto">
          <button type="button" className="btn me-5 p-0 border-0">
            <img src={SearchSvg} alt="search" />
          </button>
          <button type="button" className="btn p-0 border-0">
            <img
              src={allMessages.length ? NotificationActiveSvg : NotificationSvg}
              alt="notification"
            />
          </button>
        </div>
      </header>
      <div className="row justify-content-between">
        <div className="col-auto">
          <LinkDropdown
            className={`${PREFIX_CLASS}__dropdown`}
            data={modifiedMessages}
            title={`All (${modifiedMessages.length})`}
            offset={[0, -4]}
          />
        </div>
        <section className="col-8">
          <Outlet />
        </section>
      </div>
    </div>
  );
}

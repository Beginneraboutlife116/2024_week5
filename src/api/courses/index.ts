import { allCourses } from "./data";

export function getAllCourses() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allCourses);
    }, 0);
  });
}

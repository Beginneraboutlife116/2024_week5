import { getAllCourses } from "../../api/courses";
import { getAllMessages } from "../../api/messages";

export const PREFIX_CLASS = "assignment";

export async function loader() {
  const allCourses = await getAllCourses();
  const allMessages = await getAllMessages();
  return { allCourses, allMessages };
}

import { allMessages } from "./data";

export function getAllMessages() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allMessages);
    }, 0);
  });
}

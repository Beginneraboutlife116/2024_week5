export type AllMessages = {
  id: number;
  title: string;
  time: string;
  content: string;
  name: string;
}[];

export const allMessages: AllMessages = [
  {
    id: 1,
    title: "Chapter Assignment 2",
    time: "4 hrs ago",
    content: "Please check this file…",
    name: "Emily Wang",
  },
  {
    id: 2,
    title: "Chapter Assignment 1",
    time: "12 hrs ago",
    content: "My Homework",
    name: "David Xu",
  },
  {
    id: 3,
    title: "Final Assignment",
    time: "18 hrs ago",
    content: "Have a problem with this…",
    name: "Tony Wei",
  },
  {
    id: 4,
    title: "Final Assignment",
    time: "19 hrs ago",
    content: "Did I do it right?",
    name: "Christina Lin",
  },
];

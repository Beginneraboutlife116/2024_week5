import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Layout from "./layout";

import Dashboard from "./pages/dashboard";

import Assignment from "./pages/assignment";
import { loader as assignmentLoader } from "./pages/assignment/utils";

import AssignmentCards from "./pages/assignment/cards";

import Course from "./pages/course";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/assignment",
        loader: assignmentLoader,
        element: <Assignment />,
        children: [
          {
            path: ":id",
            element: <AssignmentCards />,
          },
        ],
      },
      {
        path: "/course",
        element: <Course />,
        children: [
          {
            path: ":id",
            element: <Course />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "../middleware/protectRouter";

const Unauthorized = lazy(() => import("../pages/Unauthorized"));
const Loading = lazy(() =>
  import("../components/").then((module) => ({ default: module.Loading }))
);

const Home = lazy(() => import("../pages/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute redirectTo="/Unauthorized" requiredRoles={[]}>
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      </ProtectedRoute>
    ),
  },
  {
    path: "Unauthorized",
    element: (
      <Suspense fallback={<Loading />}>
        <Unauthorized />
      </Suspense>
    ),
  },
  {
    path: "/*",
    element: <div>404 not found</div>,
  },
]);

export { RouterProvider, router };

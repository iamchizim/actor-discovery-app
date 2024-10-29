import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ActorDiscoveryApp from "./components/ActorDiscoveryApp";
import NotFoundPage from "./pages/NotFoundPage";
import ActorDetails from "./pages/ActorDetails";
const router = createBrowserRouter([
  { path: "/", element: <ActorDiscoveryApp />, errorElement: <NotFoundPage /> },
  {
    path: "/ActorDetails/:actorId",
    element: <ActorDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

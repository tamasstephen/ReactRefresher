import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Details from "./Details";

const router = createBrowserRouter([
  {
    element: (
      <>
        <h1>Adopt me!</h1>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <SearchParams />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);

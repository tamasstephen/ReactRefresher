import { createRoot } from "react-dom/client";
import SearchParams from "./components/SearchParams";
import Root from "./Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./components/Details";

const router = createBrowserRouter([
  {
    element: <Root />,
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

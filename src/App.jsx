import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import Navigation from "./Navigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./Details";

const router = createBrowserRouter([
  {
    element: <Navigation />,
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

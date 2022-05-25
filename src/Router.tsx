import { Route, ReactLocation } from "@tanstack/react-location";
import Home from "@/pages/Home";
import GraphDetail from "@/pages/GraphDetail";

// const history = createHashHistory();
export const location = new ReactLocation();

export const routes: Route[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "graph",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ":id",
        element: <GraphDetail />,
      },
    ],
  },
];

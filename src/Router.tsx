import { Route, ReactLocation } from "@tanstack/react-location";
import Home from "@/pages/Home";
import Graph from "@/pages/Graph";
import GraphDetail from "@/pages/GraphDetail";

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
        element: <Graph />,
      },
      {
        path: "detail",
        element: <GraphDetail />,
      },
    ],
  },
];

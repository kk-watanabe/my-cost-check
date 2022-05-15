import { VFC } from "react";
import { Router, Outlet } from "@tanstack/react-location";
import { routes, location } from "./Router";

const App: VFC = () => {
  return (
    <Router routes={routes} location={location}>
      <Outlet />
    </Router>
  );
};

export default App;

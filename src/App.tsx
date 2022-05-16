import { VFC } from "react";
import { Router, Outlet } from "@tanstack/react-location";
import { routes, location } from "./Router";

import { FirebaseProvider } from "@/providers/FirebaseProvider";
import { UserProvider } from "@/providers/UserProvider";

const App: VFC = () => {
  return (
    <FirebaseProvider>
      <UserProvider>
        <Router routes={routes} location={location}>
          <Outlet />
        </Router>
      </UserProvider>
    </FirebaseProvider>
  );
};

export default App;

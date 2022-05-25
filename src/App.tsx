import React from "react";
import { Router, Outlet } from "@tanstack/react-location";
import { routes, location } from "@/Router";

import { FirebaseProvider } from "@/providers/FirebaseProvider";
import { UserProvider } from "@/providers/UserProvider";

import Layout from "@/components/layout/Layout";

const App = () => {
  return (
    <FirebaseProvider>
      <UserProvider>
        <Router routes={routes} location={location}>
          <Layout>
            <Outlet />
          </Layout>
        </Router>
      </UserProvider>
    </FirebaseProvider>
  );
};

export default App;

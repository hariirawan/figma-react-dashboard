import React from "react";

import Main from "../components/Main/Main";
import SideBar from "../components/Sidebar/Sidebar";
import { Switch, Route } from "react-router-dom";
import Offers from "../components/Main/Offers/offers";
import Payments from "../components/Main/payments/payments";
import Settings from "../components/Main/settings/settings";
import Home from "../components/Main/Home/Home";
import Nav from "../components/Main/Nav";
import styled from "styled-components";

const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;
`;

const Dashboard = () => {
  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/deposits", name: "Home", Component: Main },
    { path: "/offers", name: "Home", Component: Offers },
    { path: "/paymets", name: "Home", Component: Payments },
    { path: "/settings", name: "Home", Component: Settings },
  ];

  return (
    <div>
      <SideBar />
      <Container>
        <Nav />
        <Route
          render={({ location }) => (
            <Switch location={location}>
              {routes.map(({ path, Component }) => (
                <Route exact key={path} path={path}>
                  <Component />
                </Route>
              ))}
            </Switch>
          )}
        />
      </Container>
    </div>
  );
};

export default Dashboard;

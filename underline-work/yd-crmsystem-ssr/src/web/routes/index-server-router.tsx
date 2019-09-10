import * as React from "react";
import { Route, Switch, RouteProps } from "react-router-dom";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import Demo from "../components/demo";

export const routes: RouteProps[] = [
  {
    path: "/",
    exact: true,
    component: Home,
    auth: true
  },
  {
    path: "/demos",
    exact: true,
    component: Demo
  }
];

// 对状态属性进行监听
const Routes = () => (
    <Switch>
      {routes.map((r, index) => {
        const { path, exact, component } = r;
        const LazyCom = component;
        return (
          <Route
            key={index}
            path={path}
            exact={exact}
            render={props =>
              (
                <LazyCom {...props} />
              )
            }
          />
        );
      })}
      <Route component={NotFound} />
    </Switch>
);

export default Routes;

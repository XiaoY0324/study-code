import * as React from "react";
import { Route, Switch, RouteProps, Redirect } from "react-router-dom";
import Loading from "../components/Loading";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
const { lazy, Suspense } = React;

const Demo = lazy(() =>
  import(/* webpackChunkName:"demo" */ "../components/demo")
);

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
  <Suspense fallback={<Loading />}>
    <Switch>
      {routes.map((r, index) => {
        console.log("🍊", index);
        // const token = localStorage["token"];
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
  </Suspense>
);

export default Routes;

import * as React from "react";
import { Route, Switch, RouteProps, Redirect } from "react-router-dom";
import Loading from "@components/Loading";
// import Layout from "@pages/Layout";
import NotFound from "@components/NotFound";
// import { string } from "prop-types";
const { Suspense, lazy } = React;
const Demo = lazy(() =>
  import(/* webpackChunkName:"demo" */ "@components/Demo")
);
const Login = lazy(() =>
  import(/* webpackChunkName:"login" */ "@components/Login")
);
const Home = lazy(() =>
  import(/* webpackChunkName:"home" */ "@components/Home")
);
const Index = lazy(() =>
  import(/* webpackChunkName:"index" */ "@components/Index")
);
const Layout = lazy(() =>
  import(/* webpackChunkName:"layout" */ "@pages/Layout")
);
// const HomeLayout = () => (
//   <Layout>
//     <Home />
//   </Layout>
// );
const Welcome = () => {
  return <span>欢迎使用京程一灯管理系统</span>;
};
const About = lazy(() =>
  import(/* webpackChunkName:"about" */ "@components/About")
);
interface YDProps extends RouteProps {
  auth?: boolean;
}
const routes: YDProps[] = [
  {
    path: "/",
    exact: true,
    auth: false,
    component: Home
  },
  {
    path: "/login",
    exact: true,
    component: Login
  },
  {
    path: "/demos/:id",
    exact: true,
    component: Demo
  },
  {
    path: "/index/",
    exact: false,
    component: Layout,
    auth: true
  }
];
const indexRoutes: YDProps[] = [
  {
    path: "/index/index",
    exact: true,
    component: Index,
    auth: true
  },
  {
    path: "/index/about",
    exact: true,
    component: About,
    auth: true
  }
];
const generateRoutes = (routes: YDProps[], NotFound) => (token: string) => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {routes.map((r, index) => {
        // console.log("🍊", index);
        const { path, exact, component } = r;
        const LazyCom = component;
        return (
          <Route
            key={index}
            path={path}
            exact={exact}
            render={props =>
              !r.auth ? (
                <LazyCom {...props} />
              ) : token ? (
                <LazyCom {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: props.location }
                  }}
                />
              )
            }
          />
        );
      })}
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

// 对状态属性进行监听
const Routes = generateRoutes(routes, NotFound);
const IndexRutes = generateRoutes(indexRoutes, Welcome);
export { IndexRutes };
export default Routes;

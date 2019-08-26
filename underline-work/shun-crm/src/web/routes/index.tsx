/**
 * 页面路由 统一处理节点
 */
import * as React from "react";
import { Route, Switch, RouteProps, Redirect } from "react-router-dom";
import Home from '@components/Home';
import Login from '@components/Login';

import Loading from "@components/Loading";
import NotFound from "@components/NotFound";

const { Suspense, lazy } = React;

const Index = lazy(() =>
  import(/* webpackChunkName:"index" */ "@components/Index")
);
const About = lazy(() =>
  import(/* webpackChunkName:"about" */ "@components/About")
);

const Layout = lazy(() =>
  import(/* webpackChunkName:"layout" */ "@pages/Layout")
);

const Welcome = () => {
  return <span>欢迎使用杨帅~~管理系统</span>;
};
interface YSProps extends RouteProps {
  map?(arg0: (r: any, index: any) => JSX.Element): React.ReactNode;
  auth?: boolean;
}

// (使用了Layout 包裹 带 banner 的路由)
const indexRoutes: YSProps[] = [
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

// 页面路由
const routes:YSProps[] = [
  {
    path: "/",
    exact: true, // 精准匹配
    auth: true, 
    component: Home
  },
  {
    path: "/login",
    exact: true,
    auth: false, 
    component: Login
  },
  { // 渲染 Layout 组件
    path: "/index/",
    exact: false,
    component: Layout,
    auth: true
  }
]

const generateRoutes = (routes:YSProps, NotFound: { (): JSX.Element; (): JSX.Element; }) => (token: string) => {
  console.log(token, '~~~~~~~~~~~~~');
  return <Suspense fallback={<Loading />}>
    <Switch>
      {routes.map((r, index) => {
        // console.log("🍊", index);
        const { path, exact, component } = r;
        const LazyCom = component; // 当前组件
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
}

// 对状态属性进行监听
const Routes = generateRoutes(routes, NotFound); // 页面路由
const IndexRoutes = generateRoutes(indexRoutes, Welcome); // 根路由

export { IndexRoutes };
export default Routes;
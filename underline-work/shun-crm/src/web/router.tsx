import * as React from "react";
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from '@pages/Home/home';
import Login from '@pages/Login/login';

const AsyncComponent = lazy(() => import('@components/AsyncComponent')); // 异步组件

const BasicRoute = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      {/* Switch 和 exact 需配套使用 */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        {/* <Route exact path="/login" component={ Login } /> */}
      </Switch>
    </Suspense>
  </Router>
);

export default BasicRoute;
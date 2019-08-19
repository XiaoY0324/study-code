import * as React from "react";
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from '@pages/Home/home';
import Login from '@pages/Login/login';

const AsyncComponent = lazy(() => import('@components/AsyncComponent')); // 异步组件

const BasicRoute = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      {/* <div className="App">
        <ul className="nav green">
          <li>
            <Link to="/home">home 组件</Link>
          </li>
          <li>
            <Link to="/login">login 组件</Link>
          </li>
        </ul>
      </div> */}
      {/* 
        Switch && exact
      */}
      <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/home" component={ Home } />
          {/* <Route exact path="/login" component={ Login } /> */}
      </Switch>
    </Suspense>
  </Router>
);

export default BasicRoute;
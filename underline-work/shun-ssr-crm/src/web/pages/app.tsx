/**
 * 客户端用  服务端没有 BrowserRouter
 */
import * as React from "react";
import routes from "../routes";
import { BrowserRouter } from "react-router-dom";
import Banner from "../components/Banner";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Banner />
        {routes()}
      </BrowserRouter>
    </>
  );
};
export default App;

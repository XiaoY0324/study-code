/**
 * 服务端用 
 * 服务端没有 BrowserRouter ——> StaticRouter
 * 服务端没有 basename  ——> location
 */
import * as React from "react";
import routes from "../routes/index-server-router";
import { StaticRouter } from "react-router-dom";
import Banner from "../components/Banner";

// 匹配后端的 url 传递静态组件
const App = (url: string) => {
  return (
    <>
      <StaticRouter location={url}>
        <Banner/>
        {routes()}
      </StaticRouter>
    </>
  );
};
export default App;

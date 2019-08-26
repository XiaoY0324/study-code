/**
 * 对路由进行一层包裹
 */
import * as React from "react";
import routes from "../routes";
const { useContext } = React;
import { BrowserRouter } from "react-router-dom";
import YsStore from "@models/YsStore";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  const ysStore = useContext(YsStore); // 取到对应全局变量
  const token = ysStore.token;

  console.log('token is', token);
  return (
    <>
      <BrowserRouter basename="/">
        { routes(token) }
      </BrowserRouter>
    </>
  );
});

export default App;
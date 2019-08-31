import * as React from "react";
const { useContext } = React;
import { NavLink } from "react-router-dom";
import "./banner.css";
import { observer } from "mobx-react-lite";
const Banner = observer(props => {
  console.log("🌶Banner渲染", props);
  // console.log("硬获取", location.pathname);
  // if (location.pathname === "/login") {
  //   console.log("命中");
  //   return null;
  // }
  // const ydstore = useContext(YdStore);
  // if (ydstore.needHidden) {
  //   return null;
  // }
  // const show = !ydstore.needHidden ? "show" : "";
  return (
    <div className="components-banner">
      <input type="text" />
      <ul>
        <li>
          <NavLink to="/index/index">首页</NavLink>
        </li>
        <li>
          <NavLink to="/login">登录页</NavLink>
        </li>
        <li>
          <NavLink to="/demos/123">demo页</NavLink>
        </li>
        <li>
          <NavLink to="/index/about">关于我们</NavLink>
        </li>
      </ul>
    </div>
  );
});
export default Banner;

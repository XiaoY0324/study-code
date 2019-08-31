import "./login.css";
import * as React from "react";
const { useContext } = React;
// import { DatePicker } from "antd";
import { NavLink,RouteComponentProps } from "react-router-dom";
import YdStore from "@models/YdStore";
import { observer } from "mobx-react-lite";
const Login = observer((routerProps:RouteComponentProps) => {
  const { location, history } = routerProps;
  const ydstore = useContext(YdStore);
  ydstore.needHidden = true;
  const RedirectUrl = location.state ? location.state.from.pathname : "/index/index";
  // 登陆成功之后的跳转
  const loginIn = () => {
    ydstore.token = localStorage["token"] = Math.random().toString();
    history.push(RedirectUrl);
    ydstore.needHidden = false;
  };
  return (
    <>
      <div className="components-login">
        <span>{ydstore.token}</span>
        <span>
          <NavLink to="/">首页xxx</NavLink>
        </span>
        <input type="button" value="登录系统首页" onClick={loginIn} />
        {/* <DatePicker /> */}
      </div>
    </>
  );
});
export default Login;

import "./login.css";
import * as React from "react";
import { NavLink, RouteComponentProps } from "react-router-dom";
import YsStore from "@models/YsStore";
import { observer } from "mobx-react-lite";

import Form from './form';
import { ChangeEvent, useContext } from "react";

/**
 * 接收顶层route传来的 props 
 */
const Login = observer((routerProps:RouteComponentProps) => {
  const { location, history } = routerProps;
  const ysStore = useContext(YsStore);

  ysStore.needHidden = true; // 判断是否显示 banner 菜单 (tab 切换列) 登录页干掉 banner

  const RedirectUrl = location.state ? location.state.from.pathname : "/index/index"; // 登录成功的跳转页

  // 登陆成功之后的跳转
  const loginIn = () => {
    localStorage['token'] = JSON.stringify(ysStore.token);
    history.push(RedirectUrl);
    ysStore.needHidden = false;
  };
  
  const changeInput = (e: { target: { value: string, placeholder: string } }): void => {
    console.log(e.target.value);
    if (e.target.placeholder === 'username') Object.assign(ysStore, { 
      token: { 
        username: e.target.value, 
        password: ysStore.token.password 
      } 
    });
      else Object.assign(ysStore, {
        token: {  
          username: ysStore.token.username, 
          password: e.target.value 
        } 
      });
  }

  return (
    <>
      <div className="components-login">
        <div className="warp">
          <div className="info">
            <h1>内容管理系统</h1>
            <p>运营与管控一体化的整合式服务平台</p>
            <p>一起解构数字世界，碰撞科技创新思想</p>
          </div>
          <Form { ...ysStore }  changeInput={ changeInput } loginIn={ loginIn }/>
        </div>
        <div className="copy-right">好未来教育集团 © 2018 版权所有</div>
      </div>
    </>
  );
});
export default Login;

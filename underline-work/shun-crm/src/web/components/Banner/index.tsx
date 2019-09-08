/**
 * 顶部 banner
 */
import * as React from "react";
const { useContext } = React;
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import YsStore from "@models/YsStore";
import "./banner.css";

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
  const ysStore = useContext(YsStore);
  const loginStatus = ysStore.token && ysStore.token.username;

  const handleMenuClick = (e: any) => {
    if (e.key == '1') {
      localStorage.removeItem('token');
      return window.location.href = "/login";
    } 

    window.location.href = "/login";
  }

  const menu = (
    <Menu onClick={ handleMenuClick }>
      <Menu.Item key="1" style={{ display: loginStatus ? 'inline' : 'none' }}>
        <Icon type="user" />
        退出登录
      </Menu.Item>
      <Menu.Item key="2" style={{ display: loginStatus ? 'none' : 'inline' }}>
        <Icon type="user" />
        立即登录
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="components-banner">
      <div className="logo">
        <NavLink to="/">SHUN</NavLink>
      </div>
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
        <li>
          <Dropdown.Button overlay={menu} icon={<Icon type="down" />} placement="bottomRight">
            { ysStore.token ? ysStore.token.username : '产品小汪' }
          </Dropdown.Button>
        </li>
      </ul>
    </div>
  );
});
export default Banner;

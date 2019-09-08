import * as React from "react";
import "./leftmenu.css";
import { NavLink } from "react-router-dom";
import { Menu, Icon, Button } from 'antd';
import YsStore from "@models/YsStore";
import { observer } from "mobx-react-lite";

const { useContext } = React;  
const { SubMenu } = Menu;

const LeftMenu = observer(() => {
  const ysStore = useContext(YsStore);
  const toggleCollapsed = (val: boolean) => ysStore.menuCollapsed = val;
  
  return (
    <div className="components-leftMenu">
        <div style={{ width: 200 }}>
        <Button type="primary" onClick={() => toggleCollapsed(!ysStore.menuCollapsed) } style={{ marginBottom: 16 }}>
          <Icon type={ysStore.menuCollapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['/index/intention']}
          defaultOpenKeys={['/index/callCenter', '/index/visa']}
          mode="inline"
          theme="dark"
          inlineCollapsed={ysStore.menuCollapsed}
        >
          <Menu.Item key="/index/crming">
            <Icon type="pie-chart" />
            {/* <span>在办客户</span> */}
            <NavLink style={{ display: ysStore.menuCollapsed ? 'none' : 'inline' }} to="/index/crming"><span>在办列表</span></NavLink>
          </Menu.Item>
          <Menu.Item key="/index/intention">
            <Icon type="desktop" />
            <NavLink style={{ display: ysStore.menuCollapsed ? 'none' : 'inline' }} to="/index/intention"><span>意向客户</span></NavLink>
          </Menu.Item>
          <Menu.Item key="/index/selectSchool">
            <Icon type="inbox" />
            <NavLink style={{ display: ysStore.menuCollapsed ? 'none' : 'inline' }} to="/index/selectSchool"><span>选校系统</span></NavLink>
          </Menu.Item>
          <SubMenu
            key="/index/visa"
            title={
              <span>
                <Icon type="mail" />
                <span>网签</span>
              </span>
            }
          >
            <Menu.Item key="5">报价单列表</Menu.Item>
            <Menu.Item key="6">合同列表</Menu.Item>
            <Menu.Item key="7">选校列表</Menu.Item>
            <Menu.Item key="8">visa列表</Menu.Item>
          </SubMenu>
          <SubMenu
            key="/index/callCenter"
            title={
              <span>
                <Icon type="appstore" />
                <span>呼叫中心</span>
              </span>
            }
          >
            <Menu.Item key="9">通话记录</Menu.Item>
            <Menu.Item key="10">通话统计</Menu.Item>
            <SubMenu key="sub3" title="统计月份">
              <Menu.Item key="11">当月通话统计</Menu.Item>
              <Menu.Item key="12">全年通话统计</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
});
export default LeftMenu;

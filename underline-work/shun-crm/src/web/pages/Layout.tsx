import * as React from "react";
import Banner from "@components/Banner";
import LeftMenu from "@components/LeftMenu";
import { IndexRoutes } from "../routes";
import YsStore from "@models/YsStore";
import { observer } from "mobx-react-lite";
const {memo} = React;
const { useContext } = React;

const Layout = observer(() => {
  console.log("🍉LAYOUT模板渲染");
  const ysStore = useContext(YsStore);
  const token = ysStore.token;
  const BannerMemo = React.useCallback(() => <Banner />, []);
  // const whiteList = ['/index/index', '/index/about', '/index/intention', '/demos/'];

  return (
    <>
      {/* {whiteList.includes(location.pathname) && <BannerMemo />} */}
      <BannerMemo />
      <div className="content">
        <LeftMenu/>
        {/* {props.children} */}
        <div className="pages" style={{ left: ysStore.menuCollapsed ? '100px' : '200px' }}>
          {IndexRoutes(token)}
        </div>
      </div>
    </>
  );
});
export default Layout;

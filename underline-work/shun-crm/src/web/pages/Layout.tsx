import * as React from "react";
import Banner from "@components/Banner";
import { IndexRoutes } from "../routes";
import YsStore from "@models/YsStore";
import { observer } from "mobx-react-lite";
const {memo} = React;
const { useContext } = React;

const Layout = observer(() => {
  console.log("🍉LAYOUT组件渲染");
  const ysStore = useContext(YsStore);
  const token = ysStore.token;
  // const BannerMemo = React.useCallback(() => <Banner />, []);
  return (
    <>
      {/* {whiteList.includes(location.pathname) && <BannerMemo />} */}
      <Banner />
      {/* {props.children} */}
      {IndexRoutes(token)}
    </>
  );
});
export default Layout;

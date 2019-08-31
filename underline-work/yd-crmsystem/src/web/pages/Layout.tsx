import * as React from "react";
import Banner from "@components/Banner";
import { IndexRutes } from "../routes";
import YdStore from "@models/YdStore";
import { observer } from "mobx-react-lite";
const {memo} = React;
const { useContext } = React;
const Layout = observer(() => {
  console.log("🍉LAYOUT组件渲染");
  const ydstore = useContext(YdStore);
  const token = ydstore.token;
  // const BannerMemo = React.useCallback(() => <Banner />, []);
  return (
    <>
      {/* {whiteList.includes(location.pathname) && <BannerMemo />} */}
      <Banner />
      {/* {props.children} */}
      {IndexRutes(token)}
    </>
  );
});
export default Layout;

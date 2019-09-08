import * as React from "react";
import "./intention.css";
import { NavLink } from "react-router-dom";
import YsStore from "@models/YsStore";
import { observer } from "mobx-react-lite";
import { Empty } from 'antd';

const { useContext } = React;  

const Intention = observer(() => {
  const ysStore = useContext(YsStore);

  return (
    <div className="components-intention">
        <div className="pure">
          helo 这里是意向客户
        </div>
    </div>
  );
});
export default Intention;

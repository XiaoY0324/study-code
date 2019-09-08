import * as React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="components-home">
        <li>
          <NavLink to="/index/index">打开新世界的大门</NavLink>
        </li>
    </div>
  );
};
export default Home;

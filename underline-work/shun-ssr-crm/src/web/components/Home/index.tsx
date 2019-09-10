import * as React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="components-home">
      <span>
        <NavLink to="/login">登录页</NavLink>
      </span>
      <h2 data-testid="js-h2">shun crm</h2>
      <ul data-testid="js-ul">
        <li>JavaScript</li>
        <li>CSS</li>
      </ul>
    </div>
  );
};
export default Home;

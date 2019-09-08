/**
 * 除layout 渲染外的 404 页面
 */
import * as React from "react";
import { Empty } from 'antd';

import './notFound.css';

const NotFound = () => {
  return (
    <>
      <div className="components-notfound">
        <Empty description="页面走丢啦~" />
      </div>
    </>
  );
};
export default NotFound;

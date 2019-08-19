import * as React from "react";
import './home.css';
import { Button } from 'antd';

const HomeComponent = () => {
    return <>
            <h1 className="home">我是首页 </h1>
            <Button type="primary">Primary</Button>
           </>
}

export default HomeComponent;
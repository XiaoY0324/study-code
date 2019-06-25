import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";

import { App } from "./app.js";

afterEach(cleanup); // 每次测试之前 把之前的结果清掉

describe("基础react单元测试", function() {
    it("app组件测试", function() {
        const { getByTestId } = render(<App/>); // 虚拟渲染组件dom 取出testId列表
        const [ul, nav] = [getByTestId("js-ul"), getByTestId("js-h2")];
        expect(ul.children.length).toBe(2);
        expect(nav.textContent).toContain('一盏灯');
    })
});
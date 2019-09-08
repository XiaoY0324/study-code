import * as React from "react";
import Layout from "@pages/Layout";
import About from "@components/About";
const Demo = () => {
  console.log("🍉About模板渲染");
  return (
    <Layout>
      <About />
    </Layout>
  );
};
export default Demo;
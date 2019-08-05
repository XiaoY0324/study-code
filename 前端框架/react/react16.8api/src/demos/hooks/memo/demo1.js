import React from "react";
const { memo, useState } = React;
const Counter = memo(props => { // memo 包起来 可以保证子组件props不变不渲染哦
  console.log("组件渲染");
  return <h1>{props.data}</h1>;
});
// const Counter = props => {
//   console.log("组件渲染");
//   return <h1>{props.data}</h1>;
// };
export default function App() {
  const [count, setCount] = useState(0); // 意思是count 默认等于0   setCount可以设置count
  const data = "杨帅";
  return (
    <>
      <span>{count}</span>
      <input
        type="button"
        onClick={() => setCount(count + 1)}
        value="修改count"
      />
      <Counter data={data} />
    </>
  );
}
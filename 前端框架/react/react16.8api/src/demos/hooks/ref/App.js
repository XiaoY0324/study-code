import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle
} from "react";

// forwardRef 让父组件调用子组件
const ContextComp = forwardRef((props, ref) => { 
  useImperativeHandle(ref, () => ({ // 加工传进来的ref 
    method() {
      console.log("ref方法执行");
    }
  }));

  return <p>子组件</p>;
});

export default function App() {
  const ref = useRef();
  useEffect(() => {
    console.log("component update");
    ref.current.method();
    return () => {
      console.log("unbind");
    };
  }, []);
  return (
    <>
      <ContextComp ref={ref} />
    </>
  );
}

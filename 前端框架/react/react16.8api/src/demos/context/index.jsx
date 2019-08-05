//Context 主要是解决props向多层嵌套的子组件传递的问题，原理是定义了一个全局对象
import React from "react";
import PropTypes from "prop-types";

/**
 * Provider 数据提供方
 * Consumerr 数据订阅方
 */
const { Provider, Consumer } = React.createContext("default");

class Parent extends React.Component {
  state = {
    yideng: "普通字符串🍌",
    newContext: "杨帅"
  };

  //   getChildContext() {
  //     return { value: this.state.newContext, yideng: this.state.yideng };
  //   }
  render() {
    //    <React.Fragment> ==  <>
    return (
      <>
        <div>
          <label className="text-warning">父节点=> newContext:</label>
          <input
            type="text"
            value={this.state.newContext}
            onChange={e => this.setState({ newContext: e.target.value })}
          />
        </div>
        <div>
          <label className="text-info">父节点=>yideng:</label>
          <input
            type="text"
            value={this.state.yideng}
            onChange={e => this.setState({ yideng: e.target.value })}
          />
        </div>
        {/* {this.props.children} */}
        {/* 这个组件的意思是 如果一旦给 Provider 组件传递进一些值的话 那么我就可以对所有的子组件灌进去一个叫做 value 的东西,
        也就是子组件可以用 value.newContext 或者 value.yideng 去取值。 */}
        <Provider
          value={{ newContext: this.state.newContext, yideng: "普通字符串🍌" }}
        >
          {this.props.children}
        </Provider>
      </>
    );
  }
}

function Child(props, context) {
  return (
    <Consumer>
      {value => (
        <p className="text-warning">子节点 newContext: {value.newContext}</p>
      )}
    </Consumer>
  );
}

class Child2 extends React.Component {
  static contextTypes = {
    yideng: PropTypes.string
  };
  render() {
    // return <p>字符串a: {this.context.yideng}</p>;
    return (
      <Consumer>
        {value => <p className="text-info">子节点 yideng: {value.yideng}</p>}
      </Consumer>
    );
  }
}
Child.contextTypes = {
  value: PropTypes.string
};
// Parent.childContextTypes = {
//   value: PropTypes.string,
//   yideng: PropTypes.string
// };

export default () => (
  <Parent>
    <Child />
    <Child2 />
  </Parent>
);

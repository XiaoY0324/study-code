import React from 'react'

export default class RefDemo extends React.Component {
  constructor() {
    super()
    this.objRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.refs.stringRef.textContent = 'string ref got' // 老做法 如果两个标签的ref 相同 就熄火了
      this.methodRef.textContent = 'method ref got'
      this.objRef.current.textContent = 'obj ref got' // 目前做法 react 帮我们创建、
      
    }, 30)
  }

  render() {
    return (
      <>
        <p  className="text-success" ref="stringRef">span1</p>
        <p ref={ele => (this.methodRef = ele)}>span3</p>
        <p ref={this.objRef}>span3</p>
      </>
    )
  }
}
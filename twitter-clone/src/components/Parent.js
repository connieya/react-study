import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    console.log("DDSDSADADAda = ", this.child);
  }

  onClick = () => {
    this.child.current.getAlert();
    console.log("DDSDSADADAda = ", this.child.current);
  };
  render() {
    return (
      <div>
        <Child ref={this.child} />
        <button onClick={this.onClick}>Click</button>
      </div>
    );
  }
}

export default Parent;

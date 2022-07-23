import React, { Component } from "react";

class Child extends Component {
  getAlert() {
    alert("getAlert from Child");
  }

  render() {
    return <h1>Hello</h1>;
  }
}

export default Child;

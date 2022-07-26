import React, { Component } from "react";

class App extends Component {
  state = {
    SplitMe: null,
  };
  handleClick = async () => {
    const loadedModule = await import("./SplitMe");
    this.setState({
      SplitMe: loadedModule.default,
    });
  };
  render() {
    const { SplitMe } = this.state;
    return (
      <div>
        <h1>APP</h1>
        <p onClick={this.handleClick}>Hello React</p>
        {SplitMe && <SplitMe />}
      </div>
    );
  }
}

export default App;

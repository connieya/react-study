import React, { Component } from "react";

class Parent extends Component {
  state = [
    {
      terminate: false,
    },
  ];
  componentDidMount() {
    // this.setState(() => ({
    //   terminate: false,
    // }));
    console.log("terminate === ", this.state.terminate);
  }

  render() {
    console.log("terminate render === ", this.state.terminate);
    return (
      <div>
        <button
          onClick={() => {
            this.setState((prevState) => ({
              terminate: !prevState.terminate,
            }));
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}

export default Parent;

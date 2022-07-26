import React, { Component } from "react";
import Content from "./components/Content";
import Subject from "./components/Subject";
import TOC from "./components/TOC";

class App extends Component {
  state = {
    subject: { title: "WEB", sub: "World Wide Web!" },
    contents: [
      { id: 1, title: "HTML", desc: "HTML is for information" },
      { id: 2, title: "CSS", desc: "CSS is for design" },
      { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
    ],
  };
  render() {
    return (
      <div>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        />
        <TOC data={this.state.contents} />
        <Content
          title={this.state.subject.title}
          desc={this.state.subject.sub}
        />
      </div>
    );
  }
}

export default App;

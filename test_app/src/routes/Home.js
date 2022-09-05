import React, { useState } from "react";
import { connect } from "react-redux";
// import { actionCreators } from "../redux/store";

const Home = ({ toDos, addTodo }) => {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>submit</button>
      </form>
      <ul></ul>
    </div>
  );
};

function mapStateToProps(state) {
  return { toDos: state };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addTodo: (text) => dispatch(actionCreators.addTodo(text)),
//   };
// }

export default connect(mapStateToProps)(Home);

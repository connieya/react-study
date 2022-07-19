import { Component } from "react";
import { connect } from "react-redux";
import AddNumber from "../components/AddNumber";

function mapReduxStateToReactProps() {}

function mapReduxDispatchToReactProps(dispatch) {
  return {
    onClick: function (size) {
      dispatch({ type: "INCREMENT", size: size });
    },
  };
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);

// export default class extends Component {
//   render() {
//     return (
//       <AddNumber
//         onClick={function (size) {
//           store.dispatch({ type: "INCREMENT", size: size });
//         }}
//       ></AddNumber>
//     );
//   }
// }

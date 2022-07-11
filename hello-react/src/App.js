import "./App.css";
import ScrollBox from "./05_ref/ScrollBox";

function App() {
  return (
    <>
      <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
      <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
    </>
  );
}

export default App;

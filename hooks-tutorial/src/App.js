import { useState } from "react";
import Average from "./08_hooks/Average";
import Counter from "./08_hooks/Counter";
import Info from "./08_hooks/Info";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {/* <button onClick={() => setVisible(!visible)}>
        {visible ? "숨기기" : "보이기"}
      </button>
      {visible && <Info />} */}
      <Average />
    </>
  );
}

export default App;

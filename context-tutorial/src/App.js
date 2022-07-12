import "./App.css";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

function App() {
  return (
    <ColorContext.Provider value={{ color: "red" }}>
      <div>
        <h1>ㅎㅇ</h1>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}

export default App;

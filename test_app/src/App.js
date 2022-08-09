import React, { useState, useMemo } from "react";
import Parent from "./components/Parent";
import VideoRoom from "./components/VideoRoom";
import MemoizationOne from "./components/MemoizationOne";
import MemoizationTwo from "./components/MemoizationTwo";
import UseCallbackEx from "./components/UseCallbackEx";
import UseCallbackEx2 from "./components/UseCallbackEx2";
import Virtual from "./components/Virtual";

function App() {
  return (
    <div className='App'>
      {/* <MemoizationOne /> */}
      {/* <MemoizationTwo /> */}
      {/* <UseCallbackEx /> */}
      {/* <UseCallbackEx2 /> */}
      <Virtual />
    </div>
  );
}

export default App;

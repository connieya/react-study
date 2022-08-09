import React, { useState, useMemo } from "react";
import Parent from "./components/Parent";
import VideoRoom from "./components/VideoRoom";
import MemoizationOne from "./components/MemoizationOne";

function App() {
  return (
    <div className='App'>
      <MemoizationOne />
    </div>
  );
}

export default App;

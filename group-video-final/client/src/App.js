import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";
import VideoChat from "./routes/VideoChat";
import VoiceChat from "./routes/VoiceChat";

function App() {
  return (
    <>
      {/* <VoiceChat /> */}
      <VideoChat />
      {/* <Routes>
        <Route path='/' exact element={<CreateRoom />} />
        <Route path='/room/:roomID' element={<Room />} />
      </Routes> */}
    </>
  );
}

export default App;

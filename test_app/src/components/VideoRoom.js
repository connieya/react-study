import React, { useEffect, useState } from "react";
import ChatHandsFree from "./ChatHandsFree";

const VideoRoom = () => {
  const [terminate, setTerminate] = useState(false);

  console.log("비디오 룸 , ", terminate);
  //   useEffect(() => {

  //   });
  const toggleTerminate = () => {
    setTerminate(!terminate);
  };
  return (
    <div>
      <h1>비디오 룸</h1>
      <button onClick={toggleTerminate}>종료</button>
      <ChatHandsFree terminate={terminate} />
    </div>
  );
};

export default VideoRoom;

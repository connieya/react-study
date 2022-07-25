import React, { useEffect } from "react";

const ChatHandsFree = ({ terminate }) => {
  useEffect(() => {
    if (terminate === true) {
      console.log(" 채팅 on ");
    }
  });
  return (
    <div>
      <h1> 채팅 룸</h1>
    </div>
  );
};

export default ChatHandsFree;

import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

const Chat = ({ socket, username, room }) => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const sendMessage = async () => {
    if (message !== "") {
      const messageData = {
        room: room,
        username: username,
        message: message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      console.log("message Data =", messageData);
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("use Effect data = ", data);
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className='chat-window'>
      <div className='chat-header'>
        <p>Live Chat</p>
      </div>
      <div className='chat-body'>
        <ScrollToBottom className='message-container'>
          {messageList.map((msg, index) => {
            return (
              <div
                key={index}
                className='message'
                id={username === msg.username ? "you" : "other"}
              >
                <div>
                  <div className='message-content'>
                    <p>{msg.message}</p>
                  </div>
                  <div className='message-meta'>
                    <p id='time'>{msg.time}</p>
                    <p id='author'>{msg.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className='chat-footer'>
        <input
          value={message}
          type='text'
          placeholder='입력해...'
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          onKeyPress={(e) => {
            e.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
};

export default Chat;

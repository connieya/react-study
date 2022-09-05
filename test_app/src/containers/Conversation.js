import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://front-assignment.exp.channel.io/conversations";

const Conversation = () => {
  const [conversationList, setConversationList] = useState([]);

  const getData = async () => {
    const response = await axios.get(URL).catch((err) => console.log(err));
    setConversationList(response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>대화 </h1>
      {conversationList?.map((data) => {
        return <div>{data.userName}</div>;
      })}
    </div>
  );
};

export default Conversation;

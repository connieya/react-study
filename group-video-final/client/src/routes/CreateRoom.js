import React from "react";
import { v1 as uuid } from "uuid";
const CreateRoom = (props) => {
  function create() {
    const id = uuid();
    console.log("props = ", props);
    props.history.push(`/room/${id}`);
  }

  return (
    <>
      <button onClick={create}>Create room</button>
    </>
  );
};

export default CreateRoom;

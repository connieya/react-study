import React, { useEffect, useState } from "react";

const Box = ({ createBoxStyle }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log("박스 키우기");
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  console.log("박스 컴포넌트");
  return <div style={style}></div>;
};

export default Box;

import React, { useCallback, useState } from "react";
import Box from "./Box";

const UseCallbackEx2 = () => {
  const [size, setSizes] = useState(100);
  const [isDark, setIsDark] = useState(false);

  //   const createBoxStyle = () => {
  //     return {
  //       backgroundColor: "pink",
  //       width: `${size}px`,
  //       height: `${size}px`,
  //     };
  //   };

  // createBoxStyle 함수가 size가 변경되었을 때만 초기화되게 해보자
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);
  console.log("useCallbackEx2 컴포넌트");
  return (
    <div style={{ background: isDark ? "black" : "white" }}>
      <input
        type={"number"}
        value={size}
        onChange={(e) => setSizes(e.target.value)}
      />
      <button onClick={() => setIsDark(!isDark)}>Change Theme </button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
};

export default UseCallbackEx2;

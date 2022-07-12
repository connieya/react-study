import React from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  return (
    <div>
      <h1>gww</h1>
      <ColorContext.Consumer>
        {(value) => (
          <div
            style={{
              width: "64px",
              heigh: "64px",
              background: value.color,
            }}
          ></div>
        )}
      </ColorContext.Consumer>
    </div>
  );
};

export default ColorBox;

import React from "react";

const Dot = ({ size = 50, style = {} }) => {
  return (
    <div
      className="dot"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
    ></div>
  );
};

export default Dot;

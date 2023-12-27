import React, { useState } from "react";
import Child from "./Child";
//parent component
const Parent = () => {
  const [boxcolor, setBoxColor] = useState();

  const getColor = (value) => {
    setBoxColor(value);
  };
  return (
    <>
      <h2>Child To Parent Data Pass</h2>

      <div
        className="mb-4 d-flex m-auto"
        style={{
          backgroundColor: `${boxcolor}`, //to take any value we use backtik ``
          width: 300,
          height: 400,
          border: "1px solid #000",
        }}
      ></div>
      <div className="text-center">
        <Child getColor={getColor} />
      </div>
    </>
  );
};

export default Parent;

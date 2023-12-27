import React, { useState } from "react";

const Child = ({ getColor }) => {
  const [color, setColor] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    setColor(value);
    getColor(value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} value={color} />
    </div>
  );
};

export default Child;

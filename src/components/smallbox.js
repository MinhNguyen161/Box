import React from "react";
import { useSelector } from "react-redux";

const SmallBox = () => {
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h2> I am small box </h2>
    </div>
  );
};

export default SmallBox;

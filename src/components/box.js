import React from "react";
import SmallBox from "./smallbox";
import { useSelector, useDispatch } from "react-redux";

const Box = ({ index }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const color = useSelector((state) => state.color);
  const uColor = useSelector((state) => state.boxList[index]);
  return (
    <div>
      <div
        style={{
          outline: "1px solid red",
          width: "200px",
          height: "200px",
          textAlign: "center",
          backgroundColor: uColor ? uColor : color
        }}
      >
        <h1> I am box </h1>
        <input
          tpye="text"
          onChange={(event) => {
            dispatch({
              type: "BOX",
              payload: { index: index, color: event.target.value }
            });
          }}
        ></input>
      </div>
    </div>
  );
};

export default Box;

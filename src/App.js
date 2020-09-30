import React from "react";
import "./App.css";
import { useDispatch, useSelector, Provider } from "react-redux";
import Box from "./components/box.js";

function App() {
  const dispatch = useDispatch();
  const boxList = useSelector((state) => state.boxList);
  const count = useSelector((state) => state.count);

  const incrementBy2 = () => {
    dispatch({ type: "INCREMENTBY2", payload: 2 });
  };
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const readInput = (text) => {
    console.log(text);
    dispatch({ type: "COLOR", payload: text });
  };
  return (
    <div>
      <div className="App">
        <h1>{count}</h1>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => incrementBy2()}>+ 2</button>

        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => reset()}>Reset</button>
        <input
          tpye="text"
          onChange={(event) => {
            readInput(event.target.value);
          }}
        ></input>
      </div>
      <div className="Appp">
        {boxList &&
          boxList.map((item, index) => {
            return <Box index={index} />;
          })}
      </div>
    </div>
  );
}

export default App;

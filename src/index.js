import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  count: 0,
  color: null,
  boxList: []
};

function reducer(state = initialState, action) {
  //switch Case
  switch (action.type) {
    case "BOX":
      state.boxList[action.payload.index] = action.payload.color;
      break;
    case "COLOR":
      state.color = action.payload;
      break;

    case "INCREMENTBY2":
      state.count = state.count + action.payload;
      state.boxList.push("");
      state.boxList.push("");

      break;
    case "INCREMENT":
      state.count++;
      console.log("+");
      state.boxList.push("");

      break;
    case "DECREMENT":
      state.count--;
      state.boxList.pop();

      if (state.count <= 0) {
        state.count = 0;
        break;
      }
      console.log("-");
      break;
    case "RESET":
      state.count = 0;
      state.boxList = [];
      break;
    default:
      console.log("nothing happen");
      break;
  }

  // if (action.type === "INCREMENT") {
  //   state.count++;
  // } else if (action.type === "DECREMENT") {
  //   if (state.count <= 0) {
  //     state.count = 0;
  //     return;
  //   }
  //   state.count--;
  // }
  // console.log("work");
  return { ...state }; // copy value of state, and mk new state
}

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

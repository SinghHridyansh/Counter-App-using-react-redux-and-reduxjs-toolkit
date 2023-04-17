import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/CounterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div className="buttons">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}

export default App;

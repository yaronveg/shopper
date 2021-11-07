import "./Counter.css";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(1);
  const addNumber = () => {
    setCounter(counter + 1);
  };
  const delNumber = () => {
    setCounter(counter - 1);
  };
  const changeAmount = () => {
    console.log(`amount changed to ${counter}`);
  };

  return (
    <div className="counter">
      <button onClick={addNumber} className="addItem">
        +
      </button>
      <input
        type="text"
        className="itemAmount"
        value={counter}
        onChange={changeAmount()}
      />
      <button onClick={delNumber} className="remItem">
        -
      </button>
    </div>
  );
}

export default Counter;

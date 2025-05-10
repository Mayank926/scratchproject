import React from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = React.useState(0);
  function increament() {
    setCount((prevCount) => prevCount + 1);
  }
  function decreament() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <main className="Counter-main">
      <h1>Count your heart out!!!</h1>
      <div className="counter-content">
        <button type = "button" className="minusBtn" onClick={decreament}>
          -
        </button>
        <button type = "button" className="displayBtn">
          {count}
        </button>
        <button type="button" className="plusBtn" onClick={increament}>
          +
        </button>
      </div>
    </main>
  );
}

export default Counter;

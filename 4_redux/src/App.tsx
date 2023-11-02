import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { RootState } from "./store";
import { useState } from "react";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");

  const handleIncrementByAmount = () => {
    const value = parseInt(amount);
    if (!isNaN(value)) {
      dispatch(incrementByAmount(value));
      setAmount("");
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        count is {count}
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
      <div>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleIncrementByAmount}>Increment by Amount</button>
      </div>
    </>
  );
}

export default App;

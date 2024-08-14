import { useReducer } from "react";
import counterReducer from "./counterReducer";

export default function App() {
  const [count, dispatch] = useReducer(counterReducer, 0)
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      </div>
    );
  }
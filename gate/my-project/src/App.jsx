import { useSelector, useDispatch } from "react-redux"
import {increment, decrement, incrementByAmount} from "./counterSlice";

function App() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button className="" onClick={() => dispatch(increment())}>Increment</button>
      <button className="" onClick={() => dispatch(decrement())}>Decrement</button>
      <button className="" onClick={() => dispatch(incrementByAmount())}>IncrementBy5</button>
    </div>
  )
}

export default App
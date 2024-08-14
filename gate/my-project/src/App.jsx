import { useDispatch, useSelector } from "react-redux"
import {incrementByNumber, increment, decrement} from "./counterSlice"
function App() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="">
      <h1 className="text-2xl font-bold">Count: {count}</h1>
      <div className="">
        <button className="px-1 py-1 bg-blue-500 mx-1" onClick={() => dispatch(increment())}>Increment</button>
        <button className="px-1 py-1 bg-blue-500 mx-1" onClick={() => dispatch(decrement())}>Increment</button>
        <button className="px-1 py-1 bg-blue-500 mx-1" onClick={() => dispatch(incrementByNumber(5))}>incrementBy5</button>
      </div>
    </div>
  )
}

export default App
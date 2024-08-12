<!-- app.jsx -->
```jsx

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

```

<!-- counterReducer.js -->
```js

const counterReducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state+1
        case "DECREMENT":
            return state-1    
        default:
            break;
    }
}

export default counterReducer

```
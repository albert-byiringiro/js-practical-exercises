<!-- cartReducer.js -->
```jsx

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, { id: action.id, name: action.name, quantity: 1}];
        case "REMOVE_ITEM":
            return state.filter(item => item.id !== action.id);
        case "INCREASE_QUANTITY":
            return state.map(item => 
                item.id === action.id 
                    ? {...item, quantity: item.quantity + 1}
                    : item
            );
        case "DECREASE_QUANTITY":
                return state.map(item => 
                    item.id === action.id && item.quantity > 1
                        ? {...item, quantity: item.quantity - 1}
                        : item
                );

        case "CLEAR_CART":
            return [];
    
        default:
            return state;
    }
}

export default cartReducer;

```

<!-- app.jsx -->
```jsx

import {useReducer} from "react";
import cartReducer from "./cartReducer"

export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItem = (id, name) => {
    dispatch({
      type: "ADD_ITEM",
      id,
      name,
    })
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      id
    })
  };

  const increaseQuantity = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY", 
      id,
    })
  };

  const decreaseQuantity = (id) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      id,
    })
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART"
    })
  }
  
  return (
    <div className="">
      <h2 className="">Shopping Cart</h2>
      {cart.length === 0 && <p>Your cart is empty</p>}
      <ul className="">
        {cart.map(item => (
          <li className="" key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button className="" onClick={()=> increaseQuantity(item.id)}>+</button>
            <button className="" onClick={()=> decreaseQuantity(item.id)}> `-` </button>
            <button className="" onClick={()=> removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button className="" onClick={clearCart}>Clear cart</button>
      <br />
      <button className="" onClick={()=> addItem(Date.now(), "new item")}>Add new Item</button>
      
    </div>

  )
}

```
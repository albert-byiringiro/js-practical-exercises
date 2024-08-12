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
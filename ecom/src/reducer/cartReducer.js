const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        let { id, color, amount, product } = action.payload;

        return {
          cart: [...state.cart, { id, color, amount, product }],
          total_item: state.total_item + 1
        };

       case "DELETE_FROM_CART":
      const itemIdToRemove = action.payload;
      const updatedCart = state.cart.filter(item => item.id !== itemIdToRemove)
      return {
        cart: updatedCart,
        total_item: state.total_item - 1
      };
  
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  
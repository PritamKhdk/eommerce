const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") { 
        let { id, color, amount, product } = action.payload; 
        // console.log("s",id,color,amount,product)
        return{
            cart:[...state.cart,{ id, color, amount, product }],
            total_item: state.total_item + 1
        }
    }

    return state;
  };
  
  export default cartReducer;


  
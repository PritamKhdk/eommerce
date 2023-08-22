import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer.js";
import { cartinitState } from "../reducer/cartinitState.js";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(reducer, cartinitState);

  return (
    <CartContext.Provider value={{ ...cartState, cartState,cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext,CartContext };

import { createContext, useEffect,useReducer } from "react";
import axios from "axios";
import ProductReducer from "../reducer/productReducer";
import { initialstate } from "../reducer/initialState";


const AppContext = createContext();

const API = async () => {

  try {
    const response = await axios.get("http://localhost:8000/");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; 
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer,initialstate);
  
  const getProducts = async () => {
    try {
      const productsData = await API(); 
      dispatch({ type: "SET_API_DATA", payload: productsData });
      dispatch({type:"SET_PRODUCT_DATA",payload:productsData});
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await API();
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(); 
  }, []);
 
  return (
    <AppContext.Provider value={{ ...state,getSingleProduct}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };


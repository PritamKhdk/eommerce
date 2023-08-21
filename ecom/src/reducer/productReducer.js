const ProductReducer=(state, action) => {

switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        featureProducts: featureData,
      };

      case "API_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };

        case "SET_PRODUCT_DATA":
            const allproduct =action.payload 
            return{
                ...state,
                isLoading: false,
                products: allproduct,
            }
            case "SET_SINGLE_PRODUCT":
              return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload,
              };
              case "SET_SINGLE_ERROR":
                return {
                  ...state,
                  isSingleLoading: false,
                  isError: true,
                };

        default:
            return state;       

   }
}

export default ProductReducer
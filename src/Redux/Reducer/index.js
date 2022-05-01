import { darkMode, ORDER_BY_PRICE, FILTER_BY_BRAND2 } from "../Actions";

const initialState = {
  allProducts: [],
  products: [],
  users: [],
  userOne:[],
  productDetail: [],
  filteredByCategory: [],
  brand: [],
  allBrands:[],
  darkMode: true,
  categories: []
};

function rootReducer(state = initialState, action) {
  console.log("State: " + state.products)
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
        productDetail: [],
      };
    case "GET_CATEGORIES": {
      return {
        ...state,
        categories: action.payload
      }
    }
    case "POST_PRODUCT":
      return {
        ...state,
        allProducts: action.payload,
      };
    case "GET_USER":
      return {
        ...state,
        users: action.payload,
      };
    case 'GET_DETAILS':
      return {
          ...state,
          productDetail: action.payload,
          products: [],
      }
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        products: action.payload,
        productDetail: []
      }
    case "GET_PRODUCTS_BY_NAME":
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
        productDetail: []
      }
      case "POST_USER":
      return {
        ...state,
        userOne: action.payload,
      };
      case "FILTER_BY_BRAND":
        return {
          ...state,
          products: action.payload,
          
        }

          case FILTER_BY_BRAND2:
                            const filtered = action.payload === "all"
                            ? state.products
                            : state.products.filter((el) => el.brand?.includes(action.payload))
                        return{
                            ...state,
                            allProducts: filtered
                        }
        // case ORDER_BY_PRICE:
        //   let priceProduct = [...state.products]
        //   console.log(state.products)
        //   priceProduct = priceProduct.sort((a, b) => {
        //           if(a.price < b.price) {
        //               return action.payload === 'Inc Price' ? -1 : 1
        //           }
        //           if(a.price > b.price) {
        //               return action.payload === 'Dec Price' ?  -1 : 1
        //           } 
        //           return 0
        //       })



      case "DARKMODE":
        return {
          ...state,
          darkMode: action.payload
        }
    default:
      return state;
  }
}

export default rootReducer;
